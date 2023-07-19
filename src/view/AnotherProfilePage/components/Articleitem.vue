<template >
    <div v-for="(item, index) in items" :key="index" class="articleitem">

<div class="newsimg">
    <img :src="item.pictureArray[0]" alt="" class="newspic">
    


</div>
<div class="data">
    <div class="person">
        <img :src="item.user.avatar" alt="" class="avatar">
        <div class="name-area">
            <button style="width:300px ;margin-left:200px" @click="deleteItem(threadId)">刪除</button>
            <div class="name" style="padding-left: 20px;">{{ item.user.userName }}</div>
            <div class="time" style="padding-left: 10px">{{ item.createdAt }}</div>
            <div class="top">
        <router-link :to="{ name: 'ArticlePage', params: { threadId: item.threadId } }">

            <div class="word"  >{{ truncateTitle (item.title, 10)   }}</div>
            
        </router-link>
        <div class="icon"><img src="../../../assets/img/HomePage/ArticleItem/Love.svg" alt=""></div>
    </div>

           
        </div>

    </div>

    <router-link :to="{ name: 'ArticlePage', params: { threadId: item.threadId } }">
    <div class="content">{{ truncateText(item.content, 20)   }}</div>
</router-link>
    <div class="tagsarea">
        <span class="tags" v-for="tag in item.hashtags" :key="tag">{{ tag.name }}</span>
    </div>   
    <div>




    </div>

    <div class="down">

        <div>
            <div class="num">
                <!-- <img src="../../../assets/img/HomePage/ArticleItem/like1.svg" alt="按讚圖片" class="licon1"/> -->
                <i class="fas fa-heart" style="margin-bottom: 0px;"></i>
                <span class="text1" style="font-weight: bold; font-size: 20px;color: blueviolet;">{{ item.love
                }}</span>
                <!-- <img src="../../../assets/img/HomePage/ArticleItem/mess.svg" alt="留言" class="licon2"/> -->
                <i class="far fa-comments"></i>
                <span class="text2" style="font-weight: bold; font-size: 20px;color: blueviolet;">{{
                    item.replyCount }}</span>
                <!-- <span>收藏{{ item.loveStatus }}</span> -->

            </div>
        </div>
    </div>
</div>

</div>
<div v-if="isLoading" class="loading">
<div class="loader"></div>
</div>
</template>
<script>
import axios from 'axios';
export default {
data() {
return {

    showSuccessMessage: false,
    isModalOpen: false,
    categories: [], // 存儲類別資料的陣列
    items: [], // 存放文章的列表
    newArticleTitle: '', // 新文章的標題
    newArticleContent: '', // 新文章的內容
    pageNum: 1, // 目前頁數
    isLoading: true, // 是否正在載入中
    avatar: "",
    userName: "", // 使用者名稱
    articleContent: '',
    fontSize: 16,
    insertedImages: [],
    tags: [],
    selectedTags: [],
    customTag: '',
    //Comment/Uncomment
    selectedImages: [],


    newArticleTitle: "",
    categoryId: '',
    files: [],
    newArticleContent: "",
    threadHashtags: []



};
},





mounted() {
// 在組件載入後，執行非同步行為獲取資料並匯入到items陣列中
this.fetchData();
this.addScrollListener();
this.created()
},

created() {
this.fetchCategories();
this.fetchTags();

},

//     computed: {


//    truncateText(text, maxLength) {
//     if (text.length <= maxLength) {
//       return text;
//     } else {
//       return text.slice(0, maxLength) + '...';
//     }
//   }
//     },

methods: {

truncateText(text, maxLength) {
if (text.length <= maxLength) {
return text;
} else {
return text.slice(0, maxLength) + '...';
}
},

truncateTitle(text, maxLength){
if (text.length <= maxLength) {
return text;
} else {
return text.slice(0, maxLength) + '...';
}


},


truncateText(text, maxLength) {
if (text.length <= maxLength) {
return text;
} else {
return text.slice(0, maxLength) + '...';
}
},

truncateTitle(text, maxLength){
if (text.length <= maxLength) {
return text;
} else {
return text.slice(0, maxLength) + '...';
}


},








deleteItem() {
    // 执行删除 API 的逻辑
    axios.delete('/threads/deleteByThreadId/${threadId}')
        .then(response => {
            // 删除成功的处理逻辑
        })
        .catch(error => {
            // 处理删除失败的情况
            console.error('删除失败', error);
        });
},



handleFileChange(event) {
    //Switch Comments
    this.selectedImages.push(event.target.files[0]);
    // this.selectedImages = event.target.files;

},


submitForm() {


    const formData = new FormData();
    formData.append('title', this.newArticleTitle);
    formData.append('content', this.newArticleContent);
    formData.append('categoryId', this.categoryId);

    // console.log(this.selectedImages.length)
    //Uncomment/Comment
    for (var i = 0; i < this.selectedImages.length; i++) {
        var file = this.selectedImages[i];
        formData.append('file'+i, file);
        // console.log()
    };
    

    //Comment/ Uncomment
    // var file = this.selectedImages;
    // formData.append('files', file);



    for (var i = 0; i < this.selectedTags.length; i++) {
        var tag = this.selectedTags[i]
        formData.append('threadHashtags', tag.name);
    }

    var entries = formData.entries();

    // 迭代並輸出每個鍵值對
    for (var pair of entries) {
    }

    axios.post('/threads', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response => {


            this.closeModal();
            
            this.showSuccessMessage = true;
            setTimeout(() => {
                this.showSuccessMessage = false;
                location.reload(); // 刷新页面
            }, 2000)

            // this.closeModal();
            // location.reload();
            // this.showSuccessMessage = true;
            // setTimeout(() => {

            // this.showSuccessMessage = flase;

            //     }, 5000);為什麼這個不行？？
            //9huhij

        })




        // 確認狀態碼
        //     if (response.status === 200) {

        //         this.closeModal();
        //         location.reload();
        //         this.showSuccessMessage = true;

        //         setTimeout(() => {

        //             this.showSuccessMessage = flase;

        //         }, 2000);


        //     } else {
        //         console.log("fail")
        //     }
        // })


        .catch(error => {
            // 處理錯誤
        });





},







toggleTagSelection(tag) {
    if (this.selectedTags.includes(tag)) {
        // 如果已選擇，則刪除該標籤
        this.selectedTags = this.selectedTags.filter((selectedTag) => selectedTag !== tag);
    } else {
        // 如果未選擇且未達到最大數量，則添加該標籤
        if (this.selectedTags.length < 5) {
            this.selectedTags.push(tag);
        }
    }
},

fetchTags() {
    // 使用 API 請求從資料庫獲取標籤資料
    // 請修改以下代碼以符合你的 API 要求
    axios
        .get('threads/AllHashtag')
        .then(response => {
            this.tags = response.data.data;
        })
        .catch(error => {
            console.error(error);
        });
},




insertImage() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        this.insertedImages.push(imageUrl);
        this.articleContent += `<div><img src="${imageUrl}" alt="插入的圖片"></div>`;
        this.$refs.articleTextarea.focus();
    };
    input.click();
},







