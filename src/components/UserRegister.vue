<template>
  <!-- 主要應用元件 -->
  <v-app style="background-image: url(/background.jpg);">
    <!-- 顶部应用栏 -->
    <v-app-bar color="purple" dark>
      <v-toolbar-title> ConnectU </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- 登录按钮，点击跳转到 "/login" 路由 -->
      <v-btn text to="/UserLogin"> 登入 </v-btn>
      <!-- 注册按钮，点击跳转到 "/register" 路由 -->
      <v-btn text to="/UserRegister"> 創建 </v-btn>
    </v-app-bar>
    <!-- 主要內容 -->
    <v-main class="register-container">
      <!-- 容器元件，包含和排列子元件 -->
      <v-container class="register-content" fluid>
        <!-- Grid系統的行元件 -->
        <v-row justify="center">
          <!-- Grid系統的列元件，呈現註冊表單部分 -->
          <v-col cols="6" class="register-form">
            <h2>創建帳號</h2>
            <!-- 註冊標題 -->
            <h3>通過加入會員或者社群，可以獲得更多功能和特權！！</h3>
            <!-- 註冊說明訊息 -->
            <!-- 註冊表單 -->
            <v-form>
              <!-- 使用者名稱輸入框 -->
              <v-text-field v-model="userName" label="Username" outlined></v-text-field>
              <!-- 電子郵件輸入框 -->
              <v-text-field v-model="email" label="Email" outlined></v-text-field>
              <!-- 密碼輸入框 -->
              <v-text-field v-model="password" label="Password" type="password" outlined></v-text-field>
              <!-- 確認密碼輸入框 -->
              <v-text-field v-model="confirmPassword" label="Confirm Password" type="password" outlined></v-text-field>
              <!-- 返回登入頁面 -->
              <p class="forgot-password text-right">
                已經註冊過了?
                <router-link to="/UserLogin">登入</router-link>
              </p>
              <!-- 錯誤信息提示 -->
              <v-alert :type="registeredAlertType" :color="registeredAlertType === 'error' ? 'red' : 'green'"
                :icon="registeredAlertType === 'error' ? 'mdi-alert-circle' : '$success'" class="custom-alert"
                v-if="RegisteredResponse" dense text>
                {{ RegisteredResponse }}</v-alert>
              <br />
              <!-- 註冊按鈕 -->
              <v-btn block color="purple" dark @click="register">
                <v-progress-circular v-if="loading" indeterminate color="White"></v-progress-circular>
                <span v-if="!loading">創建帳號</span>
              </v-btn>
            </v-form>
          </v-col>
          <!-- Grid系統的列元件，呈現圖像部分 -->
          <v-col cols="6" class="login-image align-self-start custom-class">
            <spline-component />
          </v-col>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// 引入SplineComponent元件和axios庫
import SplineComponent from "./SplineComponent.vue";
import axios from "axios";

export default {
  components: {
    "spline-component": SplineComponent,
  },
  data() {
    return {
      userName: "", // 綁定並儲存使用者名稱輸入框的數據
      email: "", // 綁定並儲存電子郵件輸入框的數據
      password: "", // 綁定並儲存密碼輸入框的數據
      confirmPassword: "", // 綁定並儲存確認密碼輸入框的數據
      RegisteredResponse: "", // 新增的用於保存註冊響應的數據的變量
      registeredAlertType: "error", // 新增的註冊提示類型
      loading: false,//loding類型
    };
  },
  methods: {
    async register() {
      // 檢查兩次輸入的密碼是否一致
      if (this.password !== this.confirmPassword) {
        alert("兩次輸入的密碼不一致！");
        return;
      }

      // 發送註冊請求
      try {
        this.loading = true
        const response = await axios.post("/users", {
          userName: this.userName,
          email: this.email,
          password: this.password,
        });

        this.RegisteredResponse = response.data.msg; // 把註冊響應的數據保存到 RegisteredResponse 變量中

        if (response.data.code === 20011) {
          this.registeredAlertType = "success"; // 設置成功的提示顔色
        } else {
          this.registeredAlertType = "error"; // 設置錯誤的提示顔色
        }

        if (response.data.msg == "用戶創建成功") {
          setTimeout(() => {
            this.loading = false;
            this.$router.push("/index");
          }, 1000);
        } else {
          this.loading = false; // 登入失败，设置 loading 为 false
        }
      } catch (error) {
        console.log(error)
        this.loading = false
        this.errorMessage = this.errorCodes[error.response.data.code]

      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");

body,
html {
  font-family: "Roboto", sans-serif;
}

/* 註冊頁面的全局樣式 */
.register-container {
  height: 100vh;
  display: flex;
  /* 这使其成为一个flex容器 */
  justify-content: center;
  /* 这将水平居中其所有子元素 */
  align-items: center;
  /* 这将垂直居中其所有子元素 */
}

.register-content {
  background-color: white;
  width: 800px;
  display: flex;
  /* 这使其成为一个flex容器 */
  justify-content: center;
  /* 这将水平居中其所有子元素 */
  align-items: center;
  /* 这将垂直居中其所有子元素 */
  flex-direction: column;
  /* 这将使子元素以列方式排列 */
  /* 添加边框 */
  border: 1px solid #cccccc;
  /* 1px宽，灰色的边框 */
  border-radius: 8px;
  /* 圆角边框 */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.register-form {
  padding-right: 20px;
}

/* 註冊頁面的圖片區塊樣式 */
.register-image {
  align-self: start;
}

/* SplineComponent 組件中的圖像的樣式 */
.spline-component img {
  display: flex;
  /* 这使其成为一个flex容器 */
  justify-content: center;
  /* 这将水平居中其所有子元素 */
  align-items: center;
  /* 这将垂直居中其所有子元素 */
}

.custom-class {
  height: 500px;
  width: 600px;
}

.error {
  color: red;
}

.button {
  text-transform: capitalize;
}</style>
