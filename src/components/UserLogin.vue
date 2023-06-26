<template>
  <!-- 主要應用元件 -->
  <v-app>
     <!-- 顶部应用栏 -->
     <v-app-bar color="dark" dark>
      <v-toolbar-title> ConnectU </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- 登录按钮，点击跳转到 "/login" 路由 -->
      <v-btn text to="/UserLogin"> Login </v-btn>
      <!-- 注册按钮，点击跳转到 "/register" 路由 -->
      <v-btn text to="/UserRegister"> Register </v-btn>
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
            <!-- 歡迎訊息 -->
            <!-- 登入表單 -->
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
                type="error"
                color="red"
                icon="mdi-alert-circle"
                class="custom-alert"
                v-if="loginResponse"
                dense
                text
              >
                {{ loginResponse }}
              </v-alert>
              <!-- 登入按鈕，點擊時觸發 login 方法 -->
              <v-btn block color="purple" dark class="my-2" @click="login"
                >登入</v-btn
              >
            </v-form>
            <!-- 其他登入選項 -->
            <div class="login-options">
              <!-- Google 登入按鈕 -->
              <v-btn
                block
                color="white"
                dark
                class="my-2 d-flex justify-center"
                @click="loginWithGoogle"
              >
                <v-icon left>mdi-google</v-icon>
                以Google帳號登入
              </v-btn>

              <!-- Facebook 登入按鈕 -->
              <v-btn
                block
                color="white"
                dark
                class="my-2 d-flex justify-center"
                @click="loginWithFacebook"
              >
                <v-icon left>mdi-facebook</v-icon>
                以Facebook帳號登入
              </v-btn>

              <!-- Twitter 登入按鈕 -->
              <v-btn
                block
                color="white"
                dark
                class="my-2 d-flex justify-center"
                @click="loginWithTwitter"
              >
                <v-icon left>mdi-twitter</v-icon>
                以Twitter帳號登入
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
// 引入SplineComponent元件和axios庫
import SplineComponent from "./SplineComponent.vue";
import axios from "axios";

export default {
  components: {
    "spline-component": SplineComponent,
  },
  data() {
    return {
      email: "", // 綁定並儲存電子郵件輸入框的數據
      password: "", // 綁定並儲存密碼輸入框的數據
      errorMessage: "", // 用於顯示錯誤訊息
      loginResponse: "", // 新增的用於保存登入響應的數據的變量
    };
  },

  methods: {
    async login() {
      try {
        // 發送登入請求
        const response = await axios.post("http://localhost/users/login", {
          email: this.email,
          password: this.password,
        });
        this.loginResponse = response.data.msg; // 把登入響應的數據保存到 loginResponse 變量中
        if (response.data.msg == "登入成功") {
          setTimeout(() => {
            this.$router.push("/index");
          }, 3000);
        }
        console.log("Logged in: " + response.data.msg + response.data.code); // 在控制台打印 loginResponse
      } catch (error) {
        // 捕獲並處理錯誤
        this.errorMessage = error.message;
      }
    },
    //第三方google登入
    loginWithGoogle() {
      // eslint-disable-next-line no-undef
      gapi.load("auth2", () => {
        // eslint-disable-next-line no-undef
        const auth2 = gapi.auth2.init({
          client_id:
            "699569603913-tatuu7bhl3rntun7m5qt75olhivifnvl.apps.googleusercontent.com",
        });
        auth2.signIn().then((googleUser) => {
          var id_token = googleUser.getAuthResponse().id_token;
          var data = {
            credential: id_token,
          };
          axios
            .post("/users/google", data)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        });
      });
    },

    //第三方facebook登入
    // async loginWithFacebook() {
    //   try {
    //     const response = await axios.get(
    //       "http://localhost/users/login/facebook"
    //     );
    //     console.log(
    //       "Logged in with Facebook:",
    //       response.data.msg + response.data.code
    //     );
    //   } catch (error) {
    //     this.errorMessage = error.message;
    //   }
    // },
    //第三方twitter登入
    // async loginWithTwitter() {
    //   try {
    //     const response = await axios.get(
    //       "http://localhost/users/login/twitter"
    //     );
    //     console.log(
    //       "Logged in with Twitter:",
    //       response.data.msg + response.data.code
    //     );
    //   } catch (error) {
    //     this.errorMessage = error.message;
    //   }
    // },
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
}

/* 登入內容的樣式 */
.login-content {
  width: 800px;
}

/* 登入表單的樣式 */
.login-form {
  padding-right: 20px;
}

/* SplineComponent 組件中的圖像的樣式 */
.spline-component img {
  height: 100%;
  object-fit: cover; /* 讓圖像保持原始比例並覆蓋整個容器 */
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


</style>
