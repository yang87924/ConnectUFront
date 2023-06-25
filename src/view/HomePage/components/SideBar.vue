<template lang="">
    <div class="sidebar">
        <h1>熱門標籤</h1>
        <div class="item">
            <div>
                <img src="../../../assets/img/HomePage/SideBar/Icon (1).svg" alt="">
                <div>
                    <div class="topic">#程式碼</div>
                    <div class="num">82,645 Posted by this tag</div>
                </div>
            </div>
            <div>
                <img src="../../../assets/img/HomePage/SideBar/Icon (2).svg" alt="">
                <div>
                    <div class="topic">#程式碼</div>
                    <div class="num">82,645 Posted by this tag</div>
                </div>
            </div>
            <div>
                <img src="../../../assets/img/HomePage/SideBar/Icon (3).svg" alt="">
                <div>
                    <div class="topic">#程式碼</div>
                    <div class="num">82,645 Posted by this tag</div>
                </div>
            </div>
            <div>
                <img src="../../../assets/img/HomePage/SideBar/Icon.svg" alt="">
                <div>
                    <div class="topic">#程式碼</div>
                    <div class="num">82,645 Posted by this tag</div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style llang="css" scoped>
    .sidebar {
        background: #FFFFFF;
        mix-blend-mode: luminosity;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 24.2867px;
        height: 100vh;
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
        width: 55px;
        height: 55px;
    }
    .topic{
        margin-bottom: 5px;
        font-size: 25px;
    }
</style>