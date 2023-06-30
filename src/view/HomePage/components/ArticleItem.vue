<template >
    <div v-for="(item, index) in items" :key="index" class="articleitem">
        <div class="img">
            <img :src="item.picture" alt="">
        </div>
        <div class="data">
            <div class="top">
                <div class="word">{{ item.title }}</div>
                <div class="icon"><img src="../../../assets/img/HomePage/ArticleItem/Love.svg" alt=""></div>
            </div>
            <div class="tags">
                <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
                
            </div>
            <div class="down">
                <div class="person">
                    <img :src="item.picture" alt="">
                    <div class="name-area">
                        <div class="name">{{ item.author }}</div>
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
    
    
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            items: [], // 存放文章的列表
            newArticleTitle: '', // 新文章的標題
            newArticleContent: '', // 新文章的內容
        };
    },
    mounted() {
        // 在組件載入後，執行非同步行為獲取資料並匯入到items陣列中
        this.fetchData();
    },
    methods: {
        fetchData() {
            // 發送 HTTP GET 請求到後端 API 獲取資料
            axios.get('/threads')
                .then(response => {
                    // 請求成功，將資料設置給items陣列
                    this.items = response.data.data;
                    

                    console.log(response.data.data)
                })
                .catch(error => {
                    // 請求失敗，處理錯誤
                    console.error(error);
                });

        }
    }
}
</script>
<style lang="css" scoped>
.down {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.person {
    display: flex;
    align-items: center;

}

.articleitem {
    width: 100%;
    display: flex;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding-left: 21.48459243774414px;
    padding-top: 21.48459243774414px;
    border-radius: 17.187673568725586px;
}

.top {
    display: flex;
    margin-top: 5px;
    width: 100%;
    justify-content: space-between;

}

.data {
    width: 100%;

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
</style>