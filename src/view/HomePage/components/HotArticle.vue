<template>
    <div class="hot-article">
        <div class="title">熱門文章</div>
        <div class="podcast flex-between" v-for="(item, index) in hotThreads.slice(0, 3)" :key="index">
            <div class="img-box">
                <img :src="item.picture" alt="" class="avatar">
            </div>
            <div class="content">
                <div class="txt-box flex-between">
                    <div class="txt">{{item.title}}<br> {{item.categoryName}}</div>
                </div>
                <div class="comment">作者： {{item.user.userName}}</div>
            </div>
            <div class="arrow">
                <span class="material-icons-round">arrow_forward</span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const hotThreads = ref([])

        onMounted(async () => {
            try {
                const response = await axios.get('/threads/hotThread');
                hotThreads.value = response.data.data; // Assuming the response has the structure of {data: {data: []}}
            } catch (error) {
                console.error(error);
            }
        });

        return {
            hotThreads
        }
    }
}
</script>

<style lang="css" scoped>
.hot-article {
    width: 100%;
    background: #FFFFFF;
    /* mix-blend-mode: luminosity; */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24.286739349365234px;
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 50px;
    margin-top: 100px;
    
}

.title {
    padding: 16px;
    font-family: 'Source Sans Pro';
    font-size: 18px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 20px;
}

.flex-start {
    display: flex;
    justify-content: start;
    align-items: center;
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

.img-box {
    width: 56.1px;
    height: 56.1px;
    margin-right: 13.5px;
    box-shadow: 0px 2.9015159606933594px 3.8686881065368652px 0px #FA89240F;
}

.txt-box {
    width: 200px;
}

.txt-box .txt {
    font-family: 'Source Sans Pro';
    font-size: 12px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #3F4354;
}

.arrow {
    color: #97989D;
    margin-left: auto;
}

.avatar {
    width: 60px;
    height: 60px;
}
</style>