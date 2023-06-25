import { createRouter, createWebHistory } from 'vue-router';
import Test from '../view/TestPage.vue';
import IndexView from '../view/IndexView/IndexView.vue'
import HomePage from '../view/HomePage/HomePage.vue'
import NewPost from '../view/NewPost/NewPost.vue'
import PostList from '../view/PostList/PostList.vue'
import ProfilePage from '../view/ProfilePage/ProfilePage.vue'
import ArticlePage from '../view/ArticlePage/ArticlePage.vue'

const routes = [
  {
    // 測試頁
    path: '/test',
    name: 'Test',
    component: Test,
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
              showHeader: false,
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
