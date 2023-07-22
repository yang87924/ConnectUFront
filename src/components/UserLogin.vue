<template>
  <!-- 主要應用元件 -->
  <v-app style="background-image: url(/background.jpg)">
    <!-- 顶部应用栏 -->
    <v-app-bar color="purple" dark>
      <div class="logo-box">
        <img src="../assets/img/header/logo.png" alt="">
            </div>
      <v-spacer></v-spacer>
      <!-- 登录按钮，点击跳转到 "/login" 路由 -->
      <v-btn text to="/UserLogin"> 登入 </v-btn>
      <!-- 注册按钮，点击跳转到 "/register" 路由 -->
      <v-btn text to="/UserRegister"> 創建 </v-btn>
    </v-app-bar>
    <!-- 主要內容 -->
    <v-main class="login-container">
      <!-- 容器元件，包含和排列子元件 -->
      <v-container class="login-content" fluid>
        <!-- Grid系統的行元件 -->
        <v-row justify="center">
          <!-- Grid系統的列元件，呈現登入表單部分 -->
          <v-col cols="6" class="login-form">
            <h2>登入</h2>
            <!-- 登入標題 -->
            <h3>歡迎回來！</h3>
            <v-form>
              <!-- 電子郵件輸入框 -->
              <v-text-field
                v-model="email"
                label="Email"
                outlined
              ></v-text-field>
              <!-- 密碼輸入框 -->
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                outlined
              ></v-text-field>
              <a href="">忘記密碼？</a>
              <!-- 忘記密碼連結 -->
              <!-- 錯誤訊息提示 -->
              <v-alert
                :type="loginAlertType"
                :color="loginAlertType === 'error' ? 'red' : 'green'"
                :icon="
                  loginAlertType === 'error' ? 'mdi-alert-circle' : '$success'
                "
                class="custom-alert"
                v-if="loginResponse"
                dense
                text
              >
                {{ loginResponse }}
              </v-alert>
              <!-- 登入按鈕，點擊時觸發 login 方法 -->
              <v-btn block color="purple" dark class="my-2" @click="login">
                <v-progress-circular
                  v-if="loading"
                  indeterminate
                  color="White"
                ></v-progress-circular>
                <span v-if="!loading">登入</span>
              </v-btn>
            </v-form>
            <!-- 其他登入選項 -->
            <div class="login-options">
              <!-- Google 登入按鈕 -->
              <div id="g_id_onload" class="my-2 google-btn"></div>
              <!-- Facebook 登入按鈕 -->
              <v-btn block class="my-2 d-flex justify-center facebook-button" color="white">
    <i class="fab fa-facebook-f"></i>
    <span>使用Facebook賬戶登入</span>
  </v-btn>

              <!-- Twitter 登入按鈕 -->
              <v-btn block class="my-2 d-flex justify-center twitter-button" color="white">
    <i class="fab fa-twitter"></i>
    <span>使用Twitter賬戶登入</span>
  </v-btn>
            </div>
          </v-col>
          <!-- Grid系統的列元件，呈現圖像部分 -->
          <v-col cols="6" class="login-image align-self-start custom-class">
            <spline-component />
            <!-- SplineComponent元件，用於顯示3D圖像 -->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import SplineComponent from "./SplineComponent.vue";
import axios from "axios";




export default {
  components: {
    "spline-component": SplineComponent,
  },
  data() {
    return {
      email: "",
      password: "",
      loginResponse: "",
      loginAlertType: "error",
      loading: false,
    };
  },
  methods: {
    async login() {
      try {
        this.loading = true;
        const response = await axios.post("/users/login", {
          email: this.email,
          password: this.password,
        },
//         {
//   headers: {
//     'Authorization': `Bearer ${localStorage.getItem('jwt')}`
//   }
// }
);
        this.loginResponse = response.data.msg;
        // 根据响应码改变登入提示類型
        this.loginAlertType =
          response.data.code === 20051 ? "success" : "error";
        if (response.data.msg == "登入成功") {
          //保存JWT到localStorage
          localStorage.setItem("jwt", response.data.data.token);
          setTimeout(() => {
            this.loading = false; // 登入结束，设置 loading 为 false
            this.$router.push("/index");
          }, 1000);
        } else {
          this.loading = false; // 登入失败，设置 loading 为 false
        }
      } catch (error) {
        this.loading = false; // 登入失败，设置 loading 为 false
        this.loginResponse = error.message;
      }
    },

    //第三方登入google
    async handleCredentialResponse(response) {
      const id_token = response.credential;
      let formData = new FormData(); // 建立新的 FormData 實例
      formData.append("credential", id_token); // 將資料附加到 formData 上

      try {
        const response = await axios.post("/users/google", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        // 根据响应码改变登入提示類型
        this.loginAlertType =
          response.data.code === 20051 ? "success" : "error";
        if (response.data.msg === "登入成功") {
          //保存token到localStorage
          localStorage.setItem("jwt", response.data.data.token);
          // 登入成功後，跳轉到 /index 頁面
          this.$router.push("/index");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
  mounted() {
    window.googleSignInPromise.then(() => {
      google.accounts.id.initialize({
        client_id:
          "699569603913-tatuu7bhl3rntun7m5qt75olhivifnvl.apps.googleusercontent.com",
        callback: this.handleCredentialResponse,
      });
      google.accounts.id.renderButton(document.getElementById("g_id_onload"), {
        theme: "outline",
        size: "large",
        width: "360",
        logo_alignment: "center",
      });
      // 添加这一行以使图标居中
      document.getElementById("g_id_onload").firstChild.style.display = "flex";
      google.accounts.id.prompt();
    });
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");

body,
html {
  font-family: "Roboto", sans-serif;
}

/* 登入頁面的全局樣式 */
.login-container {
  height: 100vh;
  display: flex; /* 这使其成为一个flex容器 */
  justify-content: center; /* 这将水平居中其所有子元素 */
  align-items: center; /* 这将垂直居中其所有子元素 */
}

/* 登入內容的樣式 */
.login-content {
  background-color: white;
  width: 800px;
  display: flex; /* 这使其成为一个flex容器 */
  justify-content: center; /* 这将水平居中其所有子元素 */
  align-items: center; /* 这将垂直居中其所有子元素 */
  flex-direction: column; /* 这将使子元素以列方式排列 */
  /* 添加边框 */
  border: 1px solid #cccccc; /* 1px宽，灰色的边框 */
  border-radius: 8px; /* 圆角边框 */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 登入表單的樣式 */
.login-form {
  padding-right: 20px;
}

/* SplineComponent 組件中的圖像的樣式 */
.login-image {
  display: flex; /* 这使其成为一个flex容器 */
  justify-content: center; /* 这将水平居中其所有子元素 */
  align-items: center; /* 这将垂直居中其所有子元素 */
}

.custom-class {
  height: 500px;
  width: 600px;
}

/* 為 v-btn 添加上下邊距 */
.my-2 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.v-btn {
  text-transform: none;
}

/* Google 登入按鈕的樣式 */
.google-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* 设置按钮宽度与 Facebook 按钮相同 */
}

/* Google 按钮的图标样式 */
.google-btn img {
  margin-right: 8px;
}

.facebook-button {
  background: linear-gradient(to right, #4064ac, #5177b5);
  color: white;
}

.twitter-button {
  background: linear-gradient(to right, #1da1f2, #1a8cdc);
  color: white;
}
.logo-box {
  display: flex;
  justify-content: center;
  margin-top: 0px;
}

.logo-box img {
  width: 160px; /* 将 logo 的宽度设为 100 像素 */
}


</style>
