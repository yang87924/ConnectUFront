<template lang="">
    <div class="container">
        <div class="sidebar">
            <!-- <img src="../../assets/img/header/logo.svg" alt="" class="logo">
            <div class="nav-block">
                <ul class="nav">
                    <li class="nav-item flex-start active">
                        <span class="material-icons-round">home</span>
                        <span class="nav-txt">首頁</span>
                    </li>
                    <li class="nav-item flex-start">
                        <span class="material-icons-round">numbers</span>
                        <span class="nav-txt">探索</span>
                    </li>
                    <li class="nav-item flex-start">
                        <span class="material-icons-round">notifications_none</span>
                        <span class="nav-txt">通知</span>
                    </li>
                    <li class="nav-item flex-start">
                        <span class="material-icons-round">mail_outline</span>
                        <span class="nav-txt">訊息</span>
                    </li>
                    <li class="nav-item flex-start">
                        <span class="material-icons-round">bookmark_border</span>
                        <span class="nav-txt en">Bookmarks</span>
                    </li>
                    <li class="nav-item flex-start">
                        <span class="material-icons-outlined">article</span>
                        <span class="nav-txt en">Lists</span>
                    </li>
                    <li class="nav-item flex-start">
                        <span class="material-icons-outlined">person_2</span>
                        <span class="nav-txt">個人資料</span>
                    </li>
                    <li class="nav-item flex-start">
                        <sapn class="icon-border flex-center">
                            <span class="material-icons-round">more_horiz</span>
                        </sapn>
                        <span class="nav-txt">更多</span>
                    </li>
                    <li class="nav-item flex-start">
                        <button class="more-post">
                            推文
                        </button>
                    </li>
                </ul>
            </div> -->
        </div>
        <div class="main-content">
            <!-- <div class="create-post flex-between">
                <div class="memoji-box flex-center">
                    <img src="../../assets/img/postlist/memoji.svg" alt="" class="memoji">
                </div>
                <input type="text" class="post-input" placeholder="Let’s share what going on your mind...">
                <input type="submit" class="submit" value="Create Post">
            </div> -->
            <div class="content-switch flex-around">
                <div class="switch" :class="{ active: activeTab === 'recommend' }" @click="activeTab = 'recommend'">為你推薦</div>
                <div class="switch" :class="{ active: activeTab === 'following' }" @click="activeTab = 'following'">正在跟隨</div>
            </div>
            <div class="new-tweet">
                <div class="tweet-input flex-start">
                    <div class="memoji-box flex-center">
                        <img src="../../assets/img/postlist/memoji.svg" alt="" class="memoji">
                    </div>
                    <div class="tweet-content">
                        <textarea name="tweet" id="" cols="30" rows="5" class="textarea" placeholder="What’s happening?"></textarea>
                        <div class="tweet-toolbox flex-between">
                            <div class="tweet-tool">
                                <span class="material-icons-outlined">image</span>
                                <span class="material-icons-outlined">gif_box</span>
                                <span class="material-icons-outlined">sort</span>
                                <span class="material-icons-outlined">tag_faces</span>
                            </div>
                            <input type="submit" class="tweet-submit" value="Tweet">
                        </div>
                    </div>
                </div>
            </div>
            <div class="tweets-box" v-if="activeTab === 'recommend'">
                <!-- 顯示為你推薦的內容 -->
                <Tweet />
            </div>
            <div class="tweets-box" v-else-if="activeTab === 'following'">
                <!-- 顯示正在跟隨的內容 -->
                <TweetFolling />
            </div>
        </div>
        <div class="sidebar trend">
            <div class="title-box flex-between">
                <div class="trend-title">
                    流行趨勢
                </div>
                <div class="settings">
                    <span class="material-icons-outlined">settings</span>
                </div>
            </div>
            <Trend />
            <div class="show-more">Show More</div>
        </div>
    </div>
</template>
<script>
import Tweet from './components/Tweet.vue';
import Trend from './components/Trend.vue';
import TweetFolling from './components/TweetFollowing.vue';

