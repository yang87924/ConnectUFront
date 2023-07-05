<template lang="">
    <div class="container">
        <div class="sidebar">
            <SideBar />
        </div>
        <div class="main-content">
            <div class="main-title">{{title}}</div>
            <div class="author-block flex-between">
                <div class="author-info flex-between">
                    <div class="author-img-box flex-center">人</div>
                    <div class="author">
                        <div class="name">黑熊好酒量</div>
                        <div class="level">Lv9</div>
                    </div>
                    <button class="follow">追蹤</button>
                </div>
                <div class="count-info flex-between">
                    <span class="date">
                        公仔・{{createdAt}}
                    </span>
                    <span class="material-icons-outlined">remove_red_eye</span>
                    <span>{{hotScore}} views</span>
                </div>
            </div>
            <div class="article-content">
                {{content}}
                <div class="photo-box">
                    <img :src="picture" alt="">
                </div>
            </div>
            <div class="foot-bar">
                <button>愛心</button>
                <button>留言</button>
            </div>
            <div class="comment-bar">
                <input type="text" class="comment-input" placeholder="留言...">
            </div>
            <div class="sent-comment">
                <button>送出留言</button>
            </div>
            <div class="comment-card">
                <div class="comment-avatr">我是大頭貼</div>
                <div class="comment-body">
                    <div class="comment-body-top">
                        <span class="people-name">我是名字</span>
                        <span class="comment-time">2021-08-01 12:00</span>
                    </div>
                    <div class="comment-body-mid">
                        <span class="comment-content">我是留言內容</span>
                    </div>
                    <div class="comment-body-down">
                        <button class="comment-love">愛心</button>
                        <button class="comment-reply">回覆</button>
                    </div>
                </div>
                <div class="comment-menu">我是menu</div>
            </div>
        </div>
        <div class="sidebar">
            <AuthorRank />
            <HotArticle />
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import SideBar from '../../components/SideBar.vue'
import AuthorRank from './components/AuthorRank.vue'
import HotArticle from './components/HotArticle.vue'

export default {
    components: {
        SideBar,
        AuthorRank,
        HotArticle,
    },

    data() {
        return {
            title: '',
            content: '',
            picture: '',
            love: '',
            loveStatus: '',
            user: '',
            userId: '',
            categoryId: '',
            categoryName: '',
            categoryAt: '',
            favoriteCount: '',
            hashtags: '',
            replyCount: '',
            hotScore: '',
        }
    },

    created() {
        axios.get('/threads/2')
            .then(res => {
                console.log(res.data)
                this.title = res.data.data.title
                this.content = res.data.data.content
                this.picture = res.data.data.picture
                this.love = res.data.data.love
                this.loveStatus = res.data.data.loveStatus
                this.user = res.data.data.user
                this.userId = res.data.data.userId
                this.categoryId = res.data.data.categoryId
                this.categoryName = res.data.data.categoryName
                this.createdAt =  res.data.data.createdAt
                this.favoriteCount = res.data.data.favoriteCount
                this.hashtags = res.data.data.hashtags
                this.replyCount = res.data.data.replyCount
                this.hotScore = res.data.data.hotScore
            })
            .then(err => {
                console.log(err)
            });
    },


}
</script>
<style lang="css" scoped>

.comment-card {
    width: 100%;
    height: 150px;
    display: flex;
    background-color: red;
}

.comment-avatr {
    width: 100px;
    height: 150px;
    background-color: gray;
}

.comment-body {
    flex: 1;
    display: flex;
    flex-direction: column;
}
.comment-body-top {
    height: 40px;
}

.comment-body-mid {
    flex: 1;
}

.comment-body-down {
    height: 40px;
    margin-top: auto;
}

.comment-menu {
    width: 50px;
    height: 150px;
    background-color: gray;
}

.comment-bar {
    width: 100%; /* 设置父元素宽度为100% */
}

.comment-input {
    width: 100%; /* 设置输入框宽度为100% */
    border: 1px solid #ccc; /* 添加边框 */
    padding: 8px; /* 可选的内边距 */
    height: 100px;
}
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    /* 定義三欄佈局的比例，1fr等於分配剩餘空間 */
    grid-gap: 20px;
    /* 欄與欄之間的寬度 */
    width: 100%;
    height: 100vh;
}

.sidebar {
    background-color: #FFF;
    width: 100%;
}

.main-content {
    background-color: #FFF;
    width: 100%;
    padding: 16px;
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

.main-title {
    font-size: 35px;
}

.author-block {
    padding: 16px 12px;
    border-bottom: 1px solid lightgrey;
}

.author-img-box {
    border-radius: 50%;
    background-color: orange;
    width: 36px;
    height: 36px;
    margin-right: 12px;
}

.author .name {
    font-size: 14px;
}

.level {
    border-radius: 32px;
    background-color: blue;
    color: #FFF;
    font-size: 12px;
    padding: 3px 6px;
    width: fit-content;
}

.follow {
    border: none;
    background-color: black;
    color: #FFF;
    border-radius: 32px;
    margin-left: 12px;
    padding: 5px 10px;
    font-size: 14px;
}

.count-info {
    color: grey;
    font-size: 12px;
}

.count-info span:not(:last-child) {
    margin-right: 4px;
}

.count-info .material-icons-outlined {
    font-size: 16px;
}

.article-content {
    padding: 16px 12px;
}
</style>