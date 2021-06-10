<template>
    <div style="overflow: hidden;" class="newscss">
        <div class="homebox">
            <img :src="srcurl(advertising.image)" class="bg">
            <div class="w1200">
                <div class="news">
                    <h3 class="markdown-body">
                        <VueMarkdown :source="value"></VueMarkdown>
                    </h3>
                </div>
                <div class="app">
                    <img src="../assets/img/patrick.png" alt="">
                </div>
                <span>T：13688143752</span>
            </div>
        </div>
        <div class="jp">
            <img src="../assets/img/jp.jpg" alt="">
        </div>
        <div class="about w1200">
            <div class="crumbsnav">
                <a href="#" @click.prevent="index">首页</a>
                &nbsp;&nbsp; >> &nbsp;&nbsp;
                <a href="#" @click.prevent="newsshows">夜场新闻</a>
                &nbsp;&nbsp; >> &nbsp;&nbsp;
                <a href="#" @click.prevent="newsshows">成都夜场</a>
                &nbsp;&nbsp; >> &nbsp;&nbsp;
                <a href="#" @click.prevent="Newsdetail">{{data.title}}</a>
            </div>
            <div class="about-bot w1200 clearfix">
                <div class="about-left fl">
                    <ul><li>成都夜场</li></ul>
                </div>
                <div class="about-right fr" style="float: right;">
                    <h2>{{data.title}}</h2>
                    <VueMarkdown :source="data.content"></VueMarkdown>
                    <div class="clearfix newlis">
                    <div class="fl">
                        <span>上一篇</span>
                        <span @click.prevent="prev1()"><a href="##">{{prevdata.title}}</a></span>
                    </div>
                    <div class="fr">
                        <span>下一篇</span>
                        <span @click.prevent="next1()"><a href="##">{{nextdata.title}}</a></span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import '../assets/less/index.less';
.jp {
    width: 100%;
    height: 330px;
    img {
        width: 100%;
        height: 100%;
    }
}
.about-bot {
    width: 1200px;
}
.about-right {
    width: 918px;
    float: right;
    font-size: 12px;
    color: #222;
    line-height: 30px;
}
h2 {
    height: 63px;
    line-height: 63px;
    font-size: 18px;
    color: #333;
}
</style>
<script>
import VueMarkdown from 'vue-markdown'
export default {
    data () {
        return {
            data: [],
            id: '',
            advertising: {},
            value: '',
            nextdata: [],
            prevdata: [],
            arrid: ''
        }
    },
    components: {
        VueMarkdown // 注入组件
    },
    methods: {
        url (src) {
            return this.imgURL + src
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
        index () {
            this.$router.push('/index')
        },
        newsshows () {
            this.$router.push('/news')
        },
        Newsdetail () {
            this.$router.push('/Newsdetail/' + this.id)
        },
        next () {
            if (parseInt(this.id) !== parseInt(this.arrid)) {
                this.$http.get('/api/journalism/get?id=' + this.id + '&operate=next').then(res => {
                    this.nextdata = res
                })
            }
        },
        next1 () {
            if (this.id !== parseInt(this.arrid)) {
                this.next()
                this.id++
            }
                setTimeout(() => {
                    this.data = this.nextdata
                     this.data.content = this.data.content.replace('/', this.imgURL + '/')
                }, 800)
        },
        prev () {
            if (parseInt(this.id) !== 1) {
                this.$http.get('/api/journalism/get?id=' + this.id + '&operate=prev').then(res => {
                    this.prevdata = res
                })
            }
        },
        prev1 () {
            if (parseInt(this.id) !== 1) {
                this.id--
                 this.prev()
            }
                setTimeout(() => {
                    this.data = this.prevdata
                     this.data.content = this.data.content.replace('/', this.imgURL + '/')
                }, 800)
        },
        all () {
            this.$http.get('/api/journalism/list').then(res => {
                var arr = res
                this.arrid = arr[arr.length - 1].id
            })
        }
    },
    mounted () {
        this.getadvertising()
        this.id = this.$route.params.id
        this.$http.get('/api/journalism/get?id=' + this.id).then(res => {
            this.data = res
        })
        this.all()
        this.next()
        this.prev()
    }
}
</script>
