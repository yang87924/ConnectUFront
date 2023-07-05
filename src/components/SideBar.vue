<template lang="">
    <div class="sidebar">
        <div class="title">
      <button class="btn" :class="{ active: selectedTab === 'hotTags' }" @click="selectedTab = 'hotTags'">熱門標籤</button>
      <button class="btn" :class="{ active: selectedTab === 'topicCategory' }" @click="selectedTab = 'topicCategory'">主題分類</button>
    </div> 
        <!-- <div class="item"> -->
            <div v-show="selectedTab === 'hotTags'" class="color">
            <div>
                <img src="../assets/img/HomePage/SideBar/Icon (1).svg" alt="">
                <div>
                    <div class="topic">#程式碼</div>
                    <div class="num">82,645 Posted by this tag</div>
                </div>
            </div>
            <div>
                <img src="../assets/img/HomePage/SideBar/Icon (2).svg" alt="">
                <div>
                    <div class="topic">#程式碼</div>
                    <div class="num">82,645 Posted by this tag</div>
                </div>
            </div>
            <div>
                <img src="../assets/img/HomePage/SideBar/Icon (3).svg" alt="">
                <div>
                    <div class="topic">#程式碼</div>
                    <div class="num">82,645 Posted by this tag</div>
                </div>
            </div>
            <div>
                <img src="../assets/img/HomePage/SideBar/Icon.svg" alt="">
                <div>
                    <div class="topic">主題</div>
                    <div class="num">100 則帖子</div>
                </div>
            </div>
            </div>

        <div v-show="selectedTab === 'topicCategory'" class="content">
            
        <div class="podcast flex-between">
            <div class="img-box">
                <img src="../assets/img/article/Rectangle 54.svg" alt="">
            </div>
            <div class="content">
                <div class="txt-box flex-between">
                    <div class="txt">標題</div> <br> 
                </div>
                <div class="comment">作者：cherry</div>
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
                    <div class="txt">Selling a Business and Scaling <br> Another Amidst Tragedy.</div>
                </div>
                <div class="comment">by Michele Hansen</div>
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
                    <div class="txt">Selling a Business and Scaling <br> Another Amidst Tragedy.</div>
                </div>
                <div class="comment">by Michele Hansen</div>
            </div>
            <div class="arrow">
                <span class="material-icons-round">arrow_forward</span>
            </div> 
        <!-- </div>        -->
            </div>
        </div>
            
           

        
        
    </div>


</template>
<script>
export default {
    data() {
        return {
            showSidebar: true, // 初始時側邊欄是顯示的
            selectedTab: 'hotTags',
            
        };
    },

    mounted() {
    
  },
    methods: {
        
      
        // toggleSidebar() {
        //     this.showSidebar = !this.showSidebar; // 點擊按鈕時切換側邊欄的顯示狀態
        // },
    },

};
</script>
<style llang="css" scoped>
.sidebar {
    background: #FFFFFF;
    /* mix-blend-mode: luminosity; */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24.286739349365234px;
    height: 100vh;
    padding-left: 30px;
    padding-top: 30px;
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
    text-align: left;
    color: #3F4354;
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
    font-size: 11px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #97989D;
    margin-left: 8px;
}

.btn {
    padding: 50px 50px;
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
    background-color:#e0d3eb;
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
</style>