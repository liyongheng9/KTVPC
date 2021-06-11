<template>
    <div>
        <footer>
            <div class="fot-top w1200">
                <div class="left">
                    <h2 class="ev-text-title-2">
                        <span style="">
                            {{value1.address}}
                        </span>
                    </h2>
                    <div class="ev-module-text" >
                        <span style="font-family:微软雅黑;font-size:14px;color:#989898;line-height:1.7;">{{value1.describe}}</span><br style="">
                    </div>
                    <div class="ev-module-Telnum" >
                        <p>
                            <span style="">
                                咨询电话：{{value1.phone}}
                            </span>
                        </p>
                        <p>
                            <span>
                                公司地址：{{value1.title}}
                            </span><br>
                        </p>
                    </div>
                </div>
                <div class="right">
                    <a href="##">
                        <img :src="srcurl(value1.image)" alt="">
                    </a>
                    <p><span style="color:#989898;font-family:微软雅黑;font-size:14px;line-height:1.8;">关注加好友更优惠</span></p>
                </div>
            </div>
            <div class="copyright w1200">
                <p>{{value1.record}}</p>
                <center id="c2"></center>
            </div>
        </footer>
    </div>
</template>
<style lang="less" scoped>
@import '../assets/less/index.less';
</style>
<script>
export default {
    data () {
        return {
            value1: ''
        }
    },
    methods: {
        srcurl (url) {
            return this.http + url
        },
        getfoot () {
             this.$http.get('/api/footer/get').then(res => {
                // this.advertising = res[0]
                this.value1 = res
                // console.log(res)
            })
        }
    },
    mounted () {
        this.getfoot()
    }
}
</script>