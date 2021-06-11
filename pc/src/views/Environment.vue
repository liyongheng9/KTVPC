<template>
    <div class="Environment w1200">
        <!-- 轮播图 -->
        <div class="homebox">
            <img :src="srcurl(advertising.image)" class="bg">
            <div class="w1200">
                <div class="news">
                    <h3 class="markdown-body">
                        <VueMarkdown :source="value1"></VueMarkdown>
                    </h3>
                </div>
                <div class="app">
                    <img :src="srcurl(value2.image)" alt="">
                </div>
                <span>{{value2.phone}}</span>
            </div>
        </div>
       <div class="mbx-top" ref="top">
           <span>
               <router-link to="/home">首页</router-link>
            </span>
            <b>>></b>
            <span><router-link to="/Environment">环境展示</router-link></span>
        </div>
        <ol>
            <li>
                <router-link to="/Environment">夜场环境</router-link>
            </li>
        </ol>
        <ul class="clearfix">
            <li v-for="val in value" :key="val.id">
                <a href="##" class="pics" @click.prevent="details(val.id)">
                    <div class="pic">
                        <img :src="url(val.image)" alt="">
                    </div>
                </a>
                <h3>
                    <a href="" @click.prevent="details(val.id)">{{val.title}}</a>
                </h3>
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
</template>
<style lang="less" scoped>
@import '../assets/less/index.less';
p {
    text-align: left !important;
}
</style>
<script>
import VueMarkdown from 'vue-markdown'
export default {
    components: {
        VueMarkdown // 注入组件
    },
    data () {
        return {
            value: [],
            value1: '',
            value2: '',
            advertising: {}
        }
    },
    methods: {
        url (src) {
            return this.imgURL + src
        },
        details (id) {
            this.$router.push('/envdetails/' + id)
            window.scroll(0, this.$refs.top.offsetTop)
        },
        srcurl (url) {
            return this.http + url
        },
        getadvertising () {
             this.$http.get('/api/carousel_map/list').then(res => {
                this.advertising = res[0]
                this.value1 = res[0].content
            })
        },
        getfoot () {
             this.$http.get('/api/footer/get').then(res => {
                // this.advertising = res[0]
                this.value2 = res
            })
        }
    },
    mounted () {
        this.getadvertising()
        this.$http.get('/api/ambient/list').then(res => {
            // console.log(res)
            var arr = res
            this.value = arr.filter((val, index) => {
                if (index < 5) {
                    return arr[index]
                }
            })
        })
        this.getfoot()
    }
}
</script>