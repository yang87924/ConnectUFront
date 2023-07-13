import { createApp } from 'vue';
import 'normalize.css'  // 样式初始化
import './assets/css/variable.css';  // css全域变数设定档
import 'material-icons/iconfont/material-icons.css';
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import App from './App.vue';
import router from './router';
import axios from 'axios';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8080';
//第三方登入icon
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  // 这里可以添加 Vuetify 配置项
})

// 第三方登入google 的promise
window.googleSignInPromise = new Promise((resolve) => {
  window.onGoogleLibraryLoad = () => {
    resolve();
  };
});

//在所有的請求中加入token
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('jwt');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


createApp(App).use(router).use(vuetify).mount('#app')
