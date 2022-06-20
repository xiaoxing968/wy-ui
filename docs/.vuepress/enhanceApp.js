import Vue from 'vue'
import './public/index.less'
import toast from '../../src/plugin/toast'
import hljs from 'highlight.js'

//样式文件
import 'highlight.js/styles/nord.css'
Vue.directive('highlight',function (el) {
        let blocks = el.querySelectorAll('pre code');
        blocks.forEach((block)=>{
                hljs.highlightBlock(block)
        })
})

export default ({
        Vue, // VuePress 正在使用的 Vue 构造函数
                    // options, // 附加到根实例的一些选项
                    // router, // 当前应用的路由实例
                    // siteData // 站点元数据
                }) => {
// ...做一些其他的应用级别的优化
        Vue.use(toast) // 全局安装toast
}