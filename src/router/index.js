import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from "@/components/mainpage/MainPage.vue";
import QuestionPage from "@/components/questionpage/QuestionPage.vue";
import ReportPage from "@/components/report/ReportPage.vue";


export const routes=[
    {
        path:'/',
        name:'main',
        component: MainPage ,
        meta:{requiresAuth:false,keepalive:false}
    },
    {
        path:'/question',
        name:'question',
        component:QuestionPage,
        meta:{requiresAuth: false,keepalive: false}
    },
    {
        path:'/report',
        name:'report',
        component:ReportPage,
        meta:{requiresAuth: false,keepalive: false}
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
  // scrollBehavior: () => ({ behavior: 'history' })
})
export default router