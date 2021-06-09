<template>
    <div class="aboutus">
        <div class="title">
            <h1><VueMarkdown :source="title"></VueMarkdown></h1>
        </div>
        <div class="Details">
            <VueMarkdown :source="value" style="margin: 0px; padding: 0px; color: rgb(33, 33, 33); font-family: tt, Arial, 微软雅黑; font-size: 16px; white-space: normal; background-color: rgb(255, 255, 255); text-align: left;line-height: 50px;"></VueMarkdown>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import '../assets/less/index.less';
</style>
<script>
import VueMarkdown from 'vue-markdown'
export default {
    data () {
        return {
            value: '',
            title: ''
        }
    },
    components: {
        VueMarkdown // 注入组件
    },
    mounted () {
        this.$http.get('/api/about_us/list').then(res => {
            console.log(res)
            this.value = res[1].content
            this.title = res[1].title
        })
    }
}
</script>