export default {
    name: 'IndexView',
    components: {
        Tweet,
        Trend,
        TweetFolling,
    },
    data() {
    return {
      activeTab: 'recommend' // 預設為為你推薦
    }
  }
}
</script>
<style lang="css" scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    /* 定義三欄佈局的比例，1fr等於分配剩餘空間 */
    grid-gap: 20px;
    /* 欄與欄之間的寬度 */
    width: 100;
    width: 100%;
    background-color: #FAFAFA;
}

.sidebar {
    width: 100%;
}

.main-content {
    background-color: #FFF;
    box-shadow: 0px 4.010000228881836px 4.010000228881836px 0px #00000026;
    width: 100%;
}

.flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-start {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.flex-around {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.active {
    color: var(--active);
}

/* 左側sidebar */
.logo {
    z-index: -1;
}

.nav-block {
    margin-left: 84px;
    width: fit-content;
}

.nav {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: fit-content;
}

.nav-item {
    margin-bottom: 54px;
    cursor: pointer;
}

.nav-item span:first-child {
    font-size: 32px;
}

.nav-txt {
    font-family: 'ABeeZee';
    font-size: 27px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 33px;
}

.en {
    font-style: italic;
}

.icon-border {
    border: 2px solid #000;
    border-radius: 50%;
    width: 30px;
    height: 30px;
}

.icon-border .material-icons-round {
    font-size: 24px;
}

.more-post {
    background-color: #1DA1F2;
    color: #FFF;
    border: none;
    border-radius: 14465.220703125px;
    padding: 15px 35px;
    width: 100%;
    font-family: 'ABeeZee';
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
}

/* main-content */
.create-post {
    padding: 24px;
    margin-bottom: 100px;
}

.memoji-box {
    height: 43px;
    width: 43px;
    border-radius: 50%;
    background-color: #F9DFC0;
    margin-right: 20px;
}

.create-post .post-input {
    border: none;
    border-radius: 6.44px;
    background-color: #F4F6F8;
    padding: 13px;
    width: 100%;
}

.create-post .submit {
    padding: 12px 17px;
    margin-left: 20px;
    border: none;
    border-radius: 6.44px;
    background-color: var(--button-default);
    font-family: 'Rubik';
    font-size: 15px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFF;
}

.content-switch {
    margin-top: 20px;
    width: 100%;
    margin-bottom: 20px;
    /* height: 80px; */
}

.switch {
    flex: 1;
    font-family: 'Inter';
    font-size: 19px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    cursor: pointer;
}

.new-tweet {
    border-top: 1px solid #EBEEF0;
    border-bottom: 1px solid #EBEEF0;
    padding: 16px;
}

.tweet-input .memoji-box {
    margin-bottom: auto;
    height: 100%;
}

.tweet-content {
    width: 100%;
}

.textarea {
    width: 100%;
    border: none;
    height: 70px;
}

.tweet-tool .material-icons-outlined {
    margin-right: 18.25px;
}

.tweet-submit {
    padding: 10px 20px;
    border: none;
    border-radius: 47px;
    background-color: var(--button-default);
    font-family: 'SF Pro Text';
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFF;
}

/* tweets-box */
.tweets-box {
    padding: 1rem 2rem;
    height: 1000px;
    overflow: auto;
}

/* trend */
.trend {
    box-shadow: 0px 4px 4px 0px #00000040;
    background-color: #FFF;
}

.title-box {
    height: 64.84px;
    margin: 12px 24px;
}

.trend-title {
    font-family: 'Inter';
    font-size: 23px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
}

.title-box .settings {
    font-size: 26.91px;
    color: var(--button-default);
    cursor: pointer;
}

.show-more {
    font-family: 'SF Pro Text';
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #1DA1F2;
    padding: 12px 24px;
    cursor: pointer;
}

.active {
  background-color: #e1e0e0; 
  color: #000; /* 設置您希望的字體顏色 */
  border-radius: 8px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

</style>