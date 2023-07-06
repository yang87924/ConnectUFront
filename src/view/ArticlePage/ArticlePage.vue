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
                    <button class="small-button" @click="increaseLove"><img src="../../assets/img/article/heart-regular.svg" alt=""></button>
                    <div>{{love}}</div>
                    <button class="small-button"><img src="../../assets/img/article/message-regular.svg" alt=""></button>
                    <div>{{replyCount}}</div>
                </div>
            <div class="comment-bar">
                <input type="text" class="comment-input" placeholder="留言...">
            </div>
            <div class="sent-comment">
                <button class="sent-comment-button">送出留言</button>
            </div>
            <div v-for="comment in comments" :key="comment.replyId" class="comment-card">
                <div class="comment-avatr">我是大頭貼</div>
                <div class="comment-body">
                    <div class="comment-body-top">
                        <span class="people-name">我是名字</span>
                        <span class="comment-time">{{ comment.createdAt }}</span>
                    </div>
                    <div class="comment-body-mid">
                        <span class="comment-content">{{ comment.content }}</span>
                    </div>
                    <div class="comment-body-down">
                        <button class="small-button"><img src="../../assets/img/article/heart-regular.svg" alt=""></button>
                        <div>0</div>
                        <button class="small-button">回覆</button>
                    </div>
                </div>
                <div class="comment-menu">
                    <button class="comment-menu-button">
                        <img src="../../assets/img/article/ellipsis-solid.svg" alt="">
                    </button>
                </div>
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

    methods: {
        increaseLove() {
        const action = this.loveStatus === 0 ? 'like' : 'unlike';

        axios.put('threads/toggleUserLove/2', {
        action: action
        })
        .then(res => {
            if (res.data.code === 20031) {
                this.loveStatus = res.data.data.loveStatus;
                this.love = res.data.data.love;
            } else {
                console.error(res.data.msg);
            }
        })
        .catch(err => {
            onsole.error(err);
        });
    }
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
            comments: [],
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

            axios.get('/replys/2')
            .then(res => {
                console.log(res.data)
                this.comments = res.data.data;
            })
            .then(err => {
                console.log(err)
            });
    },
    


}
</script>
<style lang="css" scoped>

.photo-box {
    width: 600px;
    height: 600px;
    margin-left: auto;
    margin-right: auto;
}

.photo-box img {
    max-width: 100%;
    max-height: 100%;
}

.comment-body-down {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.comment-menu {
    display: flex;
    justify-content: center;
}

.comment-menu-button {
    height: 30px;
    width: 30px;

}

.sent-comment-button {
    width: 100%;
    height: 50px;
    background-color: #fff;
}

.foot-bar {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
    border-top: 1px solid #ccc;
}

.small-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    margin: 0 15px;
}

.comment-card {
    width: 100%;
    height: 150px;
    display: flex;
    background-color: red;
    margin-top: 30px;
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