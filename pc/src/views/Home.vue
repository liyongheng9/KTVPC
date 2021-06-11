<template>
    <div class="home">
        <img src="../assets/img/banner-1.jpg" class="homebg">
        <!-- 轮播图 -->
        <div class="homebox homebox1">
            <img :src="srcurl(advertising.image)" class="bg">
            <div class="w1200">
                <div class="news">
                    <h3 class="markdown-body">
                        <VueMarkdown :source="value"></VueMarkdown>
                    </h3>
                </div>
                <div class="app">
                    <img :src="srcurl(value1.image)" alt="">
                </div>
                <span>{{value1.phone}}</span>
            </div>
        </div>
        <!-- 环境 -->
        <div class="ambient">
            <div class="w1200 ambientbox">
                <h3>ENVIRONMENTAL DISPLAY</h3>
                <p class="border-b">环境/AMBIENT</p>
                <div class="markdown-body">
                    <ul>
                        <li v-for="val in list" :key="val.id" @click.prevent="getambient(val.id)">
                            <a href="#">
                                <img :src="srcurl(val.image)" alt="">
                            </a>
                            <div class="libox">
                                <h3>{{val.title}}</h3>
                                <p>联系人：{{val.contacts}}</p>
                                <p>手 机：{{val.phone}}（微信同号）</p>
                                <p>地 址：{{val.address}}</p>
                                <span class="ambient-l fl">
                                    <img src="../assets/img/7936683_1538965745.png" alt="">
                                    夜场模特
                                </span>
                                <span class="ambient-r fr">
                                    <img src="../assets/img/7936704_1538965778.png" alt="">
                                    ：{{val.frequency}}人
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <button @click.prevent="getEnvironment">查看更多</button>
            </div>
        </div>
        <!-- 关于 -->
        <div class="abouy">
            <div class="w1200 abouybox">
                <h3>关于/ABOUT</h3>
                <h2>锦缘国际夜总会</h2>
                <p>成都夜总会，成都夜场，成都酒吧各种模特佳丽【13688143752】，设备齐全，装修高端，资源丰富，生意每天开到爆，欢迎随时预定包厢</p>
                <button @click.prevent="aboutus">了解详细</button>
            </div>
        </div>
        <!-- 高端KTV夜总会模特 -->
        <div class="model">
            <h2 class="border-b">高端KTV夜总会模特</h2>
            <div class="w1200 modelbox">
                <ul>
                    <li v-for="val in  model" :key="val.id" @click.prevent="getmodeldetailed(val.id)">
                        <a href="#">
                            <div>
                                <img :src="srcurl(val.image)" alt="">
                            </div>
                            <p>{{val.title}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 新闻咨询 -->
        <div class="teacher">
            <div class="w1200">
                <h3>新闻咨询</h3>
                <p class="border-b">T&nbsp; E&nbsp; A&nbsp; C&nbsp; H&nbsp; E&nbsp; R</p>
                <div class="clearfix">
                    <div class="img-l fl">
                        <img src="../assets/img/image-110.jpeg" alt="">
                    </div>
                    <ul class="fr">
                        <li v-for="val in news" :key="val.id" @click.prevent="getnews(val.id)">
                            <span>
                                <img :src="srcurl(val.image)" alt="">
                            </span>
                            <div class="news">
                                <h3>{{val.title}}</h3>
                                <p>{{val.content}}</p>
                            </div>
                            <span class="time">{{val.time}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
    components: {
        VueMarkdown // 注入组件
    },
    data () {
        return {
            advertising: {},
            list: [],
            model: [],
            value: '',
            value1: '',
            news: []
        }
    },
    methods: {
        getambient (id) {
            this.$router.push('/envdetails/' + id)
        },
        getmodeldetailed (id) {
            this.$router.push('/modeldetailed/' + id)
        },
        getEnvironment () {
            this.$router.push('/environment')
        },
        getnews (id) {
            this.$router.push('/newsdetail/' + id)
        },
        aboutus () {
            this.$router.push('/aboutus')
        },
        srcurl (url) {
            return this.http + url
        },
        getadvertising () {
             this.$http.get('/api/carousel_map/list').then(res => {
                this.advertising = res[0]
                this.value = res[0].content
                // console.log(res)
            })
        },
        getfoot () {
             this.$http.get('/api/footer/get').then(res => {
                // this.advertising = res[0]
                this.value1 = res
            })
        },
        getlist () {
            this.$http.get('api/ambient/list').then(res => {
                this.list = res.filter((val, index) => {
                    if (index < 3) {
                        return res[index]
                    }
                })
                // console.log(res)
                // console.log(this.list)
                // console.log(this.http + res[0].image)
            })
        },
        getmodel () {
            this.$http.get('/api/models/list').then(res => {
                // this.list = res[0]
                // console.log(res)
                var arr = res
                this.model = arr.filter((val, index) => {
                    if (index <= 5) {
                        return arr[index]
                    }
                })
                // console.log(this.model)
            })
        },
        getteacher () {
            this.$http.get('/api/journalism/list').then(res => {
                this.news = res
                // console.log(res)
            })
        }
    },
    mounted () {
        /* 广告 */
        this.getadvertising()
        /* 环境 */
        this.getlist()
        /* 模特 */
        this.getmodel()
        /* 新闻 */
        this.getteacher()
        this.getfoot()
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>
