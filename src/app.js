import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import IconGroup from './button-group'
import Input from './input'

Vue.component("w-button", Button)
Vue.component("w-icon", Icon)
Vue.component("w-button-group", IconGroup)
Vue.component("w-input", Input)

new Vue({
    el: "#app",
    data: {
        loading: false,
        loading1: false,
        loading2: false,
    },
    created() {
        setTimeout(() => {
            let event = new Event('change');
            let inputElement = this.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            console.log('hi')
        }, 3000)
    },
    methods: {
        inputChange(e) {
            console.log(e)
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