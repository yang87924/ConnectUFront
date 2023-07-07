<template lang="">
    <div class="title-box flex-between">
         <div class="trend-title">
            流行趨勢
        </div>
        <div class="settings">
            <span class="material-icons-outlined">settings</span>
        </div>
    </div>
    <div class="content flex-between" v-for="(item, index) in items" :key="index">
        <div class="trending">
            <!-- <div class="subtitle">
                Trending in Turkey
            </div> -->
            <div class="tag">
                {{ item.name }}
            </div>
            <div class="count">
                {{ item.amount }} Tweets
            </div>
        </div>
        <div class="tool">
            <span class="material-icons">keyboard_arrow_down</span>
        </div>
    </div>
    <div class="show-more">Show More</div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [], // 存放動態的列表
    };
  },
  mounted() {
    // 在組件載入後，執行非同步行為獲取資料並匯入到items陣列中
    // this.fetchData();
  },
  created() {
    // 查詢流行趨勢的API
        axios.get('/dyThreads/dyHotHashtag')
            .then(response => {
                console.log('流行趨勢：', response.data.data);
                // console.log(response.data);
                if (response.data.data && response.data.data.length > 0) {
                    this.items = this.items.concat(response.data.data);
                } else {
                    console.log('回應資料無效或沒有文章資料');
                    this.item = '找不到流行趨勢';
                }
            })
            .catch(error => {
                console.log('發生錯誤：', error);
                this.item = '找不到流行趨勢';
            });
  },
}
</script>
<style lang="css" scoped>
.content {
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    padding: 12px 24px;
    cursor: pointer;
}

.trending div:not(:last-child) {
    margin-bottom: 4px;
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

.subtitle {
    font-family: 'SF Pro Text';
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #6E767D;
}

.tag {
    font-family: 'SF Pro Text';
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--black);
}

.count {
    font-family: 'SF Pro Text';
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #6E767D;
}

.material-icons {
    cursor: pointer;
}

.title-box {
  height: 64.84px;
  margin: 12px 24px;
}

.trend-title {
  font-family: "Inter";
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
  font-family: "SF Pro Text";
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #1da1f2;
  padding: 12px 24px;
  cursor: pointer;
}
</style>