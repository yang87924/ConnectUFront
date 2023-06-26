<template>
  <v-app>
     <!-- 顶部应用栏 -->
    <v-app-bar color="dark" dark>
      <v-toolbar-title> ConnectU </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- 登录按钮，点击跳转到 "/login" 路由 -->
      <v-btn text to="/login"> Login </v-btn>
      <!-- 注册按钮，点击跳转到 "/register" 路由 -->
      <v-btn text to="/register"> Register </v-btn>
    </v-app-bar>
    <v-main>
      <!-- 路由视图，根据路由配置动态渲染组件 -->
      <router-view />
    </v-main>
    <v-footer color="secondary">
      <!-- 在页脚中添加图片或其他内容 -->
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");
body,
html {
  font-family: "Roboto", sans-serif;
}
</style>
