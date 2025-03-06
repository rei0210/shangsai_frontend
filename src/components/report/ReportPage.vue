<script setup>
import {ref} from "vue";
const router = useRouter();

const goToPage = (targetpage) => {
  router.push({ path: '/'+targetpage });
};
const report_list=ref([
    {
      dimension:'understanding',
      evaluation:'good overall'
    },
    {
      dimension:'understanding',
      evaluation:'good overall'
    },
    {
      dimension:'understanding',
      evaluation:'good overall'
    },
    {
      dimension:'understanding',
      evaluation:'good overall'
    },{
      dimension:'understanding',
      evaluation:'good overall'
    },
    {
      dimension:'understanding',
      evaluation:'good overall'
    },
    {
      dimension:'understanding',
      evaluation:'good overall'
    },
    {
      dimension:'understanding',
      evaluation:'good overall'
    },
    {
      dimension:'understanding',
      evaluation:'good overall'
    },
     {
      dimension:'understanding',
      evaluation:'good overall'
    },


])
import { onMounted, onUnmounted } from 'vue';
import {useRouter} from "vue-router";

onMounted(() => {
  document.documentElement.style.overflow = 'hidden'; // 禁用滚动
  document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
  document.documentElement.style.overflow = ''; // 组件卸载后恢复
  document.body.style.overflow = '';
});
</script>

<template>
<div class="report_header">
  <div><h2>Feedback Report</h2></div>
  <button @click="goToPage('')" class="report_back_btn"><img src="@/assets/icon/report_btn.png"/></button>
  </div>
  <div>
     <hr class="divider"/>
  </div>
  <div>
     <ul class="scrollable-list" id="report_list">
       <li class="choice_tab" id="report_part">
         <div>{{}}</div><div><img></div>
       </li>
      <li class="choice_tab"
          id="report_part"
          v-for="(part, index) in report_list"
          :key="index"
          :class="part">
        <div>{{report_list[index].dimension}}</div>
        <div>{{report_list[index].evaluation}}</div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.report_header {
 margin:20px auto;
  width: 95vw;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 按钮靠左，文字靠右 */
  height: 50px;
}
.report_back_btn{
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
#report_list{
  max-height: 87vh; /* 最大高度 */
  overflow-y: auto; /* 允许垂直滚动 */
}
#report_part{

  border: 1px solid rgba(169, 231, 209, 0.5);
  background: rgba(169, 231, 209, 0.5);
  font-size: 16px;
}
</style>