<template>
    <div class="modelshows2 modelshows">
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
                    <img src="../assets/img/patrick.png" alt="">
                </div>
                <span>T：13688143752</span>
            </div>
        </div>
        <!-- 高端KTV夜总会模特 -->
        <div class="model clearfix w1200" ref="model">
            <div class="crumbsnav">
                <a href="#" @click.prevent="getindex">首页</a>&nbsp;&nbsp; >> &nbsp;&nbsp;<a href="#" @click.prevent="modelshows">模特展示</a>
            </div>
            <div class="model-nav fl">
                <div class="news-shows-top">夜场新闻</div>
                <a href="#" @click.prevent="modelshows">高端模特</a>
                <span></span>
            </div>
            <div class="model-shows fr clearfix" ref="over">
                <div class="news-shows-top">夜场新闻</div>
                <div class="model-box fl" @mouseover="over"
                @mousemove="pic"
                @mouseout="out"
                >
                    <img :src="srcurl(data.image)" >
                    <div class="imgpox" :class="flag ? 'imgbox' : 'imgbox dn' " :style="style1">
                    </div>
                </div>
                <div class="model-title fr">
                    <p>{{data.title}}</p>
                    <p>价格:&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: red; font-weight: 400; font-size: 25px;">{{data.price}}</span></p>
                    <div :class="flag ? 'imgbox' : 'imgbox dn'  ">
                        <img :src="srcurl(data.image)" alt="" :style="style2">
                    </div>
                </div>

                <div class="model-fx">
