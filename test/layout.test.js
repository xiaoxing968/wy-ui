const expect = chai.expect;
import Vue from 'vue'
import Container from '../src/container'
import Aside from '../src/aside'
import Header from '../src/header'
import Footer from '../src/footer'
import Main from '../src/footer'

Vue.config.productionTip = false
Vue.config.devtools = false

describe ('container', () => {
    it ('存在.', () => {
        expect(Container).to.be.ok
    })
    describe ('Props', () => {
        const Constructor = Vue.extend(Container)
        let vm
        const div = document.createElement('div')
        document.body.appendChild(div)
        afterEach (() => {
            div.remove()
            vm.$destroy()
        })
        it ('container可以接收direction', () => {
            vm = new Constructor({
                propsData: {
                    direction: 'horizontal'
                }
            }).$mount(div)
            const element = vm.$el
            expect(getComputedStyle(element).flexDirection).to.equal('column')
        })
    })
    describe ('promsRules', () => {
        it ('有aside组件时为row', (done) => {
            Vue.component('w-container', Container)
            Vue.component('w-aside', Aside)
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
        <w-container>
          <w-aside ></w-aside>
        </w-container>
      `
            const vm = new Vue({
                el: div
            })
            setTimeout (() => {
                const container = vm.$el.querySelector('.w-container')
                expect(getComputedStyle(container).flexDirection).to.equal('row')
                vm.$el.remove()
                vm.$destroy()
                done()
            })
        })
    })
})

describe('layout-children', () => {
    it ('Aside存在.', () => {
        expect(Aside).to.be.ok
    })
    it ('Header存在.', () => {
        expect(Header).to.be.ok
    })
    it ('Main存在.', () => {
        expect(Main).to.be.ok
    })
    it ('Footer存在.', () => {
        expect(Footer).to.be.ok
    })
    describe ('Props', () => {
        it ('header/footer可以接收height, aside可以接收width', (done) => {
            Vue.component('w-container', Container)
            Vue.component('w-header', Header)
            Vue.component('w-footer', Footer)
            Vue.component('w-aside', Aside)
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
        <w-container>
          <w-aside width="80"></w-aside>
          <w-header height="70"></w-header>
          <w-footer height="60"></w-footer>
        </w-container>
      `
            const vm = new Vue({
                el: div
            })
            setTimeout (() => {
                const aside = vm.$el.querySelector('.container-aside')
                const header = vm.$el.querySelector('.container-header')
                const footer = vm.$el.querySelector('.container-footer')
                expect(getComputedStyle(aside).width).to.equal('80px')
                expect(getComputedStyle(header).height).to.equal('70px')
                expect(getComputedStyle(footer).height).to.equal('60px')
                vm.$el.remove()
                vm.$destroy()
                done()
            })
        })
    })
})