<template lang="">
    <div class="wrap">
        <Header v-if="$route.meta.showHeader" />
        <div class="content">
            <router-view :class="{ 'router-view': $route.meta.showHeader }"></router-view>
        </div>
        <Footer />
    </div>
</template>
<script>
    import Header from '../../components/Header.vue';
    import Footer from '../../components/Footer.vue';

    export default {
        name: 'IndexView',
        components: {
            Header,
            Footer
        }
    }
</script>
<style lang="css" scoped>
    .wrap {
        background-color: var(--background-main);
    }

    .content {
        width: 95%;
        margin: 0 auto;
    }

    .router-view {
        padding-top: 84px;
    }
</style>