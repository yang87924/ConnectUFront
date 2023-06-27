<template lang="">
    <div class="container">
        <div class="main-content">
            <div class="banner-box">
                <img src="../../assets/img/profile/background.svg" alt="">
                <div class="setting">
                    <router-link to="/index">
                        <span class="material-icons">settings</span>
                    </router-link>
                </div>
            </div>
            <div class="profile-box flex-between">
                <div class="data-left">
                    <div class="photo-box">
                        <img :src="avatar" alt="頭像">
                    </div>
                    <div class="content-box">
                        <div class="username">
                            <h1>{{ userName }}</h1>         
                        </div>
                        <div class="slogan-box flex-center">
                            <span class="slogan">
                                你好，世界
                            </span>
                            <button class="edit">
                                <span class="material-icons">edit</span>
                            </button>
                        </div>
                        <div class="button-box flex-center">
                            <button class="profile-button">建立新文章</button>
                            <button class="profile-button">發佈動態</button>
                        </div>
                    </div>
                </div>
                <div class="data-right flex-end">
                    <button class="profile-button">追蹤</button>
                    <button class="profile-button">粉絲</button>
                    <button class="profile-button">訂閱</button>
                </div>
            </div>
            <ul class="nav flex-between">
                <li class="nav-item active">文章</li>
                <li class="nav-item">動態</li>
                <li class="nav-item">收藏</li>
            </ul>
            <div class="article-box flex-start">
                <div class="img-box">
                    <img src="../../assets/img/profile/article_img.svg" alt="文章縮圖">
                </div>
                <div class="article-content">
                    <div class="title">關於創新鏈的區塊鏈開發者最佳實踐!!</div>
                    <div class="tags flex-start">
                        <div class="tag">finance</div>
                        <div class="tag">bitcoin</div>
                        <div class="tag">crypto</div>
                    </div>
                    <div class="info-box flex-between">
                        <div class="author-info flex-start">
                            <div class="memoji-box flex-center">
                                <img src="../../assets/img/profile/memoji.svg" alt="">
                            </div>
                            <div class="author">
                                <div class="name">Pavel Gvay</div>
                                <div class="publish-time">3 weeks ago</div>
                            </div>
                        </div>
                        <div class="data-info flex-between">
                            <div class="count">651,324 Views</div>
                            <div class="count">36,6545 Likes</div>
                            <div class="count">56 comments</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
    const storeduserId = localStorage.getItem('userId');


    
//   // 在組件創建時使用 Axios，並傳遞使用者 ID
//   axios.post('http://localhost:8080/users/getUserId')
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//       // 處理錯誤
//     });


    // 在組件創建時使用 Axios，並傳遞使用者 ID
    axios.get(`http://localhost:8080/users/${storeduserId}`)
      .then(response => {
        console.log(response.data);
        console.log(response.data.userName);
        console.log("eeeeee");
        // 處理回應資料
        this.userName = response.data.data.userName;
        this.avatar = response.data.data.avatar;
        console.log(this.avatar);
    })
      .catch(error => {
        console.log(error);
        // 處理錯誤
      });
  }
}
</script>
<style lang="css" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: start;
    padding-bottom: 40px;
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

.flex-start {
    display: flex;
    justify-content: start;
    align-items: center;
}

.flex-end {
    display: flex;
    justify-content: end;
    align-items: center;
}

.main-content {
    width: fit-content;
}

/* banner */
.banner-box {
    width: 882px;
    position: relative;
}

.photo-box {
    position: absolute;
    top: -251.52px;
    left: 48.72px;
    width: 291.5px;
    height: 291.5px;
    border-radius: 50%;
    background-color: #EFD7C7;
}

.setting {
    position: absolute;
    top: 13px;
    right: 13px;
}

.setting .material-icons {
    color: var(--black);
}

/* 個人資料 */
.profile-box {
    position: relative;
    margin-bottom: 40px;
}

.data-left {
    padding-top: 50px;
    width: 291.5px;
    flex: 1;
}

.content-box {
    width: calc(291.5px + 48.72px * 2);
}

.username {
    font-family: 'Inter';
    font-size: 45px;
    font-weight: 700;
    line-height: 68px;
    letter-spacing: -0.022em;
    text-align: center;
    color: var(--black);
}

.slogan-box {
    margin: 0 auto 16px;
}

.slogan {
    font-family: 'Inter';
    font-size: 27px;
    font-weight: 500;
    line-height: 41px;
    letter-spacing: -0.019em;
    text-align: center;
}

.slogan-box .edit {
    margin-left: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.data-right {
    flex: 1;
    margin-bottom: auto;
}

.profile-button {
    padding: 8px 16px;
    border: 4px solid lightgrey;
    border-radius: 18.19px;
    background-color: var(--black);
    color: #FFF;
    margin-right: 45.5px;
}

.button-box .profile-button {
    width: 130px;
}

.button-box .profile-button:not(:last-child) {
    margin-right: 17.5px;
}

/* nav */
.nav {
    list-style-type: none;
    padding: 0 40px;
    margin: 0;
    margin-bottom: 37px;
}

.nav-item {
    font-family: 'Inter';
    font-size: 44px;
    font-weight: 500;
    line-height: 66px;
    letter-spacing: -0.011em;
    text-align: center;
}

.active {
    color: var(--active);
}

/* article-box */
.article-box {
    border-radius: 17.29px;
    background-color: #FFF;
    box-shadow: 0px 4.0237250328063965px 4.0237250328063965px 0px #00000040;
    padding: 21px;
}

.article-box .img-box {
    margin-right: 21.61px;
}

.article-content {
    margin-bottom: auto;
    width: 100%;
}

.article-content .title {
    font-family: 'Source Sans Pro';
    font-size: 18px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;
}

.tags .tag {
    padding: 5px 10px;
    border-radius: 21.6px;
    text-align: center;
    background-color: #F0F1FE;
    font-family: 'Source Sans Pro';
    font-size: 10px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0em;
    margin-right: 20px;
    margin-bottom: 32px;
}

.memoji-box {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background-color: #F0F1FE;
    margin-right: 10px;
}

.author .name {
    font-family: 'Source Sans Pro';
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    color: var(--black);
    position: relative;
}

.name::after {
    position: absolute;
    right: -20%;
    bottom: 20%;
    content: "";
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    background-color: var(--secondary);
    border-radius: 50%;
}

.author .publish-time {
    font-family: 'Source Sans Pro';
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--secondary);
}

.data-info {
    width: 345px;
    font-family: 'Source Sans Pro';
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    color: var(--secondary);
}
</style>