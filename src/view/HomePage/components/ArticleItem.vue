<template >
    <div  v-for="(item, index) in items" :key="index" class="articleitem" >
        <div class="newsimg">
            <img :src="item.picture" alt="" class="newspic">
        </div>
        <div class="data">
            <div class="top">
                <div class="word">{{ item.title }}</div>
                <div class="icon"><img src="../../../assets/img/HomePage/ArticleItem/Love.svg" alt=""></div>
            </div>
            <div class="tags">
                <span v-for="tag in item.hashtags" :key="tag">{{ tag.name }}</span>

            </div>
            <div class="down">
                <div class="person">
                    <img :src="item.user.avatar" alt="" class="avatar">
                    <div class="name-area">
                        <div class="name">{{ item.user.userName }}</div>
                        <div class="time">{{ item.createdAt }}</div>
                    </div>
                </div>
                <div class="num">
                    <span>{{ item.views }}</span>
                    <span>{{ item.likes }}</span>
                    <span>{{ item.comments }}</span>
                </div>
            </div>
        </div>

    </div>
    <div v-if="isLoading" class="loading">
        <div class="loader"></div>
    </div></template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            items: [], // 存放文章的列表
            newArticleTitle: '', // 新文章的標題
            newArticleContent: '', // 新文章的內容
            pageNum: 1, // 目前頁數
            isLoading: true, // 是否正在載入中
        };
    },
    mounted() {
        // 在組件載入後，執行非同步行為獲取資料並匯入到items陣列中
        this.fetchData();
        this.addScrollListener();
    },
    methods: {
        fetchData() {
            // 發送 HTTP GET 請求到後端 API 獲取資料
            axios
                .get('/threads/pageThread', {
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
                const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
                const offset = 5; // 設置一個偏移值
                if (scrollTop + clientHeight + offset >= scrollHeight) {
                    this.addData();
                }
            });
        },
    },
};
</script>
<style lang="css" scoped>
.down {
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

}

.person {
    height: 50px;
    width: 200px;
    display: flex;
    align-items: center;


}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* or any other value that suits your needs */
}
.avatar {
    height: 50px;
    width: 50px;
    clip-path: circle(50% at center);

}

.articleitem {
    width: 100%;
    display: flex;
    box-shadow: 4px 4px rgba(0, 0, 0, 0.25);
    padding-left: 21.48459243774414px;
    /* padding-top: 21.48459243774414px; */
    border-radius: 17.187673568725586px;
    margin-bottom: 20px;
}

.top {
    display: flex;
    margin-top: 5px;
    width: 100%;
    justify-content: space-between;

}

.data {
    width: 60%;
    margin-left: 10px;

}

.word {
    font-family: 'Source Sans Pro';
    font-size: 18px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0em;
}

.icon {
    margin-top: -3px;
}

.tags {
    width: 100%;
}

.time {
    font-family: 'Source Sans Pro';
    font-size: 8px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #97989D;
    margin-left: 8px;
}

.num span {
    font-family: 'Source Sans Pro';
    font-size: 11px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #97989D;
    margin-left: 8px;

}

.num {
    padding-right: 10px;
}

.tags span {
    width: 53.48px;
    height: 24.59px;
    padding: 4.2969183921813965px 10.74229621887207px 4.2969183921813965px 10.74229621887207px;
    border-radius: 21.48459243774414px;
    background-color: #F4F6F8;
    font-family: Source Sans Pro;
    font-size: 15px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #858EAD;
    margin-right: 10px;
}

.newsimg {

    height: 150px;
    width: 150px;

    box-shadow: 5px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10%;
    margin: 10px 0px 10px 0px;
    

}

.newspic {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 10%;

}
</style>