<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {resetQuestionnaire} from "@/api/questionApi.js";
import {getStudentReport} from "@/api/reportApi.js";

const router=useRouter()
const message=ref('Thank you for taking the questionnare')
const route=useRoute()
const course=ref('Course')

const goToPage = (targetpage) => {
  router.push({ path: '/'+targetpage });
};
const goToPageWithParams=(targetPage,params)=>{
   router.push({ name: targetPage,params:params });
}
function returnToMain(){
  resetQuestionnaire()
  goToPage('')
}
function goToReport(){
  console.log('report',getStudentReport());
}
onMounted(() => {
  document.documentElement.style.overflow = 'hidden'; // 禁用滚动
  document.body.style.overflow = 'hidden';
  message.value=route.params.message
  course.value=route.params.course
});

onUnmounted(() => {
  document.documentElement.style.overflow = ''; // 组件卸载后恢复
  document.body.style.overflow = '';
});
</script>

<template>
  <div class="parent_container">
    <div id="thanks_card">
      <div class="message">{{message}}</div>
      <div class="main_btn_group">
        <button class="btn"id="btn_return" @click="returnToMain">Return</button>
        <button  class="btn" id="btn_report" @click="goToReport">View Report</button>

      </div>
    </div>
  </div>

</template>

<style scoped>
#thanks_card{
  width: 80vw;
  height: 80vh;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column; /* 让 h1 和按钮垂直排列 */
  justify-content: center; /* 确保 h1 在上，按钮组在下 */
  align-items: center;
  padding: 2rem;
  box-shadow: 2.5px 12.5px 10px rgba(0, 0, 0, 0.05),
              41.8px 41.8px 33.4px rgba(0, 0, 0, 0.03),
              50px 50px 90px rgba(0, 0, 0, 0.01);
}

/* 🎯 返回按钮 */
#btn_return {
  background-color: rgb(220, 220, 220);
  color: black;
  margin: 20px auto;
  height: auto;

}
#btn_report {
  background-color: rgba(4, 182, 106, 0.7);
  color: black;
  margin: 20px auto;
  height: auto;

}
.main_btn_group {
  display: flex;
  justify-content: center;
  gap: 1rem; /* 按钮之间的间距 */
  width: 100%;
  padding-bottom: 1rem; /* 让按钮不会紧贴底部 */
}
#btn_return:hover {
  background-color: rgb(200, 200, 200);
}
#btn_report:hover {
  background-color: rgba(4, 182, 106, 0.5);
}
.message {
  flex-grow: 1; /* 让 h1 占据足够空间 */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(60, 60, 60);
}

</style>