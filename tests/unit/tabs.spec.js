import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount} from '@vue/test-utils'

import Vue from 'vue/dist/vue.esm.js'
import Tabs from '@/tabs/tabs'
import TabPane from '@/tabs/tabPane'

Vue.component('w-tabs', Tabs)
Vue.component('w-tab-pane', TabPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs和tab', () => {
    it('Tabs存在.', () => {
        expect(Tabs).to.be.ok
    })
    it('TabPane存在.', () => {
        expect(TabPane).to.be.ok
    })
    describe('tabsProps', () => {
        let div
        beforeEach(() => {
            div = document.createElement('div')
            document.body.appendChild(div)
        })
        afterEach(() => {
            div.remove()
        })
        it('可以接收value', (done) => {
            div.innerHTML =  `
        <w-tabs value="xiaoyang">
          <w-tab-pane label="小羊" name="xiaoyang"></w-tab-pane>
          <w-tab-pane label="小咩" name="xiaomie"></w-tab-pane>
        </w-tabs>
      `
            const vm = new Vue({
                el: div
            })
            vm.$nextTick(() => {
                const activeNavBar = vm.$el.querySelectorAll('.nav-active')
                expect(activeNavBar.length).to.eq(1)
                console.log(activeNavBar[0].innerHTML.trim(),'activeNavBar[0].innerHTML')
                expect(activeNavBar[0].innerHTML.trim()).to.include('小羊')
                vm.$el.remove()
                vm.$destroy()
                done()
            })
        })
        it('可以设置tabPosition', () => {
            const wrapper = shallowMount(Tabs, {
                propsData: {
                    value: '1',
                    tabPosition: 'bottom'
                }
            })
            expect(wrapper.classes('tab-bottom')).to.eq(true)
        })
    })
    describe('tabProps', () => {
        const Constructor = Vue.extend(TabPane)
        let div
        beforeEach(() => {
            div = document.createElement('div')
            document.body.appendChild(div)
        })
        afterEach(() => {
            div.remove()
        })
        it('可以设置label', (done) => {
            div.innerHTML = `
        <w-tabs value="kaixin">
          <w-tab-pane label="kaixin" name="kaixin"></w-tab-pane>
        </w-tabs>
      `
            const vm = new Vue({
                el: div
            })
            setTimeout(() => {
                const tabNav = vm.$el.querySelector('.wb-nav__item')
                expect(tabNav.innerHTML).to.eq('kaixin')
                vm.$el.remove()
                vm.$destroy()
                done()
            })
        })
        it('可以设置name', (done) => {
            div.innerHTML = `
        <w-tabs ref="tabs" value="kaixin">
          <w-tab-pane label="kaixin" name="kaixin"></w-tab-pane>
        </w-tabs>
      `
            const vm = new Vue({
                el: div
            })
            setTimeout(() => {
                const tabNav = vm.$refs.tabs.$refs.tabNav.$refs['tab-kaixin']
                expect(tabNav.classList.contains('w-tab-nav__item-kaixin')).to.eq(true)
                vm.$el.remove()
                vm.$destroy()
                done()
            })
        })
        it('可以设置disabled', (done) => {
            div.innerHTML = `
        <w-tabs ref="tabs" value="kaixin">
          <w-tab-pane label="kaixin" name="kaixin" disabled></w-tab-pane>
        </w-tabs>
      `
            const vm = new Vue({
                el: div
            })
            setTimeout(() => {
                const tabNav = vm.$el.querySelector('.w-tab-nav__item')
                expect(tabNav.classList.contains('nav-disabled')).to.eq(true)
                const tabsNode = vm.$refs.tabs
                const callback = sinon.fake()
                tabsNode.$on('change', callback)
                tabNav.click()
                expect(callback).to.have.not.been.called
                vm.$el.remove()
                vm.$destroy()
                done()
            })
        })
    })
    describe('events', () => {
        it('切换事件change被触发', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
        <w-tabs ref="tabs" v-model="selectTab">
          <w-tab-pane label="开心" name="kaixin"></w-tab-pane>
          <w-tab-pane label="快乐" name="kuaile"></w-tab-pane>
        </w-tabs>
      `
            const vm = new Vue({
                el: div,
                data() {
                    return {
                        selectTab: 'kaixin'
                    }
                }
            })
            vm.$nextTick(() => {
                const tabs = vm.$refs.tabs
                const tabNav = tabs.$refs.tabNav.$refs['tab-kuaile']
                const callback = sinon.fake()
                tabs.$on('change', callback)
                tabNav.click()
                expect(callback).to.have.been.calledWith('kuaile')
                expect(vm.selectTab).to.eq('kuaile')
                vm.$el.remove()
                vm.$destroy()
                done()
            })
        })
    })
})
