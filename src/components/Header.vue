<template lang="">
    <div class="container flex-between">
        <router-link to="/index">
            <div class="logo-box">
                <img src="../assets/img/header/logo.svg" alt="">
            </div>
        </router-link>
        <ul class="nav flex-between">
            <li class="nav-item flex-center" :class="{ 'active': $route.path === '/index' }">
                <router-link to="/index" class="router-link" :class="{ 'active-link': $route.path === '/index' }">
                    <span class="material-icons">home</span>
                </router-link>
            </li>
            <li class="nav-item flex-center" :class="{ 'active': $route.path === '/newpost' }">
                <router-link to="/newpost" class="router-link" :class="{ 'active-link': $route.path === '/newpost' }">
                    <span class="material-icons">event_note</span>
                </router-link>
            </li>
            <li class="nav-item flex-center" :class="{ 'active': $route.path === '/postlist' }">
                <router-link to="/postlist" class="router-link" :class="{ 'active-link': $route.path === '/postlist' }">
                    <span class="material-icons">groups</span>
                </router-link>
            </li>
            <li class="nav-item flex-center" :class="{ 'active': $route.path === '/profile' }">
                <router-link to="/profile" class="router-link" :class="{ 'active-link': $route.path === '/profile' }">
                    <span class="material-icons">headset_mic</span>
                </router-link>
            </li>
            <li class="nav-item flex-center" :class="{ 'active': $route.path === '/article' }">
                <router-link to="/article" class="router-link" :class="{ 'active-link': $route.path === '/article' }">
                    <span class="material-icons">mic</span>
                </router-link>
            </li>
        </ul>
        <div class="user-info flex-between">
            <div class="nav-item flex-center">
                <span class="material-icons">notifications</span>
            </div>
            <div class="outer-border">
                <div class="user-imgbox">
                    <img src="../assets/img/header/user-photo.svg" alt="">
                </div>
            </div>
            <div class="user-name">
                {{userName}}
            </div>
            <li class="nav-item flex-center" :class="{ 'active': $route.path === '/UserLogin' }">
                <router-link to="/UserLogin" class="router-link" :class="{ 'active-link': $route.path === '/UserLogin' }">
            <div class="arrow-icon" >
                <span class="material-icons-round">arrow_drop_down</span>
            </div>
                </router-link>
            </li>
        </div>
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
</template>
<script>

import axios from 'axios';

export default {
  data() {
    return {
      userName: '', // 使用者名稱
      avatar: '', // 大頭貼圖片來源
    };
  },
    
  created() {
    // const storeduserId = localStorage.getItem('userId');


    
  // 在組件創建時使用 Axios，並傳遞使用者 ID
  axios.post('/users/getUserId')
    .then(response => {
      console.log(response.data);
      this.userName = response.data.userName;

    //先放置 圖片
    //   this.avatar = response.data.avatar;
    })
    .catch(error => {
      console.log(error);
      // 處理錯誤
    });


    // // 在組件創建時使用 Axios，並傳遞使用者 ID
    // axios.get(`/users/${storeduserId}`)
    //   .then(response => {
    //     console.log(response.data);
    //     console.log(response.data.userName);
    //     console.log("eeeeee");
    //     // 處理回應資料
    //     this.userName = response.data.data.userName;
    //     this.avatar = response.data.data.avatar;
    //     console.log(this.avatar);
    // })
    //   .catch(error => {
    //     console.log(error);
    //     // 處理錯誤
    //   });
  }
}
</script>
<style lang="css" scoped>
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
}

.nav {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: calc(40px * 5 + 45px * 4);
}

.nav-item {
    width: 40px;
    height: 40px;
    border-radius: 7px;
    background-color: #EAEAEA;
}

.active {
    background-color: var(--active);
}

.router-link {
    color: var(--black);
}

.active-link {
    color: #FFF;
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
    background-color: #F9DFC0;
    border-radius: 7.5px;
    padding: 3.6px;
}

.outer-border {
    width: 50px;
    height: 50px;
    border: 1.25px solid #EA942C;
    border-radius: 10px;
    padding: 3.6px;
}

.user-name {
    font-family: 'Vodafone Rg';
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: var(--black);
    text-align: center;
    cursor: pointer;
}

.arrow-icon .material-icons-round {
    font-size: 40px;
    color: var(--black);
    cursor: pointer;
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