<template lang="">
    <div class="tweet flex-center">
        <div class="friendimg-box">
            <img src="../../../assets/img/postlist/Medium.svg" alt="friend">
        </div>
        <div class="content">
            <div class="friend-info">
                <span class="name">Devon Lane</span>
                <span class="place">@johndue・23s</span>
            </div>
            <div class="txt">Tom is in a big hurry.</div>
            <div class="img-box"></div>
            <div class="flex-start">
                <div class="fn flex-center">
                    <span class="material-icons">chat_bubble_outline</span>
                    <span class="fn-txt">61</span>
                </div>
                <div class="fn flex-center">
                    <span class="material-icons">autorenew</span>
                    <span class="fn-txt">12</span>
                </div>
                <div class="fn flex-center">
                    <span class="material-icons">star</span>
                    <span class="fn-txt">6.2K</span>
                </div>
                <div class="fn flex-center active">
                    <span class="material-icons">ios_share</span>
                    <span class="fn-txt">61</span>
                </div>
            </div>
            <div class="show">
                Show this thread
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="css" scoped>
.tweet {
    border-top: 1px solid #EBEEF0;
    width: auto;
    background-color: #FFF;
    padding: 8px 16px;

    font-family: 'ABeeZee';
    font-size: 19px;
    font-style: italic;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
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
}

.friendimg-box {
    width: 60.55px;
    height: 60.55px;
    margin-right: 12px;
    margin-bottom: auto;
}

.content {
    width: 100%;
}

.content div {
    margin-bottom: 12px;
}

.friend-info span {
    margin-right: 8px;
}

.place {
    color: #5B7083;
}

.img-box {
    border-radius: 20px;
    background-image: url('../../../assets/img/postlist/tweetImg.png');
    width: 628.94px;
    height: 305.2px;
}

.tweetImg {
    width: 100%;
}

.fn {
    color: #5B7083;
    margin-right: 88px;
}

.fn span:not(:last-child) {
    margin-right: 8px;
}

.active {
    color: #F4245E;
}

.show {
    color: #1DA1F2;
    font-size: 16.063px;
    font-family: 'ABeeZee';
    font-style: italic;
}
</style>