<template>
    <div>
        <header>
            <div class="w1200">
                <div class="logo" >
                    <img src="../assets/img/20771839_1609920594.png" class="bg">
                </div>
                <ul class="nav">
                    <li v-for="(val, index) in data" :key="index" :class="val.flag ? 'present' : '' " @click="presentclcikc(index)">
                        <router-link class="li" :to="val.path">{{val.name}}</router-link>
                    </li>
                </ul>
                <div class="lxwm">
                    <img src="../assets/img/7877635_1538278040.png" alt="">
                    13688143752
                </div>
            </div>
        </header>
        <div class="content" ref="content">
            <!-- keep-alive -->
            <!-- exclude排除缓存组件的名称 -->
            <!-- include包含指定名称的组件进行缓存 -->
            <keep-alive>
                <router-view />
            </keep-alive>
            <div class="immobilization"></div>
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
                    <li @click="getonline1">
                        <img src="../assets/img/online_message.png" alt="">
                        <p>在线留言</p>
                        <div :class="delflag1 ? 'online_tel1' : 'dn' ">
                            <dl>
                         <dt><textarea data-mul="2" data-length="250" name="content2" id="content2"></textarea></dt>
                        <dd class="text_length">还可输入字符<b>250</b>（限制字符250）</dd>
                        <dd><label>您的姓名：</label><input type="text" class="text_input" name="name" id="name" maxlength="20"></dd>
                        <dd><label>您的邮箱：</label><input type="text" class="text_input" name="e_mail" id="e_mail" maxlength="50"></dd>
                        <dd><label>您的电话：</label><input type="text" class="text_input" name="tel" id="tel" maxlength="30"><input type="button" class="submitBut" value="提交" onclick="sub_check(1913406)"></dd>
                      </dl>
                            <span class="online_tel-bg"></span>
                            <span class="online_tel-btn" v-on:click.stop.prevent="delonline1"></span>
                        </div>
                    </li>
                    <li>
                        <a href="mailto:260208989@qq.com">
                            <img src="../assets/img/online_email.png" alt="">
                            <p>发送邮件</p>
                        </a>
                    </li>
                </ul>
                <span @click.prevent="getflag" class="guanbi"></span>
            </div>
            <div class="returntop">
                <img src="../assets/img/back_top_Z.png" alt="">
            </div>
        </div>
        <div class="foot">
            <my-footer></my-footer>
        </div>
    </div>
</template>

<script>
import Footer from './Footer'
import '../assets/js/index.js'
export default {
    data () {
        return {
            data: [
                {
                    name: '首页',
                    path: '/home',
                    flag: true
                },
                {
                    name: '关于我们',
                    path: '/aboutus',
                    flag: false
                },
                {
                    name: '模特展示',
                    path: '/modelshows',
                    flag: false
                },
                {
                    name: '环境展示',
                    path: '/environment',
                    flag: false
                },
                {
                    name: '夜场新闻',
                    path: '/news',
                    flag: false
                },
                {
                    name: '联系我们',
                    path: '/aboutus',
                    flag: false
                },
                {
                    name: '招聘要求',
                    path: '/aboutus',
                    flag: false
                }
            ],
            flag: false,
            delflag: false,
            delflag1: false,
            animflag: false
        }
    },
    methods: {
        presentclcikc (index) {
            this.data.find(val => (val.flag = false))
            this.data[index].flag = true
            // console.log(this.data)
        },
        getflag () {
            this.flag = false
        },
        setflag () {
            this.flag = true
            this.delflag = false
        },
        getonline () {
            this.delflag = true
        },
        delonline () {
            this.delflag = false
        },
        getonline1 () {
            this.delflag1 = true
        },
         delonline1 () {
            this.delflag1 = false
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
