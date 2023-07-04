<template lang="">
    <div class="container">
        <div class="sidebar">
            <SideBar/>
        </div>
        <div class="main-content">
            <ArticleItem/>
        </div>
        <div class="sidebar">
            <AuthorRank/>
            <HotArticle />
        </div>
    </div>
</template>
<script>
import SideBar from '../../components/SideBar.vue';
import AuthorRank from './components/AuthorRank.vue';
import HotArticle from './components/HotArticle.vue'
import ArticleItem from './components/ArticleItem.vue'

export default {

    components: {
        SideBar,
        AuthorRank,
        HotArticle,
        ArticleItem
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
    height: 100%;
}

.sidebar {
    /* background-color: #EAEAEA; */
    width: 100%;
}

.main-content {
    /* background-color: #EAEAEA; */
    width: 100%;
}
</style>