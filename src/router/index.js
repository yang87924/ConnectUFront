import {createRouter, createWebHistory} from 'vue-router';
import Test from '../view/TestPage.vue';
import IndexView from '../view/IndexView/IndexView.vue'
import HomePage from '../view/HomePage/HomePage.vue'
import NewPost from '../view/NewPost/NewPost.vue'
import PostList from '../view/PostList/PostList.vue'
import ProfilePage from '../view/ProfilePage/ProfilePage.vue'
import ArticlePage from '../view/ArticlePage/ArticlePage.vue'
import UserLogin from '../components/UserLogin.vue'
import UserRegister from '../components/UserRegister.vue'
import Chatroom from "../view/Chatroom/Chatroom.vue";

const routes = [
    {
        // 測試頁
        path: '/test',
        name: 'Test',
        component: Test,
    },
    {
        // 登入頁
        path: '/UserLogin',
        name: 'UserLogin',
        component: UserLogin,
    },
    {
        // 聊天室
        path: '/Chatroom',
        name: 'Chatroom',
        component: Chatroom,
    },
    {
        // 注冊頁
        path: '/UserRegister',
        name: 'UserRegister',
        component: UserRegister,
    },
    {
        path: '/',
        redirect: '/index',
        name: 'IndexView',
        component: IndexView,
        children: [
            {
                // 首頁
                path: 'index',
                name: 'HomePage',
                component: HomePage,
                meta: {
                    showHeader: true,
                }
            },
            {
                // 發文頁面
                path: 'newpost',
                name: 'NewPost',
                component: NewPost,
                meta: {
                    showHeader: true,
                }
            },
            {
                // 動態頁面
                path: 'postlist',
                name: 'PostList',
                component: PostList,
                meta: {
                    showHeader: true,
                }
            },
            {
                // 個人檔案頁
                path: 'profile',
                name: 'ProfilePage',
                component: ProfilePage,
                meta: {
                    showHeader: true,
                }
            },
            {
                // 文章內頁
                path: 'article',
                name: 'ArticlePage',
                component: ArticlePage,
                meta: {
                    showHeader: true,
                }
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
