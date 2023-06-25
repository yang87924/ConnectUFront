<template lang="">
    <div class="content flex-between">
        <div class="trending">
            <div class="subtitle">
                Trending in Turkey
            </div>
            <div class="tag">
                Fransa'da 15,5
            </div>
            <div class="count">
                8,130 Tweets
            </div>
        </div>
        <div class="tool">
            <span class="material-icons">keyboard_arrow_down</span>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="css" scoped>
.content {
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    padding: 12px 24px;
}

.trending div:not(:last-child) {
    margin-bottom: 4px;
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

.subtitle {
    font-family: 'SF Pro Text';
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #6E767D;
}

.tag {
    font-family: 'SF Pro Text';
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--black);
}

.count {
    font-family: 'SF Pro Text';
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #6E767D;
}
</style>