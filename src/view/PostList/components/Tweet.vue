<template lang="">
    <div class="tweet flex-center" v-for="(item, index) in items" :key="index">
        <div class="friendimg-box" >
            <img :src="item.user.avatar" alt="friend">
        </div>
        <div class="content">
            <div class="friend-info">
                <span class="name">{{ item.user.userName }}</span>
                <span class="place">{{ item.createdAt }}</span>
            </div>
            <div class="txt">{{ item.content }}</div>
            <div class="img-box" :style="{ backgroundImage: `url(${item.picture})` }"></div>
            <div class="flex-start">
                <div class="fn flex-center">
                    <span class="material-icons">chat_bubble_outline</span>
                    <span class="fn-txt">{{ item.replyCount }}</span>
                </div>
                <!-- <div class="fn flex-center">
                    <span class="material-icons">autorenew</span>
                    <span class="fn-txt">12</span>
                </div> -->
                <div class="fn flex-center">
                    <span class="material-icons">thumb_up</span>
                    <span class="fn-txt">{{ item.love }}</span>
                </div>
                <!-- <div class="fn flex-center active">
                    <span class="material-icons">ios_share</span>
                    <span class="fn-txt">61</span>
                </div> -->
            </div>
            <div class="show">
                Show this thread
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            items: [], // 存放動態的列表
            pageNum: 1, // 目前頁數
            isLoading: true, // 是否正在載入中
        };
    },
    mounted() {
        // 在組件載入後，執行非同步行為獲取資料並匯入到items陣列中
        this.fetchData();
        // 在組件載入後，執行非同步行為獲取資料並匯入到items陣列中
        this.fetchData();
        this.addScrollListener();
    },
    methods: {
        fetchData() {
            // 發送 HTTP GET 請求到後端 API 獲取資料
            axios.get('/dyThreads/pageDyThread', {
                params: {
                    pageNum: this.pageNum,
                },
            })
                .then(response => {
                    // 請求成功，將資料設置給items陣列
                    this.items = this.items.concat(response.data.data);
                    console.log(response.data.data);
                    this.isLoading = false; // 停止載入狀態
                })
                .catch(error => {
                    // 請求失敗，處理錯誤
                    console.error(error);
                    this.isLoading = false; // 停止載入狀態
                });
        },
        addData() {
            this.pageNum++; // 增加頁數
            this.isLoading = true; // 開始載入狀態
            this.fetchData();
        },
        addScrollListener() {
            window.addEventListener('scroll', () => {
                const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
                const offset = 5; // 設置一個偏移值
                if (scrollTop + clientHeight + offset >= scrollHeight) {
                    this.addData();
                }
            });
        },
    }
}
</script>
<style lang="css" scoped>
.tweet {
    border-top: 1px solid #EBEEF0;
    width: auto;
    background-color: #FFF;
    padding: 8px 16px;

    font-family: 'ABeeZee';
    font-size: 19px;
    font-style: italic;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
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

.friendimg-box {
    width: 60.55px;
    height: 60.55px;
    margin-right: 12px;
    margin-bottom: auto;
}

.friendimg-box img {
    border-radius: 50%;
    width: 55px;
    height: 55px;
    object-fit: cover;
}

.content {
    width: 100%;
}

.content div {
    margin-bottom: 12px;
}

.friend-info span {
    margin-right: 8px;
}

.place {
    color: #5B7083;
}

.img-box {
    border-radius: 20px;
    width: 628.94px;
    height: 305.2px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}


.tweetImg {
    width: 100%;
}

.fn {
    color: #5B7083;
    margin-right: 88px;
}

.fn span:not(:last-child) {
    margin-right: 8px;
}

.active {
    color: #F4245E;
}

.show {
    color: #1DA1F2;
    font-size: 16.063px;
    font-family: 'ABeeZee';
    font-style: italic;
}
</style>