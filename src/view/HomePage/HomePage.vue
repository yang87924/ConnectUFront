<template lang="">
    <div class="container">
        <div class="sidebar">
            <SideBar/>
        </div>
        <div class="main-content">
            主內容區域
        </div>
        <div class="sidebar">
            右側欄內容
        </div>
    </div>
</template>
<script>
import SideBar from './components/sideBar.vue';
export default {

    components: {
        SideBar
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
    width: 100;
    width: 100%;
    height: 100vh;
}

.sidebar {
    background-color: #EAEAEA;
    width: 100%;
}

.main-content {
    background-color: #EAEAEA;
    width: 100%;
}
</style>