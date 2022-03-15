import Vue from 'vue'
import Button from './button/button'
import Icon from './icon'
import IconGroup from './button/button-group'
import Input from './input'
import Col from './grid/col'
import Row from './grid/row'
import Container from './layout/container'
import Header from './layout/header'
import Footer from './layout/footer'
import Aside from './layout/aside'
import Main from './layout/main'
import Toast from './plugin/toast'
import tabPane from './tabs/tabPane'
import Tabs from './tabs/tabs'
import Popover from './popover'

Vue.component("w-button", Button)
Vue.component("w-icon", Icon)
Vue.component("w-button-group", IconGroup)
Vue.component("w-input", Input)
Vue.component("w-col", Col)
Vue.component("w-row", Row)
Vue.component("w-container", Container)
Vue.component("w-header", Header)
Vue.component("w-footer", Footer)
Vue.component("w-aside", Aside)
Vue.component("w-main", Main)
Vue.component("w-toast", Toast)
Vue.component("w-tabs", Tabs)
Vue.component("w-tab-pane", tabPane)
Vue.component("w-popover", Popover)

Vue.use(Toast)

new Vue({
    el: "#app",
    data: {
        color:"green",
        message:"hi message",
        haha:"haha",
    },
    created() {
        // setTimeout(() => {
        //     let event = new Event('change');
        //     let inputElement = this.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     console.log('hi')
        // }, 3000)
    },
    methods: {
        showToast(){
            this.$toast({
                message: `hi${parseInt(Math.random()*100)}`,
                // message: '<i>hi!</i>',
                // enableHtml: true,
                duration: 2000,
                showClose: true,
                position: 'middle',
                closeButton: {
                    text: '知道了',
                    icon: 'close'
                }
            })
        }
    }
})

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)


const expect = chai.expect

// 单元测试
{
    // 测试按钮含有 icon
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    button.$mount('#test')
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#icon-setting')
    button.$el.remove()
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    button.$mount('#test2')
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
    button.$el.remove()
    button.$destroy()
}
{
    const div = document.createElement("div")
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: "setting",
            iconPosition: "right"
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: "setting",
        }
    })
    vm.$mount()
    let spy = chai.spy(function () {
    })
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}