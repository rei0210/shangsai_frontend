import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from "@/components/mainpage/MainPage.vue";


export const routes=[
    {
        path:'/',
        name:'main',
        component: MainPage ,
        meta:{requiresAuth:false,keepalive:false}
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
  // scrollBehavior: () => ({ behavior: 'history' })
})
export default router