// uploadPhotos() {


//     axios.post('/threads', formData)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(error => {
//             console.error(error);
//         });
// },

increaseFontSize() {
    this.fontSize += 2; // 每次增加 2px
},
decreaseFontSize() {
    this.fontSize -= 2; // 每次減小 2px
},



fetchCategories() {
    // 使用axios或Vue Resource等套件發送資料庫查詢請求
    // 在成功獲取資料後，將資料設定給categories陣列
    axios.get('/category/withCateGoryThreadCount')
        .then(response => {
            this.categories = response.data.data;
        })
        .catch(error => {
            console.error(error);
        });
},


showModal() {
    this.isModalOpen = true;
    this.abc.title = ''; // 清空文章標題
    this.articleContent = ''; // 清空文章內容
    this.fontSize = 16; // 重置字體大小
},
closeModal() {

    this.isModalOpen = false;

},


fetchData() {
    // 發送 HTTP GET 請求到後端 API 獲取資料
    axios.get(`/threads/userThread/${this.$route.params.id}`, {
                    params: {
                        pageNum: this.pageNum,
                    },
        })
        .then(response => {
            // 請求成功，將資料設置給items陣列
            this.items = this.items.concat(response.data.data);
            this.isLoading = false; // 停止載入狀態

        })
        .catch(error => {
            // 請求失敗，處理錯誤
            console.error(error);
            this.isLoading = false; // 停止載入狀態
        });
},
addData() {
    this.pageNum++; // 增加頁數
    this.isLoading = true; // 開始載入狀態
    this.fetchData();
},
addScrollListener() {
    window.addEventListener('scroll', () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        const offset = 5; // 設置一個偏移值
        if (scrollTop + clientHeight + offset >= scrollHeight) {
            this.addData();
        }
    });
},

created() {

    // axios.post('/users/getUserId/0')
    //   .then(response => {
    //     console.log(response.data);
    //     this.userName = response.data.userName;
    //     this.avatar=response.data.avatar;

    //   //先放置 圖片
    //   //   this.avatar = response.data.avatar;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     // 處理錯誤
    //   });


},


},
};
</script>
<style lang="css" scoped>
@keyframes spin {
0% {
transform: rotate(0deg);
}

100% {
transform: rotate(360deg);
}
}

.loader {
border: 16px solid #f3f3f3;
/* Light grey */
border-top: 16px solid #3498db;
/* Blue */
border-radius: 50%;
width: 120px;
height: 120px;
animation: spin 2s linear infinite;
}

.loading {
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
/* or any other value that suits your needs */
}

.content {
font-family: 'Source Sans Pro';
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: #333;
margin-top: 20px;
margin-left: 50px;
font-family: "Microsoft JhengHei", Arial, sans-serif;
}

.down {
margin-top: 20px;
display: flex;
align-items: right;
justify-content: space-between;


}

.person {
height: 100px;
width: 200px;
display: flex;
align-items: center;


}

