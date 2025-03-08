<script setup>

import {ref} from "vue";

const router = useRouter();

const next_question = (targetpage) => {

};
const goToPage = (targetpage) => {
  router.push({ path: '/'+targetpage });
};
const questionnaire=ref([
    {
      question:'How was your experience on today\'s class?',
      choices:[
          'Very good',
          'Good',
          'Fair',
          'Poor'

      ]

    }
])

const current_question_index=ref(0)
const current_question=ref(
    {
      question:'How was your experience on today\'s class?',
      choices:[
          'Very good',
          'Good',
          'Fair',
          'Poor'

      ]

    })
const course=ref(null)

const answer_list=ref([])

const select_answer_index=ref(null)

// 获取当前路由对象
const route = useRoute();


const selectItem = (index) => {
  select_answer_index.value = index; // 更新选中的索引
};

import { onMounted, onUnmounted } from 'vue';
import {useRoute, useRouter} from "vue-router";
import {getQuestion} from "@/api/questionApi.js";
function getCourse(){
  console.log("getCourse!!!",route.params)
  course.value=route.params.course || 'Course Name';
}
function getCurrentQuestion(){
  let q=getQuestion()
  console.log(q)
}
function submitAnswer(){

}
onMounted(() => {
  document.documentElement.style.overflow = 'hidden'; // 禁用滚动
  document.body.style.overflow = 'hidden';
  getCourse()
  getCurrentQuestion()
});

onUnmounted(() => {
  document.documentElement.style.overflow = ''; // 组件卸载后恢复
  document.body.style.overflow = '';
});


</script>

<template>
  <div class="course_header">
    <button class="question_back_btn" @click="goToPage('')"><img src="@/assets/icon/back_btn_questionnaire.png"/></button>
    <div><h2 class="green">{{course}}</h2></div>
  </div>
  <div>
    <hr class="divider"/>
  </div>
  <div id="question">{{current_question.question}}</div>
  <div>
    <ul class="scrollable-list" id="choice_list">
      <li class="choice_tab"
          id="question_choice"
          v-for="(choice, index) in questionnaire[current_question_index].choices"
          :key="index"
          :class="{ selected: select_answer_index === index }"
          @click="selectItem(index)">
        {{ questionnaire[current_question_index].choices[index] }}
      </li>
    </ul>
  </div>
   <div class="main_btn_group">
<!--<h1 class="title">This is the main page</h1>-->
    <button class="btn"id="btn1" @click="">BACK</button>
    <button  class="btn" id="btn2" @click="">NEXT</button>

  </div>
</template>

<style scoped>
.course_header {
 margin:20px auto;
  width: 95vw;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 按钮靠左，文字靠右 */
  height: 50px;
}
.question_back_btn{
  /*padding: 8px 16px;
  background-color: #3b82f6;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;*/
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
}
h2 {
   margin: 0;
  text-align: right;
}
#question{
  margin:20px auto;
  width: 95vw;
  padding: 8px 16px;
  background-color: rgba(79, 137, 243, 0.5); /* 蓝色 */
  color: #000000;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 18px;
   word-wrap: break-word; /* 允许长单词或 URL 断行 */
  overflow-wrap: break-word; /* 兼容性更好的断行方式 */
  white-space: normal; /* 允许文本换行 */
  max-width: 100%; /* 避免超出屏幕 */
}
ul{
  list-style-type: none;
  padding: 0;
  margin:20px auto;
  width: 95vw;
}
#choice_list{
  height: 50vh;
}
#question_choice{

  border: 1px solid rgba(79, 137, 243, 0.2);
  background: rgba(79, 137, 243, 0.2);
  font-size: 16px;
}
/* 高亮选中项 */
#question_choice.selected {
  background: rgba(79, 137, 243, 0.5);
  color: white;
  font-weight: bold;
}
#btn1{
  padding: 10px 20px;

  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: rgba(95, 111, 167, 0.7);
  color: white;
  transition: background 0.3s ease;
  /*width: 130px;*/
  height: 40px;

}
#btn2{
  /*width: 130px;*/
  /*padding: 10px 20px;*/
  height: 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: rgba(128, 128, 255, 0.85);
  color: white;
  transition: background 0.3s ease;

}
#btn1:hover {
  background: rgba(95, 111, 167, 0.5);
}
#btn2:hover {
  background: rgba(128, 128, 255, 0.5);
}
</style>