import { createApp } from 'vue';
import 'normalize.css'  // 樣式初始化
import './assets/css/variable.css';  // css全域變數設定檔
import 'material-icons/iconfont/material-icons.css';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app')