<a title="分享到微信" class="bshare-weixin" href="javascript:void(0);" @click="enter1()"></a>
                                <a title="分享到QQ空间" target="_blank" class="bshare-qzone" href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2Fwww.comektv.com%2Fyczp1%2Fproducts%2F14932548.html%3Fbsh_bid%3D5616406215&title=长沙夜总会&pics=666&summary=%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F.&desc=%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F."></a>
                                <a title="分享到新浪微博" target="_blank" class="bshare-sinaminiblog" href="http://bshare.optimix.cn/bshare_redirect?site=sinaminiblog&type=0&publisherUuid=&url=http%3A%2F%2Fwww.comektv.com%2Fyczp1%2Fproducts%2F14932548.html&title=%E6%88%90%E9%83%BD%E5%A4%9C%E5%9C%BA&summary=%E6%88%90%E9%83%BD%E9%94%A6%E7%BC%98%E5%9B%BD%E9%99%85%E5%A4%9C%E6%80%BB%E4%BC%9A%E4%B8%BA%E4%BC%81%E4%B8%9A%E6%8F%90%E4%BE%9B%E6%88%90%E9%83%BD%E5%A4%9C%E5%9C%BA%2C%E6%88%90%E9%83%BD%E5%A4%9C%E5%9C%BA%E4%BB%B7%E6%A0%BC%2C%E6%88%90%E9%83%BD%E5%A4%9C%E5%9C%BA%E5%8F%82%E6%95%B0%E7%9B%B8%E5%85%B3%E4%BF%A1%E6%81%AF.&pic=&pics=https%3A%2F%2Faimg8.dlssyht.cn%2Fu%2F1913406%2Fmodule%2Fsimplepicbackground%2F1913406%2F10387%2F20772430_1609926138.png%3Fx-oss-process%3Dimage%2Fresize%2Cm_fixed%2Cw_134%2Ch_134%2Climit_0%7Chttps%3A%2F%2Faimg8.dlssyht.cn%2Fproduct%2F800_1500%2F7467%2F14932548_1913406_41609927317.jpeg%3Fx-oss-process%3Dimage%2Fresize%2Cm_lfit%2Climit_1%2Cw_420%2Ch_420%7Chttps%3A%2F%2Faimg8.dlssyht.cn%2Fu%2F1913406%2Fueditor%2Fimage%2F957%2F1913406%2F1609927302592806.jpeg%7Chttps%3A%2F%2Faimg8.dlssyht.cn%2Fproduct%2F800_1500%2F7467%2F14932551_1913406_41609927217.jpeg%3Fx-oss-process%3Dimage%2Fresize%2Cm_lfit%2Cw_200%2Ch_200%2Climit_1%7Chttps%3A%2F%2Faimg8.dlssyht.cn%2Fproduct%2F800_1500%2F7467%2F14932547_1913406_41609927354.jpeg%3Fx-oss-process%3Dimage%2Fresize%2Cm_lfit%2Cw_200%2Ch_200%2Climit_1%7Chttp%3A%2F%2Fwww.comektv.com%2Fyczp1%2Fproducts%2F14932548.html&video=&vTag=&vUid=&vEmail=&product=&price=0&brand=&tag=&category=&template=1&popcss=&apvuid=&apts=&apsign=&request_locale=zh&lang=zh"></a>
                </div>

                <div class="particular fl">
                    <div class="particular-t">
                        <span>产品说明</span>
                    </div>
                    <img :src="srcurl(data.image)" alt="">
                </div>

                <div class="products fl">
                    <h3>相关产品</h3>
                    <ul class="clearfix">
                        <li v-for="val in model" :key="val.id" @click.prevent="getmodeldetailed(val.id)">
                            <a href="#" >
                                <div>
                                    <img :src="srcurl(val.image)" alt="">
                                </div>
                                <p style="color: #999;"><span style="color: red; font-weight: 700; ">{{val.price}}</span>元</p>
                                <p>{{val.title}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="bsWXBox" class="bsBox" :class="num2 === 1 ? 'dn' : 'block'" style="left: 50%; top: 50%; margin-left: -110px; margin-top: -122.5px; position: fixed; height: 245px; width: 220px;"><div class="bsClose" style="top: 8px; right: 20px;" @click="leave1()">X</div><div class="bsTop" style="width: 220px;"><span style="margin-left:15px;">分享到</span><span class="bsPlatName">&nbsp;-&nbsp;微信</span></div><div class="bsFrameDiv"><div style="height: 220px; width: 220px; display: block;"></div></div></div>
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
            id: '',
            data: [],
            flag: false,
            obj2: {
                x: null,
                y: null
            },
            obj1: {
                x: null,
                y: null
            },
            style1: {
                left: '0px',
                top: '0px'
            },
            style2: {
                left: '0px',
                top: '0px'
            },
            num2: 1
        }
    },
    methods: {
        enter1 () {
            this.num2 = 2
        },
        leave1 () {
            this.num2 = 1
        },
        getmodeldetailed (id) {
            this.getmodellist(id)
            this.getmodel(id)
        },
        getindex () {
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
                this.model = arr.filter(val => val.id !== this.id)
                // console.log(this.model)
            })
        },
        getmodellist (id) {
            this.$http.get('/api/models/list').then(res => {
                // this.list = res[0]
                // console.log(res)
                var arr = res
                var brr = arr.filter(val => val.id === parseInt(id))
                this.data = brr[0]
                // console.log(this.data)
            })
        },
        pic (e) {
            this.flag = true
            // console.log(e)
            // console.log(e.pageX, e.pageY)
            this.obj2.x = e.pageX
            this.obj2.y = e.pageY
            var moveX = this.obj2.x - this.obj1.x - 97.5
            var moveY = this.obj2.y - this.obj1.y - 230
            var moveX2 = this.obj2.x - this.obj1.x + 87.5
            var moveY2 = this.obj2.y - this.obj1.y - 140
            if (moveX <= 0) {
                moveX = 0
            } else if (moveX >= 420 - 175) {
                moveX = 420 - 175
            }
            if (moveY <= 0) {
                moveY = 0
            } else if (moveY >= 420 - 175) {
                moveY = 420 - 175
            }
            this.style1.left = moveX + 'px'
            this.style1.top = moveY + 'px'
            this.style2.left = -moveX2 + 'px'
            this.style2.top = -moveY2 + 'px'
            // console.log(moveX2, moveY2)
        },
        out () {
            this.flag = false
        },
        over () {
            this.obj1.x = this.$refs.model.offsetLeft + this.$refs.over.offsetLeft
            this.obj1.y = this.$refs.model.offsetTop + this.$refs.over.offsetTop
        }
    },
    mounted () {
        this.id = this.$route.params.id
        /* 广告 */
        this.getadvertising()
        /* 模特 */
        this.getmodel()
        this.getmodellist(this.id)
    }
}
</script>

<style lang="less" scoped>
@import '../assets/less/index.less';
</style>