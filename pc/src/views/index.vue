<template>
    <div>
        <header>
            <div class="w1200">
                <div class="logo">
                    <img src="../assets/img/20771839_1609920594.png" class="bg">
                </div>
                <ul class="nav">
                    <li class="present">
                        <router-link class="li" to="/index/home">首页</router-link>
                    </li>
                    <li>
                        <router-link class="li" to="/aboutus">关于我们</router-link>
                    </li>
                    <li>
                        <router-link class="li" to="">模特展示</router-link>
                    </li>
                    <li>
                        <router-link class="li" to="">环境展示</router-link>
                    </li>
                    <li>
                        <router-link class="li" to="">夜场新闻</router-link>
                    </li>
                    <li>
                        <router-link class="li" to="/aboutus">联系我们</router-link>
                    </li>
                    <li>
                        <router-link class="li" to="">招聘要求</router-link>
                    </li>
                </ul>
                <div class="lxwm">
                    <img src="../assets/img/7877635_1538278040.png" alt="">
                    13688143752
                </div>
            </div>
        </header>
        <div class="content">
            <router-view />
            <div class="immobilization" @mouseover="setflag"  :class="flag ? 'dn' : ''"></div>
            <div class="nav" :class="flag ? '' : 'dn'">
                <ul>
                    <li @click="getonline">
                        <img src="../assets/img/online_tel.png" alt="">
                        <p>电话直呼</p>
                        <div :class="delflag ? 'online_tel' : 'dn' ">
                            联系我们：<br>
                            13688143752
                            <span class="online_tel-bg"></span>
                <span class="online_tel-btn" v-on:click.stop.prevent="delonline"></span>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/img/online_message.png" alt="">
                        <p>在线留言</p>
                    </li>
                    <li>
                        <a href="mailto:260208989@qq.com">
                            <img src="../assets/img/online_email.png" alt="">
                            <p>发送邮件</p>
                        </a>
                    </li>
                </ul>
                <span @click="getflag"></span>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import Footer from './Footer'
export default {
    data () {
        return {
            flag: false,
            delflag: false
        }
    },
    methods: {
        getflag () {
            this.flag = false
        },
        setflag () {
            this.flag = true
        },
        getonline () {
            this.delflag = true
        },
        delonline () {
            this.delflag = false
        }
    },
    components: {
        myFooter: Footer
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>
