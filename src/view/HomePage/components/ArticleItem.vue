<template lang="">
    <div v-for="(item, index) in items" :key="index" class="articleitem">
        <div class="img">
            <img src="../../../assets/img/HomePage/ArticleItem/Rectangle 24.svg" alt="">
        </div>
        <div class="data">
            <div class="top">
                <div class="word">關於創新鏈的區塊鏈開發者最佳實踐!!</div>
                <div class="icon"><img src="../../../assets/img/HomePage/ArticleItem/Love.svg" alt=""></div>
            </div>
            <div class="tags">
                <span>finance</span>
                <span>bitcoin</span>
                <span>crypto</span>
            </div>
            <div class="down">
                <div class="person">
                    <img src="../../../assets/img/HomePage/ArticleItem/Avatars.svg" alt="">
                    <div class="name-area">
                        <div class="name">Pavel Gvay</div>
                        <div class="time">3 weeks ago</div>
                    </div>
                </div>
                <div class="num">
                    <span>651,324 Views</span>
                    <span>36,6545 Likes</span>
                    <span>56 comments</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                items:[1,2,3]
            }
        },
    }
</script>
<style lang="css" scoped>
    .down {
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    .person {
        display: flex;
        align-items: center;

    }

    .articleitem {
        width: 100%;
        display: flex;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        padding-left: 21.48459243774414px;
        padding-top: 21.48459243774414px;
        border-radius: 17.187673568725586px;
    }

    .top {
        display: flex;
        margin-top: 5px;
        width: 100%;
        justify-content: space-between;

    }

    .data {
        width: 100%;

    }

    .word {
        font-family: 'Source Sans Pro';
        font-size: 18px;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: 0em;
    }

    .icon {
        margin-top: -3px;
    }

    .tags {
        width: 100%;
    }

    .time {
        font-family: 'Source Sans Pro';
        font-size: 8px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: #97989D;
        margin-left: 8px;
    }

    .num span {
        font-family: 'Source Sans Pro';
        font-size: 11px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: #97989D;
        margin-left: 8px;

    }

    .num{
        padding-right: 10px;
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
    }
</style>