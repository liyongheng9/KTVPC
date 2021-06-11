<template>
    <div class="modelshows">
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
        <!-- 高端KTV夜总会模特 -->
        <div class="model clearfix w1200">
            <div class="crumbsnav">
                <a href="#" @click.prevent="setindex">首页</a>&nbsp;&nbsp; >> &nbsp;&nbsp;<a href="#" @click.prevent="modelshows">模特展示</a>
            </div>
            <div class="model-nav fl">
                <div class="model-shows-top">
                    <img src="../assets/img/20210609102749.png" alt="">
                </div>
                <a href="#" @click.prevent="modelshows">高端模特</a>
                <span></span>
            </div>
            <div class="model-shows fr">
                <div class="model-shows-top">
                    <img src="../assets/img/20210609102749.png" alt="">
                </div>
                <ul>
                    <li v-for="val in model" :key="val.id" >
                        <a href="#" @click.prevent="getmodeldetailed(val.id)">
                            <div>
                                <img :src="srcurl(val.image)" alt="">
                            </div>
                            <p style="color: #999;"><span style="color: red; font-weight: 700; ">{{val.price}}</span> 元</p>
                            <p>{{val.title}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!--  -->
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
            model: [],
            value: '',
            value1: ''
        }
    },
    methods: {
        getmodeldetailed (id) {
            this.$router.push('/modeldetailed/' + id)
        },
        setindex () {
            this.$router.push('/index')
        },
        modelshows () {
            this.$router.push('/modelshows')
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
        /* 模特 */
        this.getmodel()
        this.getfoot()
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>