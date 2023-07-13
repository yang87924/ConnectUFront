<template lang="">
    <div class="container flex-between">
        <router-link to="/index">
            <div class="logo-box">
                <img src="../assets/img/header/logo.png" alt="">
            </div>
        </router-link>
        <ul class="nav flex-between">
            <li class="nav-item flex-center" :class="{ 'active': $route.path === '/index' }">
                <router-link to="/index" class="router-link" :class="{ 'active-link': $route.path === '/index' }">
                    <span class="material-icons">home</span>
                </router-link>
            </li>
            <!-- <li class="nav-item flex-center" :class="{ 'active': $route.path === '/newpost' }">
                <router-link to="/newpost" class="router-link" :class="{ 'active-link': $route.path === '/newpost' }">
                    <span class="material-icons">event_note</span>
                </router-link>
            </li> -->
            <li class="nav-item flex-center" :class="{ 'active': $route.path === '/postlist' }">
                <router-link to="/postlist" class="router-link" :class="{ 'active-link': $route.path === '/postlist' }">
                    <span class="material-icons">groups</span>
                </router-link>
            </li>
            <li class="nav-item flex-center" :class="{ 'active': $route.path === '/profile' }">
                <router-link v-if="userName" to="/profile" class="router-link" :class="{ 'active-link': $route.path === '/profile' }">
                    <span class="material-icons">account_circle</span>
                </router-link>
                <router-link v-else to="/UserLogin" class="router-link" :class="{ 'active-link': $route.path === '/UserLogin' }">
                <span class="material-icons">account_circle</span>
                </router-link>
            </li>
            <!-- <li class="nav-item flex-center" :class="{ 'active': $route.path === '/article' }">
                <router-link to="/article" class="router-link" :class="{ 'active-link': $route.path === '/article' }">
                    <span class="material-icons">mic</span>
                </router-link>
            </li> -->
        </ul>
        <div class="user-info flex-between">
            <div class="nav-item flex-center" v-if="userName != null">
                <span class="material-icons" @click="toggle" >forum</span>
            </div>
            <div class="outer-border">
                <div class="user-imgbox ">
                    <img v-if="userName != null" :src="avatar" alt="User Photo">
                    <router-link v-else to="/UserLogin" class="router-link" :class="{ 'active-link': $route.path === '/UserLogin' }">
                    <img src="../assets/img/header/user-photo.svg" alt="" >
                    </router-link>
                </div>
            </div>
            <div class="user-name" >
                {{
    userName
  }}
              </div>
              <div class="arrow-icon flex-center" v-if="userName != null">
                  <span class="material-icons-round" @click="showConfirmationDialog">logout</span>
              </div>
                  <div v-if="isConfirmationDialogVisible" class="confirmation-dialog">
                      <div class="dialog-content">
                          <p>是否確定要登出？</p>
                          <div class="buttons">
                              <router-link to="/index" class="router-link" :class="{ 'active-link': $route.path === '/index' }">
                              <button @click="logout">是</button>
                              </router-link>
                              <button @click="cancelLogout">取消</button>
                          </div>
                      </div>
                  </div>
              </div>


              <!-- <div class="dropdown" >
                  <div class="arrow-icon flex-center" @click="toggleDropdown" aria-expanded="false">
                      <span class="material-icons-round">arrow_drop_down</span>
                  </div>
                  <ul v-if="isOpen" class="dropdown-menu flex-center">
                      <router-link to="/UserLogin" class="router-link" :class="{ 'active-link': $route.path === '/UserLogin' }">
                      <li class="dropdown-item">Logout</li>
                      </router-link>
                  </ul>
              </div> -->
      </div>
      <!-- <div class="container">
          <div class="logo">
              <img src="../assets/img/Gold and Black Monogram With Leaf Business Logo (5) 1.svg" alt="">
          </div>
          <div class="mid-icon">
              <img class="h-icon" src="../assets/img/Home.svg" alt="">
              <img class="h-icon" src="../assets/img/calendar.svg" alt="">
              <img class="h-icon" src="../assets/img/Group.svg" alt="">
              <img class="h-icon" src="../assets/img/Podcasts.svg" alt="">
              <img class="h-icon" src="../assets/img/Interviews.svg" alt="">
          </div>

          <div class="nav-r">
              <img class="h-icon" src="../assets/img/Notification.svg" alt="">
              <div class="user">
                  <img class="h-pic mr-20" src="../assets/img/Memoji Boys 2-1.svg" alt="">
                  <div class="name">AR. Jakir</div>
                  <img src="../assets/img/Vector 8.svg" alt="">
              </div>
          </div>
      </div> -->

      <div v-if="userName != null" class="chatroom" :style="{ height: chatroomHeight, width: chatroomWidth }">
          <Chatroom />
      </div>






</template>
<script>
import axios from "axios";
import Chatroom from "../view/Chatroom/Chatroom.vue";

