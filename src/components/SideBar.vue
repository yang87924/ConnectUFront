<template>
  <div class="sidebar">
    <div class="title">
      <button class="btn" :class="{ active: selectedTab === 'hotTags' }" @click="selectedTab = 'hotTags'">
        熱門標籤
      </button>
      <button class="btn" :class="{ active: selectedTab === 'topicCategory' }" @click="selectedTab = 'topicCategory'">
        主題分類
      </button>
    </div>

    <div v-show="selectedTab === 'hotTags'" class="hottags1">
      <!-- <div class="a"> -->
      <!-- <div v-for="item in leaderboardData" :key="item.hashtagId"> -->
      <div v-for="(a, id) in leaderboardData" :key="id" class="group" >
        <div class="hash">
        <img :src="`${a.picture}`" alt="" class="hashpic" />
          <div class="hash-info">
          <div class="topic">{{ a.name }}{{ id }}</div>
          <div class="num">使用次數{{ a.amount }}</div>
          </div>
        <!-- </div> -->
      </div> 


  </div>  
        
        
      </div>

    


    <div v-show="selectedTab === 'topicCategory'" class="content">
      <div class="podcast flex-between">
        <div class="img-box">
          <img src="../assets/img/article/Rectangle 54.svg" alt="">
        </div>
        <div class="content1">
          <div class="txt-box flex-between">
            <div class="txt">心情</div>
          </div>
          <div class="comment"></div>篇數：86
        </div>
        <div class="arrow">
          <span class="material-icons-round">arrow_forward</span>
        </div>
      </div>
      <div class="podcast flex-between">
        <div class="img-box">
          <img src="../assets/img/article/Rectangle 54.svg" alt="">
        </div>
        <div class="content">
          <div class="txt-box flex-between">
            <div class="txt">求職</div>
          </div>
          <div class="comment">篇數：1,020</div>
        </div>
        <div class="arrow">
          <span class="material-icons-round">arrow_forward</span>
        </div>
      </div>
      <div class="podcast flex-between">
        <div class="img-box">
          <img src="../assets/img/article/Rectangle 54.svg" alt="">
        </div>
        <div class="content">
          <div class="txt-box flex-between">
            <div class="txt">工作</div>
          </div>
          <div class="comment">篇數：545</div>
        </div>
        <div class="arrow">
          <span class="material-icons-round">arrow_forward</span>
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
      leaderboardData: [],
      showSidebar: true, // 初始時側邊欄是顯示的
      selectedTab: 'hotTags',

    };
  },
  created() {
    this.fetchData();
  },


  methods: {
    fetchData() {
      // 發送 HTTP GET 請求到後端 API 獲取資料
      axios
        .get('/threads/HotHashtag')  // 請根據實際的 API 端點進行更新
        .then(response => {

          console.log("happy", response)
          // 請求成功，將資料設置給 leaderboardData 陣列
          this.leaderboardData = response.data.data;
          console.log(this.leaderboardData);
          this.isLoading = false; // 停止載入狀態
        })
        .catch(error => {
          // 請求失敗，處理錯誤
          console.error(error);
          this.isLoading = false; // 停止載入狀態
        });
    },



fetchData() {
      // 發送 HTTP GET 請求到後端 API 獲取資料
      axios
        .get('/threads/HotHashtag')  // 請根據實際的 API 端點進行更新
        .then(response => {

          console.log("happy", response)
          // 請求成功，將資料設置給 leaderboardData 陣列
          this.leaderboardData = response.data.data;
          console.log(this.leaderboardData);
          this.isLoading = false; // 停止載入狀態
        })
        .catch(error => {
          // 請求失敗，處理錯誤
          console.error(error);
          this.isLoading = false; // 停止載入狀態
        });
    },

  },

};









</script>
  
  
  
<!-- <>
export default {
    data() {
        return {

            item: [], // 或者 leaderboardData: {}
            showSidebar: true, // 初始時側邊欄是顯示的
            selectedTab: 'hotTags',

        };
    },

    mounted() {

    },
    methods: {

        fetchData() {
            // 發送 HTTP GET 請求到後端 API 獲取資料
            axios
                .get('/threads/HotHashtag')  // 請根據實際的 API 端點進行更新
                .then(response => {
                    // 請求成功，將資料設置給 hotTags 陣列
                    this.hashtags = response.data;
                    console.log(this.hashtags);
                    this.isLoading = false; // 停止載入狀態
                })
                .catch(error => {
                    // 請求失敗，處理錯誤
                    console.error(error);
                    this.isLoading = false; // 停止載入狀態
                });
        },

        // toggleSidebar() {
        //     this.showSidebar = !this.showSidebar; // 點擊按鈕時切換側邊欄的顯示狀態
        // },
    },

};
</> -->
<style llang="css" scoped>


.sidebar {
  background: #FFFFFF;
  /* mix-blend-mode: luminosity; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24.286739349365234px;
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 50px;
  margin-top: 10px;
  height: 600px;
  
}

.item {
  height: 100%;
}

.item>div {
  display: flex;
  margin-bottom: 30px;
}

.item>div>img {
  margin-right: 20px;
  width: 35px;
  height: 35px;
}

.topic {
  margin-bottom: 5px;
    font-family: 'Source Sans Pro';
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
    text-align:center;
    color:darkorange;
    width:100px
    
    

}

.title {
  font-family: 'Source Sans Pro';
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 20px;
  padding: 16px;
}

.num {
  font-family: 'Source Sans Pro';
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0em;
  color:#b581e0;
  width:100px;
  text-align:right;
 
  
}

/* .num {
  font-family: 'Source Sans Pro';
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0em;
  color: #b581e0;
  width: 100px;
} */

.btn {
  padding: 20px 20px;
  /* cursor: pointer; */
  background-color: #EEE;
  border: none;
  outline: none;
  color: #333;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.btn.active {
  background-color: #b581e0;
}

.btn:hover {
  background-color: #e0d3eb;
}

.img-box {
  width: 56.1px;
  height: 56.1px;
  margin-right: 13.5px;
  box-shadow: 0px 2.9015159606933594px 3.8686881065368652px 0px #FA89240F;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.podcast {
  padding: 16px;
  margin-bottom: 20px;
}

.hash {

  display: flex;
  align-items: center;
  /* 將元素在垂直方向上居中對齊 */
  /* 可根據需要調整元素之間的垂直間距 */
  width: 70px;
  height: 70px;
  
}

.hash img {
  margin-right: 10px;
  /* 可根據需要調整圖片與其他元素之間的間距 */
}

.hashpic {
  width: 100%;
  height: 100%;

}


.hottags1 {
  width: 100px;
  height: 100px;

}
.group{

  height: 100px;
  width: 100px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
}

</style>