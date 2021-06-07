<template>
    <div>
        <header>
            <div class="w1200">
                <div class="logo">
                    <img src="../assets/img/20771839_1609920594.png" class="bg">
                </div>
                <ul class="nav">
                    <li>
                        <router-link to="/index/home">首页</router-link>
                    </li>
                    <li>
                        <router-link to="/aboutus">关于我们</router-link>
                    </li>
                    <li>
                        <router-link to="">模特展示</router-link>
                    </li>
                    <li>
                        <router-link to="">环境展示</router-link>
                    </li>
                    <li>
                        <router-link to="">夜场新闻</router-link>
                    </li>
                    <li>
                        <router-link to="">联系我们</router-link>
                    </li>
                    <li>
                        <router-link to="">招聘要求</router-link>
                    </li>
                </ul>
                <div>
                    <img src="../assets/img/7877635_1538278040.png" alt="">
                    13688143752
                </div>
            </div>
        </header>
        <div class="content">
            <router-view />
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import Footer from './Footer'
export default {
    components: {
        myFooter: Footer
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>
