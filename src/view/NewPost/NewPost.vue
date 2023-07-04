<template lang="">
    <div class="container">
        <div class="main-content">
            <div class="page-title">建立文章</div>
            <select name="articleType" id="articleType" class="article-select">
                <option value="defualt">請選擇文章板塊</option>
            </select>
            <input type="text" class="input-box" placeholder="請輸入文章標題">
            <div class="edit-toolbox">
                <span class="material-icons">translate</span>
                <span class="material-icons">image</span>
                <span class="material-icons">create</span>
                <span class="material-icons-round">delete</span>
            </div>
            <textarea class="textarea" placeholder="請輸入文章內容....."></textarea>
            <div class="word-count">0/10000</div>
            <div class="subtitle">選擇文章標籤(最多 5 個)</div>
            <div class="tags">
                <span class="tag">#美食</span>
                <span class="tag">#生活</span>
                <span class="tag">#創作</span>
                <span class="tag">#小說</span>
                <span class="tag">#插畫</span>
                <span class="tag">#心情</span>
                <span class="tag">#區塊鏈</span>
                <span class="tag">#投資</span>
                <span class="tag">#生活娛樂</span>
                <span class="tag">#感情</span>
            </div>
            <label for="custom-tag" class="input-label">自訂標籤(最多10個)</label>
            <input type="text" class="input-box" name="custom-tag">
            <div class="c-tag-group">
                <span class="c-tag">#美食</span>
                <span class="c-tag">#生活</span>
                <span class="c-tag">#創作</span>
            </div>
            <div class="checkbox-block">
                <div class="checkbox-title">選擇文章種類</div>
                <input type="checkbox" name="default" class="checkbox">
                <label for="default" class="checkbox">一般文章</label>
                <input type="checkbox" name="default" class="checkbox">
                <label for="default" class="checkbox">訂閱專屬文章</label>
            </div>
            <div class="submit-btn">
                <button class="submit flex-between">
                    <span class="material-icons">add</span>
                    <span>新增文章</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from "axios";
// export default {
//     created() {
//     // const storeduserId = localStorage.getItem('userId');
//     //jwt請求頭
//     const token = localStorage.getItem("jwt");
//     axios
//       .post(
//         "/DyThreads",
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((response) => {
//         console.log(response.data);
//         this.userName = response.data.userName;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     }
// }
</script>
<style lang="css" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: start;
}

.main-content {
    width: 75%;
    padding: 40px 30px 50px;
    background-color: #FFF;
    box-shadow: 0px 4.006070137023926px 4.006070137023926px 0px #00000040;
}

.flex-between {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.page-title {
    font-family: 'Inter';
    font-size: 44px;
    font-weight: 400;
    line-height: 66px;
    text-align: center;
    margin-bottom: 60px;
}

.article-select {
    color: #828282;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('../../assets/img/newpost/select_Icon.svg');
    background-repeat: no-repeat;
    background-position: right 15px center;

    width: 100%;
    height: 40px;
    border: 1px solid var(--black);
    border-radius: 7.33px;
    padding: 0 15px;
    margin-bottom: 12px;
}

.input-box {
    width: calc(100% - 32px);
    /* max-width: 1068.75px; */
    height: 40px;
    border: 1px solid var(--black);
    border-radius: 7.33px;
    padding: 0 15px;
}

.edit-toolbox {
    margin-top: 40px;
    margin-bottom: 8px;
}

.edit-toolbox span {
    margin-left: 12px;
}

.textarea {
    width: calc(100% - 32px);
    padding: 15px;
    border: 2px solid var(--black);
    border-radius: 7.33px;
    height: 396px;
    margin-bottom: 52px;
}

.word-count {
    font-family: 'Inter';
    font-size: 22px;
    font-weight: 300;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: center;
}

.subtitle {
    font-family: 'Inter';
    font-size: 22px;
    font-weight: 300;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: start;
}

.tags {
    font-family: Inter;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: start;
    margin: 8px auto 20px;
}

.tags .tag {
    margin-right: 16px;
}

.input-label {
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
}

.c-tag-group {
    margin-top: 12px;
    margin-bottom: 50px;
}

.c-tag {
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: #828282;
    border: 1px solid #000;
    border-radius: 7.33px;
    padding: 3px 6px;
    margin-right: 8px;
}

.checkbox-block {
    margin-bottom: 50px;
}

.checkbox-title {
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;
}

.checkbox {
    margin-right: 12px;
}

.submit-btn {
    display: flex;
    justify-content: end;
    align-items: center;
}

.submit {
    border: none;
    border-radius: 9.594444274902344px;
    padding: 13px 26px;
    background-color: #800080;
    color: #FFF;
    cursor: pointer;
}

.submit .material-icons {
    margin-right: 8px;
}
</style>