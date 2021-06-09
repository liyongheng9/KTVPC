<template>
    <div class="about w1200">
        <div class="crumbsnav">
            <a href="#" @click="index">首页</a>
            &nbsp;&nbsp; >> &nbsp;&nbsp;
            <a href="#" @click="newsshows">夜场新闻</a>
            &nbsp;&nbsp; >> &nbsp;&nbsp;
            <a href="#" @click="newsshows">成都夜场</a>
            &nbsp;&nbsp; >> &nbsp;&nbsp;
            <a href="#" @click="Newsdetail">{{data.title}}</a>
        </div>
        <div class="about-bot w1200 clearfix">
            <div class="about-left fl">
                <ul><li>成都夜场</li></ul>
            </div>
            <div class="about-right fr" style="float: right;">
                <h2>{{data.title}}</h2>
                <VueMarkdown :source="data.content"></VueMarkdown>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import '../assets/less/index.less';
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
            id: ''
        }
    },
    components: {
        VueMarkdown // 注入组件
    },
    methods: {
        index () {
            this.$router.push('/index')
        },
        newsshows () {
            this.$router.push('/news')
        },
        Newsdetail () {
            this.$router.push('/Newsdetail/' + this.id)
        }
    },
    mounted () {
        this.id = this.$route.params.id
        this.$http.get('/api/journalism/get?id=' + this.id).then(res => {
            this.data = res
        })
    }
}
</script>
