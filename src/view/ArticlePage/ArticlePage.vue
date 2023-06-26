<template lang="">
    <div class="container">
        <div class="sidebar">
            <SideBar />
        </div>
        <div class="main-content">
            <div class="main-title">番賞「七龍珠」F賞 魔人普烏</div>
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
                        公仔・2023/6/4
                    </span>
                    <span class="material-icons-outlined">remove_red_eye</span>
                    <span>2,664 views</span>
                </div>
            </div>
            <div class="article-content">
                文章內容文章內容文章內容文章內容文章內容
            </div>
        </div>
        <div class="sidebar">
            <AuthorRank />
            <HotArticle />
        </div>
    </div>
</template>
<script>
import SideBar from '../../components/SideBar.vue'
import AuthorRank from './components/AuthorRank.vue'
import HotArticle from './components/HotArticle.vue'

export default {
    components: {
        SideBar,
        AuthorRank,
        HotArticle,
    }
}
</script>
<style lang="css" scoped>
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