export default {
    components: {
        Chatroom
    },
    data() {
        return {
            userName: "", // 使用者名稱
            avatar: "", // 大頭貼圖片來源
            //   isOpen: false,
            isConfirmationDialogVisible: false, // 控制登出確認視窗的顯示狀態
            chatroomHeight: "59px",
            chatroomWidth: "30%",
            isHeightPercentage: false,
            isWidthPercentage: false
        };
    },
    methods: {
        // toggleDropdown() {
        //   this.isOpen = !this.isOpen;
        // }},
        showConfirmationDialog() {
            this.isConfirmationDialogVisible = true; // 顯示登出確認視窗
        },
        logout() {
            // 執行登出操作
            console.log("已登出");
            this.isConfirmationDialogVisible = false; // 隱藏登出確認視窗
            //清除session資料
            axios.post("users/invalidate")
                .then((response) => {
                    console.log(response.data);
                    // this.userName = "";
                })
                .catch((error) => {
                    console.log(error);
                    // 處理錯誤
                });
            location.reload();
        },

        cancelLogout() {
            this.isConfirmationDialogVisible = false; // 取消登出，隱藏確認視窗
        },

        toggleHeight() {
            this.isHeightPercentage = !this.isHeightPercentage;
            if (this.isHeightPercentage) {
                this.chatroomHeight = "80%";
            } else {
                this.chatroomHeight = "59px";
            }
        },
        toggleWidth(){
            this.isWidthPercentage = !this.isWidthPercentage;
            if (this.isWidthPercentage) {
                this.chatroomWidth = "40%";
            } else {
                this.chatroomWidth = "30%";
            }
        },
        toggle(){
            this.toggleHeight();
            this.toggleWidth();
        }
    },

    created() {

        // 在組件創建時使用 Axios，並傳遞使用者 ID
        axios.post('/users/getUserId/0')
            .then(response => {
                console.log(response.data);
                this.userName = response.data.userName;
                this.avatar = response.data.avatar;

                //先放置 圖片
                //   this.avatar = response.data.avatar;
            })
            .catch(error => {
                console.log(error);
                // 處理錯誤
            });
    },
};
</script>
<style lang="css" scoped>
.chatroom {
    right: 0;
    bottom: 0;
    width: 30%;
    height: 59px;
    position: fixed;
    z-index: 100;
    display: flex;
    flex-direction: column;
    transition: height 1s ease, width 1s ease;
}

.Chatroom {
    flex: 1;
}



.container {
    width: 100%;
    max-width: 100vw;
    height: 84px;
    background-color: #fff;
    box-shadow: 0px 4px 4px 0px #00000040;
    z-index: 999;
    position: fixed;
}

.flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-box {
    height: 84px;
    width: 200px;
    margin-left:30%;
}

.logo-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.nav {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: calc(40px * 3 + 45px * 2);
}

.nav-item {
    width: 40px;
    height: 40px;
    border-radius: 7px;
    background-color: #eaeaea;

}

.active {
    background-color: var(--active);
}

.router-link {
    color: var(--black);
    text-decoration: none;
}

.active-link {
    color: #fff;
}

.user-info {
    margin-right: 32px;
    cursor: pointer;
}

.user-info div:not(:last-child) {
    margin-right: 20px;
}

.user-info div:last-child {
    margin-right: 10px;
}

.user-imgbox {
    width: 42.5px;
    height: 42.5px;
    background-color: #f9dfc0;
    border-radius: 7.5px;
    padding: 3.6px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
}

.user-imgbox img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.outer-border {
    width: 50px;
    height: 50px;
    border: 1.25px solid #ea942c;
    border-radius: 10px;
    padding: 3.6px;
}

.dropdown {
    cursor: pointer;
    position: relative;
}

.user-name {
    font-family: "Vodafone Rg";
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: var(--black);
    text-align: center;
}

.arrow-icon {
    width: 40px;
    height: 40px;
    color: var(--black);
    cursor: pointer;
    background: #eaeaea;
    border-radius: 7px;
}

.dropdown .dropdown-menu {
    background: #fff;
    position: absolute;
    top: calc(100% + 5px);
    transform: translateX(-70%); /* 根據您的需求設置適當的位移值 */
    height: 40px;
    width: 80px;
    left: 50%;
    border-radius: 5px;
    font-size: 18px;
    text-align: center; /* 將內容置中 */
    /* align-items: center; */
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);

}

.dropdown-item {
    list-style-type: none;
    color: #bcbcbc;
}

.dropdown-item:hover {
    color: #6e6d6d;
}

.confirmation-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.dialog-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
}

.buttons {
    margin-top: 10px;
    text-align: center;
}

.buttons button {
    margin: 0 10px;
    color: #9b9999;
}

.buttons button:hover {
    color: #555454;
}

/* .container {
    width: 100%;
    height: 84px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
}

.mid-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.mid-icon img {
    margin-right: 45px;
}

.h-icon {
    width: 40px;
    height: 40px;
}

.h-pic {
    width: 49px;
    height: 49px;
}

.user {
    display: flex;
    align-items: center;
}

.mr-20 {
    margin-right: 20px;
}

.nav-r {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.nav-r .h-icon {
    margin-right: 25px;
}

.logo {
    margin-right: 150px;
}

.name {
    font-family: 'Vodafone Rg';
    font-size: 20px;
    margin-right: 40px;
} */
</style>