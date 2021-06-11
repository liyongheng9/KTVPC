<template>
    <div class="newslist">
        <!-- 轮播图 -->
        <div class="homebox">
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
        <div class="crumbsnav">
            <a href="#" @click="index">首页</a>
            &nbsp;&nbsp; >> &nbsp;&nbsp;
            <a href="#" @click="newsshows">夜场新闻</a>
             <!-- &nbsp;&nbsp; >> &nbsp;&nbsp;
            <a href="#" @click="newsshows">成都夜场</a> -->
        </div>
        <!-- 新闻 -->
        <div class="newsbox clearfix w1200">
            <div class="news-nav">
                <div class="news-shows-top news-shows-topA">夜场新闻</div>
                <a href="#" @click="newsshows(val.id)" v-for="val in type" :key="val.id">{{val.name}}</a>
                <span></span>
            </div>
            <div class="news-shows">
                <div class="news-shows-top">夜场新闻</div>
                <ul>
                    <li v-for="val in news" :key="val.id" @click="newsclick(val.id)">
                        <a href="#">
                            {{val.title}}
                        </a>
                    </li>
                </ul>
                <div class="page">
                    <div class="inner">
                        <span class="disabled page-sum">共有1页</span>
                        <span class="disabled page-start">首页</span>
                        <span class="page-prev">上一页</span>
                        <strong class="page-noitem">1</strong>
                        <span class="page-next">下一页</span>
                        <span class="disabled page-end">尾页</span>
                    </div>
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
            news: [],
            value: '',
            value1: '',
            type: []
        }
    },
    methods: {
        index () {
            this.$router.push('/index')
        },
        newsshows (id) {
            // this.$router.push('/news')
            this.$http.get('/api/journalism/list').then(res => {
                // console.log(res)
                // console.log(id)
                this.news = res.filter(val => val.journalismtype_id === id)
            })
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
        gettype () {
            this.$http.get('/api/journalismtype/list').then(res => {
                console.log(res)
                this.type = res
            })
        },
        getnews () {
            this.$http.get('/api/journalism/list').then(res => {
                console.log(res)
                this.news = res
            })
        },
        newsclick (id) {
            this.$router.push('/newsdetail/' + id)
        },
        getfoot () {
             this.$http.get('/api/footer/get').then(res => {
                // this.advertising = res[0]
                this.value1 = res
            })
        }
    },
    mounted () {
        /* 广告 */
        this.getadvertising()
        this.getnews()
        this.getfoot()
        this.gettype()
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>
