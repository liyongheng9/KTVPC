<template>
    <div class="about">
        <div class="custom" data-animated="0">
        </div>
        <div class="about-bot w1200 clearfix">
            <div class="about-left">
                <ul>
                    <li class="about-bg">
                        <router-link to="/aboutus">关于我们
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Contactus">联系我们</router-link>
                    </li>
                    <li>
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