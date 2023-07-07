<template>
    <div class="author-rank">
        <div class="title">作者排行榜</div>
        <div class="meetsup flex-start" v-for="(user, index) in users" :key="index">
            <div class="number-box">
                <div class="no">NO.</div>
                <div class="number">{{ index + 1 }}</div>
            </div>
            <div class="rank-content">
                <div class="name">{{ user.userName }}</div>
                <div class="comment flex-start">
                    <img :src="user.avatar" alt="" class="avatar">
                    <span class="txt">熱門指數: {{ user.hotScore }}</span>
                </div>
                <div class="tags">
    <span v-for="(tag, tagIndex) in user.tags" :key="tagIndex">{{ tag }}</span>
</div>

            </div>
        </div>
    </div>
</template>

<script>
import { reactive, onMounted } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const users = reactive([]);
        const tags = ['美食', '好康優惠', '食神大戰', '旅游', '科技', '文化', '健康','遊戲','星座']; // 添加你需要的标签

        onMounted(async () => {
            try {
                const response = await axios.get('/users/hotUsers');
                const topThreeUsers = response.data.data.slice(0, 3); 
                topThreeUsers.forEach(user => {
                    user.tags = []; // 创建tags属性
                    for(let i = 0; i < 3; i++) { // 这里我们添加3个标签，你可以根据需要更改
                        const tagIndex = Math.floor(Math.random() * tags.length);
                        user.tags.push(tags[tagIndex]);
                        tags.splice(tagIndex, 1); // 删除已使用的标签，防止重复
                    }
                })
                users.push(...topThreeUsers);
            } catch (error) {
                console.error(error);
            }
        });

        return { users };
    }
}
</script>


<style lang="css" scoped>
.author-rank {
    width: 100%;
    background: #FFFFFF;
    /* mix-blend-mode: luminosity; */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 24.286739349365234px;
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 50px;
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

.avatar {
    width: 40px;
    height: 40px;
}
</style>
