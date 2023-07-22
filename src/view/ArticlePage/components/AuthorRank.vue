<template lang="">
    <div class="author-rank">
        <div class="title">作者排行榜</div>
        <div class="meetsup flex-start">
            <div class="number-box">
                <div class="no">NO.</div>
                <div class="number">1</div>
            </div>
            <div class="rank-content">
                <div class="name">真正有影</div>
                <div class="comment flex-start">
                    <img src="../../../assets/img/article/Rectangle32.svg" alt="">
                    <span class="txt">UIHUT • Sylhet, Bangladesh</span>
                </div>
                <div class="tags">
                    <span>Remote</span>
                    <span>Part-time</span>
                    <span>Worldwide</span>
                </div>
            </div>
        </div>
        <div class="meetsup flex-start">
            <div class="number-box">
                <div class="no">NO.</div>
                <div class="number">2</div>
            </div>
            <div class="rank-content">
                <div class="name">你好世界</div>
                <div class="comment flex-start">
                    <img src="../../../assets/img/article/Rectangle33.svg" alt="">
                    <span class="txt">Dribbble • Austin, Texas, USA</span>
                </div>
                <div class="tags">
                    <span>Remote</span>
                    <span>Part-time</span>
                </div>
            </div>
        </div>
        <div class="meetsup flex-start">
            <div class="number-box">
                <div class="no">NO.</div>
                <div class="number">3</div>
            </div>
            <div class="rank-content">
                <div class="name">契卡契卡</div>
                <div class="comment flex-start">
                    <img src="../../../assets/img/article/Rectangle34.svg" alt="">
                    <span class="txt">Behance • Sab jose, Califonia, USA</span>
                </div>
                <div class="tags">
                    <span>Remote</span>
                    <span>Part-time</span>
                    <span>Worldwide</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="css" scoped>
.author-rank {
    width: 100%;
}

.meetsup {
    margin-bottom: 20px;
    padding: 16px;
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

.flex-start {
    display: flex;
    justify-content: start;
    align-items: center;
}

.number-box {
    width: 46.97px;
    height: 75.79px;
    padding: 4.393611431121826px 10.984027862548828px 4.393611431121826px 10.984027862548828px;
    border-radius: 6.59041690826416px;
    border: 1.1px solid #F4F6F8;
    box-shadow: 0px 6.59041690826416px 6.59041690826416px 2.196805715560913px #4799EB0A;
    margin-right: 16px;
}

.no {
    font-family: 'Source Sans Pro';
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    color: #3F4354;
}

.number {
    font-family: 'Source Sans Pro';
    font-size: 29px;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: center;
    color: #5D95E8;
}

.name {
    font-family: 'Source Sans Pro';
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: #3F4354;
}

.comment {
    margin-bottom: 10px;
}

.comment .txt {
    font-family: 'Source Sans Pro';
    font-size: 11px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #97989D;
    margin-left: 8px;
}

.tags span {
    width: 50.57px;
    height: 20.39px;
    padding: 2.196805715560913px 8.787222862243652px;
    border-radius: 21.968055725097656px;
    background-color: #F4F6F8;
    font-family: Source Sans Pro;
    font-size: 10px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #858EAD;
    margin-right: 10px;
}
</style>