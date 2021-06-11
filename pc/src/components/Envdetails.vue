<template>
    <div class="Envdetails w1200">
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
            <div class="mbx-top">
            <span>
                <router-link to="/index/home">首页</router-link>
                </span>
                <b>>></b>
                <span><router-link to="/Environment">环境展示</router-link></span>
                <b>>></b>
                <span>夜场环境</span>
                <b>>></b>
                <span class="color">{{data.title}}</span>
            </div>
            <h3 class="top-title">
                {{data.title}}
            </h3>
            <div ref="Bigbox" class="clearfix bigdd">
                <div class="pics fl" ref="big"
                    @mouseenter="onMouseEnter()"
                    @mouseleave="leave()"
                    @mousemove="onMouseMoveSmall($event)">
                    <img :src="url(data.image)" alt="" ref="big1">
                    <div class="mask" v-show="isShow" ref="small"></div>
                </div>
                    <div class="box fl" v-show="isShow">
                        <div ref="showImg">
                            <img :src="url(data.image)" alt="" class="bigimg">
                        </div>
                    </div>
                    <div class="price fl">
                        <h3>暂无价格</h3>
                    </div>
                    <div class="p-preview-number-area">
                        <div class="p-preview-share">
                            <div class="bsync-custom icon-long-orange">
                                <div class="bshare-custom"><div class="bsPromo bsPromo2"></div>
                                <div class="bsPromo bsPromo2"></div>
                                <a title="分享到微信" class="bshare-weixin" href="javascript:void(0);" @click="enter1()"></a>
                                <a title="分享到QQ空间" target="_blank" class="bshare-qzone" href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2Fwww.comektv.com%2Fyczp1%2Fproducts%2F14932548.html%3Fbsh_bid%3D5616406215&title=长沙夜总会&pics=666&summary=%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F.&desc=%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%2C%3F%3F%3F%3F%3F%3F%3F%3F%3F%3F."></a>
                                <a title="分享到新浪微博" target="_blank" class="bshare-sinaminiblog" href="http://bshare.optimix.cn/bshare_redirect?site=sinaminiblog&type=0&publisherUuid=&url=http%3A%2F%2Fwww.comektv.com%2Fyczp1%2Fproducts%2F14932548.html&title=%E6%88%90%E9%83%BD%E5%A4%9C%E5%9C%BA&summary=%E6%88%90%E9%83%BD%E9%94%A6%E7%BC%98%E5%9B%BD%E9%99%85%E5%A4%9C%E6%80%BB%E4%BC%9A%E4%B8%BA%E4%BC%81%E4%B8%9A%E6%8F%90%E4%BE%9B%E6%88%90%E9%83%BD%E5%A4%9C%E5%9C%BA%2C%E6%88%90%E9%83%BD%E5%A4%9C%E5%9C%BA%E4%BB%B7%E6%A0%BC%2C%E6%88%90%E9%83%BD%E5%A4%9C%E5%9C%BA%E5%8F%82%E6%95%B0%E7%9B%B8%E5%85%B3%E4%BF%A1%E6%81%AF.&pic=&pics=https%3A%2F%2Faimg8.dlssyht.cn%2Fu%2F1913406%2Fmodule%2Fsimplepicbackground%2F1913406%2F10387%2F20772430_1609926138.png%3Fx-oss-process%3Dimage%2Fresize%2Cm_fixed%2Cw_134%2Ch_134%2Climit_0%7Chttps%3A%2F%2Faimg8.dlssyht.cn%2Fproduct%2F800_1500%2F7467%2F14932548_1913406_41609927317.jpeg%3Fx-oss-process%3Dimage%2Fresize%2Cm_lfit%2Climit_1%2Cw_420%2Ch_420%7Chttps%3A%2F%2Faimg8.dlssyht.cn%2Fu%2F1913406%2Fueditor%2Fimage%2F957%2F1913406%2F1609927302592806.jpeg%7Chttps%3A%2F%2Faimg8.dlssyht.cn%2Fproduct%2F800_1500%2F7467%2F14932551_1913406_41609927217.jpeg%3Fx-oss-process%3Dimage%2Fresize%2Cm_lfit%2Cw_200%2Ch_200%2Climit_1%7Chttps%3A%2F%2Faimg8.dlssyht.cn%2Fproduct%2F800_1500%2F7467%2F14932547_1913406_41609927354.jpeg%3Fx-oss-process%3Dimage%2Fresize%2Cm_lfit%2Cw_200%2Ch_200%2Climit_1%7Chttp%3A%2F%2Fwww.comektv.com%2Fyczp1%2Fproducts%2F14932548.html&video=&vTag=&vUid=&vEmail=&product=&price=0&brand=&tag=&category=&template=1&popcss=&apvuid=&apts=&apsign=&request_locale=zh&lang=zh"></a>
                                </div>
                                <!-- <script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/buttonLite.js#style=-1&amp;uuid=&amp;pophcol=2&amp;lang=zh"></script>
                                <script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/bshareC0.js"></script> -->
                            </div>
                        </div>
                    </div>
            </div>
        <div class="p-tab-show-detail" id="pTabShowDetail">
            <div class="tab-switch-module">
                <div class="tab-switch-t">
                    <ul class="q">
                        <li class="tab-t-item"><span class="active">产品说明</span></li>
                    </ul>
                </div>
                <div class="tab-switch-c">
                    <div class="tab-c-item tab-c-item-active">
                        <div class="show-details-article editor_content_air">
                            <p><img :src="url(data.image)" alt=""></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-cp">
            <div class="hb-head">
                <strong class="hb-head-name">相关产品</strong>
            </div>
            <div class="left" :class="num1 === 1 ? 'dn' : ''"></div>
            <ul class="slideshow clearfix" ref="show" @mouseenter="enter()" @mouseleave="leave()">
                <li v-for="val in value" :key="val.id" class="fl">
                    <a href="##" class="pics" @click.prevent="details(val.id)">
                        <div class="pic">
                            <img :src="url(val.image)" alt="">
                        </div>
                    </a>
                    <h3>
                        <a href="##" @click.prevent="details(val.id)">{{val.title}}</a>
                    </h3>
                </li>
            </ul>
            <div class="right" :class="num1 === 1 ? 'dn' : ''"></div>
        </div>
        <div id="bsWXBox" class="bsBox" :class="num2 === 1 ? 'dn' : 'block'" style="left: 50%; top: 50%; margin-left: -110px; margin-top: -122.5px; position: fixed; height: 245px; width: 220px;"><div class="bsClose" style="top: 8px; right: 20px;" @click="leave1()">X</div><div class="bsTop" style="width: 220px;"><span style="margin-left:15px;">分享到</span><span class="bsPlatName">&nbsp;-&nbsp;微信</span></div><div class="bsFrameDiv"><div style="height: 220px; width: 220px; display: block;"></div></div></div>
    </div>
