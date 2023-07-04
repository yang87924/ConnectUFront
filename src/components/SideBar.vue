<template lang="">
    <div class="sidebar">
        <div class="title">熱門標籤</div>
        <div class="item">
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
                    <div class="topic">#程式碼</div>
                    <div class="num">82,645 Posted by this tag</div>
                </div>
            </div>

        </div>
        <div class="theme">
            <div>主題分類</div>
            <div class="different topic">





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
</style>