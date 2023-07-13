<template lang="">
    <div class="container">
        <div class="sidebar">
          <LeftSideBar/>
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
        <form @submit="submitForm">
            <div class="new-tweet">
                <div class="tweet-input flex-start">
                <div  class="memoji-box flex-center">
                    <img v-if="userName != null" :src="avatar" alt="User Photo">
                    <img v-else src="../../assets/img/postlist/memoji.svg" alt="" class="memoji">
                </div>
                <div class="tweet-content">
                    <textarea v-model="tweetContent" name="tweet" id="" cols="30" rows="5" class="textarea" placeholder="What’s happening?"></textarea>
                    <div class="tweet-toolbox flex-between">
                    <div class="tweet-tool">
                        <label for="imageUpload" class="material-icons-outlined" style="cursor: pointer;">
                        <span class="material-icons-outlined">image</span>
                        </label>
                        <input type="file" id="imageUpload" accept="image/*" multiple @change="handleImageUpload" style="display: none;" ref="imageUpload">
                    </div>
                    <button class="tweet-submit" :disabled="!canTweet" type="submit">Tweet</button>
                    </div>
<div v-for="(image, index) in uploadedImages" :key="index" class="uploaded-image-container">
  <div class="image-preview">
    <div class="image-preview-box">
      <img :src="image" alt="Uploaded Image" class="uploaded-image">
    </div>
    <button class="remove-image" @click="removeImage(index)">
      <span class="material-icons-outlined">close</span>
    </button>
    <!-- 添加第二张图片预览 -->
    <!-- <div v-if="index > 0" class="image-preview-box">
      <img :src="uploadedImages[index - 1]" alt="Uploaded Image" class="uploaded-image">
    </div> -->
  </div>
</div>


                </div>
                </div>
            </div>
        </form>
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
import axios from "axios";
import Tweet from "./components/Tweet.vue";
import Trend from "./components/Trend.vue";
import TweetFolling from "./components/TweetFollowing.vue";
import LeftSideBar from "./components/LeftSideBar.vue";

export default {
  name: "IndexView",
  components: {
    Tweet,
    Trend,
    TweetFolling,
    LeftSideBar
  },
  created() {
  // 在組件創建時使用 Axios，並傳遞使用者 ID
  axios.post('/users/getUserId/0')
    .then(response => {
      console.log(response.data);
      this.userName = response.data.userName;
      this.avatar=response.data.avatar;

    //先放置 圖片
    //   this.avatar = response.data.avatar;
    })
    .catch(error => {
      console.log(error);
      // 處理錯誤
    });
  },
  data() {
    return {
      activeTab: "recommend", // 預設為為你推薦
      tweetContent: "", // 推文內容
      maxCharacters: 280, // 最大字數限制
      uploadedImages: [], // 上傳的圖片
      userName: "",
    };
  },

  computed: {
    remainingCharacters() {
      return this.maxCharacters - this.tweetContent.length;
    },
    canTweet() {
      return (
        this.tweetContent.length > 0 &&
        this.tweetContent.length <= this.maxCharacters
      );
    },
  },
  methods: {
    sendTweet() {
      // 在此處執行發送推文的邏輯
      // 可以使用 this.tweetContent 獲取推文內容，this.uploadedImages 獲取上傳的圖片，然後進行相關處理
      console.log("Sending tweet:", this.tweetContent);
      console.log("Uploaded images:", this.uploadedImages);
      // 清空推文內容和圖片
      this.tweetContent = "";
      this.uploadedImages = [];
    },

   submitForm(event) {
  event.preventDefault();

  const formData = new FormData();
  formData.append("content", this.tweetContent);

  const files = this.$refs.imageUpload.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    formData.append("files", file);
  }

  axios
    .post("/dyThreads", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response.data);
     for (const entry of formData.entries()) {
    const [name, value] = entry;
    if (value instanceof File) {
      console.log(`File Name: ${name}`, value.name);
    }
  }
    })
    .catch((error) => {
      console.log(error);
      // 在錯誤回應後進行相應處理
    });
  console.log("FormData:", formData);
},



    handleImageUpload(event) {
      const files = event.target.files;
      if (files && files.length > 0) {
        // 執行上傳圖片的邏輯，例如使用 FormData 或其他圖片上傳方式
        // 這裡只是將圖片以 Base64 編碼的形式存儲在 uploadedImages 中
        Array.from(files).forEach((file) => {
          const reader = new FileReader();
          reader.onload = () => {
            this.uploadedImages.push(reader.result);
          };
          reader.readAsDataURL(file);
        });
      }
    },
    removeImage(index) {
      this.uploadedImages.splice(index, 1);
    },
  },
};
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
  background-color: #fafafa;
}

.sidebar {
  width: 100%;
}

.main-content {
  background-color: #fff;
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
  font-family: "ABeeZee";
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
  background-color: #1da1f2;
  color: #fff;
  border: none;
  border-radius: 14465.220703125px;
  padding: 15px 35px;
  width: 100%;
  font-family: "ABeeZee";
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
  background-color: #f9dfc0;
  margin-right: 20px;
  /* border-radius: 7.5px; */
  /* padding: 2px; */
}

.memoji-box img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  /* border-radius:10px; */
}


.create-post .post-input {
  border: none;
  border-radius: 6.44px;
  background-color: #f4f6f8;
  padding: 13px;
  width: 100%;
}

.create-post .submit {
  padding: 12px 17px;
  margin-left: 20px;
  border: none;
  border-radius: 6.44px;
  background-color: var(--button-default);
  font-family: "Rubik";
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
}

.content-switch {
  margin-top: 20px;
  width: 100%;
  margin-bottom: 20px;
  /* height: 80px; */
}

.switch {
  flex: 1;
  font-family: "微軟正黑體";
  font-size: 19px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
}

.new-tweet {
  border-top: 1px solid #ebeef0;
  border-bottom: 1px solid #ebeef0;
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
  font-family: "SF Pro Text";
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
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
  background-color: #fff;
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

.active {
  background-color: #e1e0e0;
  color: #000; /* 設置您希望的字體顏色 */
  border-radius: 8px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.uploaded-image-container {
  width: 100%;
  height: 250px;
  background: #1da1f2;
  /* display: flex; */
}

.image-preview {
  /* display: flex; */
  align-items: center;
  background: #ad1a1a;
}

.image-preview-box {
  width: 25%;
  height: 100%;
  border: 2px dashed #bcbcbc;
  overflow: hidden;
  margin-right: 10px; /* 调整第二张图片预览与第一张图片之间的间距 */
  margin-bottom: 10px; /* 调整图片预览与删除按钮之间的间距 */
}

.remove-image {
  display: block; /* 将删除按钮显示为块级元素 */
  margin-top: 5px; /* 调整删除按钮与图片之间的间距 */
}

.uploaded-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


/* .image-preview-box {
  width: 25%;
  height: 100%;
  border: 2px dashed #bcbcbc;
  overflow: hidden;
} */




</style>