</template>
<style lang="less" scoped>
@import '../assets/less/index.less';
</style>
<script>
import VueMarkdown from 'vue-markdown'
export default {
    components: {
        VueMarkdown // 注入组件
    },
    data () {
        return {
            data: '',
            value: [],
            num: null,
            num1: 1,
            num2: 1,
            isShow: false,
            value1: '',
            value2: '',
            advertising: {}
        }
    },
    methods: {
        getfoot () {
             this.$http.get('/api/footer/get').then(res => {
                // this.advertising = res[0]
                this.value2 = res
            })
        },
        url (src) {
            return this.imgURL + src
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
        getOneData (id) {
          this.$http.get('/api/ambient/get?id=' + id).then(res => {
              this.data = res
            //   console.log(this.data)
          })
        },
        details (id) {
            this.$router.push('/envdetails/' + id)
            this.$router.go()
        },
        enter () {
            this.num1 = 2
        },
        leave () {
            this.isShow = false
            this.num1 = 1
        },
        enter1 () {
            this.num2 = 2
        },
        leave1 () {
            this.num2 = 1
        },
        // 移入
    onMouseEnter() {
      this.isShow = true
    },
    // 移出
    // leave () {
    //   this.isShow = false
    // },
    // 移动小盒子
    onMouseMoveSmall(e) {
      // 移动范围最大 最小
      var maxY = this.$refs.big1.offsetHeight - this.$refs.small.offsetHeight
      var maxX = this.$refs.big.offsetWidth - this.$refs.small.offsetWidth
      var min = 0
      // 鼠标
      var Sx = e.pageX
      var Sy = e.pageY
      // 小盒子的位置
      var smallY = this.$refs.Bigbox.offsetTop
      var smallX = this.$refs.Bigbox.offsetLeft
      // 小盒子的宽高
      var smallH = this.$refs.small.offsetHeight / 2 * 3
      var smallW = this.$refs.small.offsetWidth / 2
      // 求出移动的距离
      var x = Sx - smallX - smallW
      var y = Sy - smallY - smallH
      // 判断小于0 就等于0   大于最大值  就等于最大值 做限制
      if (x < min) {
        x = min
      } else if (x > maxX) {
        x = maxX
      }

      if (y < min) {
        y = min
      } else if (y > maxY) {
        y = maxY
      }
      // 赋值
      this.$refs.small.style.left = x + 'px'
      this.$refs.small.style.top = y + 'px'
      this.$refs.showImg.style.left = -x * 1.5 + 'px'
      if (-y * 1.5 > -168) {
        this.$refs.showImg.style.top = -y * 1.5 + 'px'
      }
    }
    },
    mounted () {
        this.getadvertising()
        // console.log(this.$router)
        this.num = parseInt(this.$route.params.id)
        this.getOneData(this.$route.params.id)
        this.$http.get('/api/ambient/list').then(res => {
            // console.log(res)
            var arr = res
            this.value = arr.filter((val, index) => {
                if (val.id !== this.num) {
                    return arr[index]
                }
            })
        })
        this.getfoot()
    }
}
</script>