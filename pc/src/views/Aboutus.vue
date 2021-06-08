<template>
    <div class="about">
        <div class="custom" data-animated="0">
        </div>
        <div class="about-bot w1200 clearfix">
            <div class="about-left">
                <ul>
                    <li @click="tabbg(1)" :class="[num === 1 ? 'about-bg' : '']">
                        <router-link to="/aboutus">关于我们
                        </router-link>
                    </li>
                    <li @click="tabbg(2)" :class="[num === 2 ? 'about-bg' : '']">
                        <router-link to="/Contactus">联系我们</router-link>
                    </li>
                    <li @click="tabbg(3)" :class="num === 3 ? 'about-bg' : ''">
                        <router-link to="/Requirement">招聘要求</router-link>
                    </li>
                </ul>
            </div>
            <div class="about-right">
                <router-view />
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import '../assets/less/index.less';
</style>
<script>
export default {
    data () {
        return {
            num: 1
        }
    },
    methods: {
        tabbg (index) {
            this.num = index
        }
    }
}
</script>