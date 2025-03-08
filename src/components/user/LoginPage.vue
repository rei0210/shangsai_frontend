<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import login from "@/api/userApi.js";
import {useRouter} from "vue-router";

const router = useRouter();

const goToPage = (targetpage,params) => {
  router.push({ name: targetpage,params:params });
};

const userInfo=ref({
  userName:'',
  password:''
})

onMounted(() => {
  document.documentElement.style.overflow = 'hidden'; // 禁用滚动
  document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
  document.documentElement.style.overflow = ''; // 组件卸载后恢复
  document.body.style.overflow = '';
});

function userLogin(userInfo){
  console.log(login(userInfo))
}
</script>

<template>
<div id="login_header">
  <div><h2>User Login</h2></div>
<!--  <button @click="goToPage('')" class="report_back_btn"><img src="@/assets/icon/report_btn.png"/></button>-->
  </div>
    <div>
     <hr class="divider"/>
  </div>
  <div>
    <input class="user_info" id="username" v-model="userInfo.username" type="text" placeholder="enter username" required>
  </div>
  <div>
    <input class="user_info" id="password" v-model="userInfo.password" type="text" placeholder="enter password" required>
  </div>
  <div class="main_btn_group">
    <button class="btn"id="btn_reg" @click="">Register</button>
    <button  class="btn" id="btn_login" @click="userLogin(userInfo)">Login</button>

  </div>
</template>

<style scoped>
#login_header{
  margin:20px auto;
  width: 95vw;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 按钮靠左，文字靠右 */
  height: 50px;

}

.user_info{
  margin:20px auto;
  width: 95vw;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 按钮靠左，文字靠右 */
  height: 40px;
  border-radius: 10px;
  border-color: #797979;
  border-width: 1px;
}
#btn_login{
  background-color: #07B60D;
}
#btn_reg{
  background-color: #57BBF3;
}
</style>