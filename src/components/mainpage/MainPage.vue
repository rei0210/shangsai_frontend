<script setup>
import {ref} from "vue";

const router = useRouter();
const route=useRoute()

// const goToPage = (targetpage,params) => {
//   router.push({ name: targetpage, params: params });
// };
const goToPage = (targetpage) => {
  router.push({ path: '/'+targetpage });
};
const goToPageWithParams=(targetPage,params)=>{
   router.push({ name: targetPage,params:params });
}
const courseList = ref([
  "Mathematics 001",
  "Physicsal Science 001",
  "History 004",
  "Biology 003"

]);
const selectedIndex = ref(null); // 存储当前选中的索引
const username=ref('Student')
const selectItem = (index) => {
  selectedIndex.value = index; // 更新选中的索引
};

import { onMounted, onUnmounted } from 'vue';
import {useRoute, useRouter} from "vue-router";

onMounted(() => {
  // localStorage.removeItem('userInfo')
  // console.log(localStorage.getItem('userInfo'),"shshshsh");
  if(localStorage.getItem('userInfo')===null){
    goToPage('login')
    return;
  }
  document.documentElement.style.overflow = 'hidden'; // 禁用滚动
  document.body.style.overflow = 'hidden';
  // console.log(route.params)
  // console.log(localStorage.getItem('userInfo'))
  username.value=JSON.parse(localStorage.getItem('userInfo')).username||'Student'
});

onUnmounted(() => {
  document.documentElement.style.overflow = ''; // 组件卸载后恢复
  document.body.style.overflow = '';
});
</script>

<template>
<!--This is the page shown after the user log in-->
  <div class="main_header">
<!--     <h1 class="green">This is the main page</h1>-->
    <img src="@/assets/img/avatar1.png" alt="Logo" class="header_logo" style="max-width: 150px;max-height: 150px">
    <div><h1>{{username}}</h1><h2>WN 2025</h2></div>

  </div>
  <div class="header_divider">
    <hr class="divider">
  </div>
  <div class="main_title"style=" display: flex;justify-content: flex-start; margin-left: 3vw/* 让h1靠左 */">
    <h1 class="title">My Questionnaires</h1>
  </div>
  <div class="main_questionnaire_list">
    <ul class="scrollable-list">
      <li class="choice_tab"
          id="list_choice"
          v-for="(course, index) in courseList"
          :key="index"
          :class="{ selected: selectedIndex === index }"
          @click="selectItem(index)">
        {{ course }}
      </li>
    </ul>


  </div>
  <div class="main_btn_group">
<!--<h1 class="title">This is the main page</h1>-->
    <button id="btn1" @click="">VIEW HISTORY</button>
    <button id="btn2" @click="goToPageWithParams('question',{'course':courseList[selectedIndex]})">WRITE FEEDBACK</button>

  </div>
</template>

<style scoped>


/* 隐藏滚动条（适用于 Chrome、Safari） */
/*::-webkit-scrollbar {
  display: none;
}*/

.main_header {
  margin-top: 1vh;
  display: flex;
  align-items: center;  /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  gap: 1vw;  /* 图片和文本之间的间距 */
}
.header_logo {
  width: 35vw; /* 控制图片宽度 */
  height: 35vw; /* 控制图片高度 */
  object-fit: cover; /* 确保图片不会被拉伸 */
  border-radius: 50%;
}
ul {
  list-style-type: none;
  padding: 0;
}
/*li {
  padding: 10px;
  border: 1px solid #ddd;
  margin: 5px 0;
  border-radius: 5px;
  background: #f9f9f9;
}*/

.main_questionnaire_list{
  height: 50vh;
}
#list_choice{
  border: 1px solid rgba(129, 211, 248, 0.25);
  background: rgba(129, 211, 248, 0.25);
}
/* 高亮选中项 */
#list_choice.selected {
  background: #007bff;
  color: white;
  font-weight: bold;
}

#btn1{
  padding: 10px 20px;

  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: #00aaaa;
  color: white;
  transition: background 0.3s ease;
  width: 50vw;
  height: 40px;

}
#btn2{
  height: 40px;
  width: 50vw;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: #1e98d7;
  color: white;
  transition: background 0.3s ease;

}
#btn1:hover {
  background: rgba(0, 170, 170, 0.8);
}
#btn2:hover {
  background: rgba(30, 152, 215, 0.8);
}
</style>