.avatar {
height: 50px;
width: 50px;
clip-path: circle(50% at center);

}

.articleitem {
width: 100%;
display: flex;
box-shadow: 4px 4px rgba(0, 0, 0, 0.25);
padding-left: 20px;

/* padding-top: 21.48459243774414px; */
border-radius: 17.187673568725586px;
margin-bottom: 20px;
}




.top {
display: flex;
margin-top: 5px;
width: 100%;
justify-content: space-between;

}

.data {
width: 60%;
margin-left: 30px;

}

.word {
font-family: 'Source Sans Pro';
font-size: 20px;
color:orange;
font-weight: 600;
line-height: 26px;
letter-spacing: 0em;
margin-top: 20px;
padding-left: 0px;
text-decoration: none; 

}

.icon {
margin-top: -3px;
}

.tags {
width:50px ;
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 50px;
margin-top: 10px;
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

.num {
padding-left: 30px;
padding-bottom: 25px;
}


/* .tags span {
width: 200px;
height: 24.59px;
padding: 4.2969183921813965px 10.74229621887207px 4.2969183921813965px 10.74229621887207px;
border-radius: 21.48459243774414px;
background-color: #F4F6F8;
font-family: Source Sans Pro;
font-size: 1px;
font-weight: 600;
line-height: 15px;
letter-spacing: 0em;
text-align: left;
color: #858EAD;
margin-right: 10px;
} */

.newsimg {

height: 150px;
width: 150px;

box-shadow: 5px 5px rgba(0, 0, 0, 0.25);
border-radius: 10%;
margin: 10px 0px 10px 0px;



}

.newspic {
width: 100%;
height: 100%;
object-fit: fill;
border-radius: 10%;
}

.create-post {
padding: 24px;
margin-bottom: 100px;
}

.memoji-box {
height: 43px;
width: 43px;
border-radius: 50%;
background-color: #F9DFC0;
margin-right: 20px;
}

.flex-between {
display: flex;
justify-content: space-between;
align-items: center;
}

.flex-center {
display: flex;
justify-content: center;
align-items: center;
}

.create-post .post-input {
border: none;
border-radius: 6.44px;
background-color: #F4F6F8;
padding: 13px;
width: 100%;
}

.create-post .submit {
padding: 12px 17px;
margin-left: 20px;
border: none;
border-radius: 6.44px;
background-color: var(--button-default);
font-family: 'Rubik';
font-size: 15px;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: center;
color: #FFF;
}

.fa-comments {

padding-left: 50px;
font-size: 25px;
}

.fa-heart {

font-size: 25px;

}

.licon2 {

width: 30px;
height: 30px;
margin-right: 30px;


}

.text1 {
margin-left: 10px;
text-align: center;
padding-right: 100px;
padding-bottom: 70px;
}

.text2 {
margin-left: 100px;
text-align: center;

padding-bottom: 70px;
}

.modal {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(201, 192, 211, 0.5);
display: flex;
align-items: center;
justify-content: center;
z-index: 9999;
/* 設置較高的 z-index 值 */
}

/* .modal-content {
background-color: rgb(187, 22, 22);
padding: 40px;
border-radius: 50px;
width: 500px;
max-height: 300px; /* 使用 max-height 屬性 */
/* font-size: 16px;
overflow: auto; /* 加上卷軸 */



.container {
position: relative;
display: flex;
justify-content: center;
align-items: start;
height: 600px;
/* 設置元素高度 */
width: 1050px;
overflow-y: auto;
/* 顯示垂直卷軸 */
}

.main-content {
width: 100%;
height: 100;
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
/* border-radius: 10px;
background-color: #ffffff;
font-family: Source Sans Pro;
font-size: 15px;
font-weight: 600;
line-height: 15px;
/* letter-spacing: 0em; */
/* text-align: left; */
/* color: #858EAD; */
/* margin-right: 10px; */
/* width:100% */ 
width: 60px;
height: 24.59px;
/* padding: 4.2969183921813965px 10.74229621887207px 4.2969183921813965px 10.74229621887207px; */
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
cursor: pointer;


}

.tagsarea{

display: flex;

width:100%

}
/* .tags .tag {
margin-right: 16px;
} */

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

.close-button {
position: absolute;
top: 0;
right: 0;
padding: 10px;
border-radius: 0%;
background-color: #800080;
color: white;
cursor: pointer;
border: 5px solid #ca774b;
}

.material-icons small {

width: 10px;
height: 10px
}

.success-message {
height: 100px;
position: fixed;
color: #F4F6F8;
top: 50%;
left: 50%;
transform: translateX(-50%);
padding: 10px 20px;
background: linear-gradient(45deg, #d28537, #e6e6e6, #880eda);
background-size: 400% 400%;
font-weight: bold;
border-radius: 5px;
z-index: 9999;

animation: shimmer 2s infinite;
}

@keyframes shimmer {
0% {
background-position: 0% 50%;
}

100% {
background-position: 100% 50%;
}
}
.button.material-icons {
display: none;
}




</style>