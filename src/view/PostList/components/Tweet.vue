<template lang="">
    <div class="tweet " v-for="(item, index) in items" :key="index">
      <div class="friend-box">
        <div class="friendimg-box" >
            <img :src="item.user.avatar" alt="friend">
        </div>

      </div>
        <div class="content">
            <div class="friend-info">
                <span class="name">{{ item.user.userName }}</span>
                <span class="place">{{ item.createdAt }}</span>
            </div>
            <div class="txt">{{ item.content }}</div>
            <div class="tags">
                <span v-for="tag in item.hashtags" :key="tag">{{ tag.name }}</span>
            </div>

              <div>
              <div class="img-container" v-if="item.picture != ''">
                <div class="img-box" v-for="(picture, index) in item.picture.split('▲')" :key="index">
                  <img :src="picture" alt="Picture" @click="showImageDialog(picture)">
                </div>
              </div>
    
              <v-dialog v-model="showDialog" max-width="500px">
                <v-card>
                  <v-img :src="selectedImage" alt="Full Image"></v-img>
                </v-card>
              </v-dialog>
            </div>
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
                    <span class="material-icons" :class="{ active: item.loveStatus }" @click="toggleLove(item)">thumb_up</span>
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
import axios from "axios";
import { reactive } from "vue";//在 Vue 3 中引入 reactive 函數的語法

export default {
  props: ['results'],
  data() {
    return {
      items: [], // 存放動態的列表
      pageNum: 1, // 目前頁數
      isLoading: true, // 是否正在載入中
      loveStatus: false, //使用者是否有按讚
      showDialog: false,
      selectedImage: ""
    };
  },
  watch: {
    results: {  // 当父组件传递的搜索结果更新时，使用watch来监听
      handler(newVal, oldVal) {
        if(newVal.length > 0) {
          this.items = newVal;  // 更新items
        }
      },
      deep: true,
    },
  },
  mounted() {
    // 在組件載入後，執行非同步行為獲取資料並匯入到items陣列中
    this.fetchData();
    this.addScrollListener();
  },
  //-----
  methods: {
    fetchData() {
      // 發送 HTTP GET 請求到後端 API 獲取資料
      axios
        .get("/dyThreads/pageDyThread", {
          params: {
            pageNum: this.pageNum,
          },
        })
        .then((response) => {
          // 請求成功，將資料設置給items陣列
          this.items = this.items.concat(response.data.data);
          this.isLoading = false; // 停止載入狀態
        })
        .catch((error) => {
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
      let isBottomReached = false; // 標誌是否滾動到底部

      window.addEventListener("scroll", () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        const offset = 5; // 設置一個偏移值

        if (scrollTop + clientHeight + offset >= scrollHeight
        //  && !isBottomReached
        ) {
          // isBottomReached = true; // 設置標誌為 true，避免再次觸發
          this.addData();
        }
      });
    },

    toggleLove(item) {
      const loveId = item.dyThreadId;
      axios
        .put("dyThreads/toggleUserLove/" + loveId)
        .then((response) => {
          if (item.loveStatus === 1) {
            item.loveStatus = 0;
            item.love--;
          } else {
            item.loveStatus = 1;
            item.love++;
          }
          item = reactive(item);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showImageDialog(image) {
      this.selectedImage = image;
      this.showDialog = true;
    }
  },
};
</script>
<style lang="css" scoped>
.tweet {
  border-top: 1px solid #ebeef0;
  width: auto;
  background-color: #fff;
  padding: 8px 16px;

  font-family: "微軟正黑體";
  font-size: 19px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  cursor: pointer;

  display: flex;
}

.place {
font-family: "ABeeZee";
/* font-style: italic; */
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
  /* margin-left: 200px; */
}

.friend-box {
  height: 100%;
  /* background: #1e90ff; */
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

.tags {
    width: 100%;
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
    cursor: pointer;
}

.friend-info span {
  margin-right: 8px;
}

.place {
  color: #5b7083;
}

/* .img-box {
  border-radius: 20px;
  width: 628.94px;
  height: 305.2px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
} */
.img-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 在这里设置你想要的列数 */
  grid-gap: 10px; 
  width: 628.94px;
}

.img-box {
  width: 100%;
  position: relative;
  overflow: hidden;
  aspect-ratio: 2/1;
  border: 0.8px solid #5b7083;
  border-radius: 8%;
}

.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tweetImg {
  width: 100%;
}

.fn {
  color: #5b7083;
  margin-right: 70px;
  margin-left: 150px;
}

.fn span:not(:last-child) {
  margin-right: 8px;
}

/* .active {
    color: #F4245E;
} */

.show {
  color: #1da1f2;
  font-size: 16.063px;
  font-family: "ABeeZee";
  /* font-style: italic; */
}

.active {
  color: #1e90ff;
}
</style>