
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
import './assets/css/base.css'
import './assets/css/mainpage/mainpage.css'
import './assets/css/main.css'
import vant from 'vant';

createApp(App)
    .use(router)
    .use(vant)
    .mount('#app')


