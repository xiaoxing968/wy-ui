import Vue from 'vue'
import Tabs from '../src/tabs/tabs'
import TabPane from '../src/tabs/tabPane'

const expect = chai.expect
Vue.component('w-tabs', Tabs)
Vue.component('w-tab-pane', TabPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs和tabPane', () => {
    it('Tabs存在.', () => {
        expect(Tabs).to.be.ok
    })
    it('w-tab-pane存在.', () => {
        expect(TabPane).to.be.ok
    })
    describe('tabsProps', () => {
        const Constructor = Vue.extend(Tabs)
        let vm
        it('可以接收value', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
        <w-tabs value="xiaoyang">
          <w-tab-pane label="小羊" name="xiaoyang"></w-tab-pane>
          <w-tab-pane label="小咩" name="xiaomie"></w-tab-pane>
        </w-tabs>
      `
            const vm = new Vue({
                el: div
            })
            setTimeout(() => {
                const activeNavBar = vm.$el.querySelectorAll('.nav-active')
                console.log(vm.$el)
                expect(activeNavBar.length).to.eq(1)
                expect(activeNavBar[0].innerHTML).to.eq('小羊')
                vm.$el.remove()
            },2000)
            done()
            vm.$destroy()
        })
        it('可以接收tabPosition', () => {
            vm = new Constructor({
                propsData: {
                    value: '1',
                    tabPosition: 'bottom'
                }
            }).$mount()
            expect(vm.$el.classList.contains('tab-bottom')).to.eq(true)
            vm.$destroy()
        })
    })
    describe('tabProps', () => {
        it('可以接收label', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
        <w-tabs value="mie">
          <w-tab-pane label="mie" name="xiaomie"></w-tab-pane>
        </w-tabs>
      `
            const vm = new Vue({
                el: div
            })
            setTimeout(() => {
                const tabNav = vm.$el.querySelector('.w-tab-nav__item')
                expect(tabNav.innerHTML).to.eq('mie')
                vm.$el.remove()
            },2000)
            done()
            vm.$destroy()
        })
        it('可以接收name', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
        <w-tabs ref="tabs" value="xiaomie">
          <w-tab-pane label="xiaomie" name="xiaomie"></w-tab-pane>
        </w-tabs>
      `
            const vm = new Vue({
                el: div
            })
            setTimeout(() => {
                const tabNav = vm.$refs.tabs.$refs.tabNav.$refs['tab-xiaomie']
                expect(tabNav.classList.contains('w-tab-nav__item-xiaomie')).to.eq(true)
                vm.$el.remove()
                vm.$destroy()
            },2000)
            done()
        })
        it('可以接收disabled', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
        <w-tabs ref="tabs" value="xiaomie">
          <w-tab-pane label="xiaomie" name="xiaomie" disabled></w-tab-pane>
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
          <w-tabs ref="tabs" value="xiaoyang">
          <w-tab-pane label="小羊" name="xiaoyang"></w-tab-pane>
          <w-tab-pane label="小咩" name="xiaomie"></w-tab-pane>
        </w-tabs>
      `
            const vm = new Vue({
                el: div,
                data () {
                    return {
                        selectTab: 'xiaoyang'
                    }
                }
            })
            // vm.$nextTick(() => {
            //     const tabs = vm.$refs.tabs
            //     const tabNav = tabs.$refs.tabNav.$refs['tab-xiaoyang']
            //     const callback = sinon.fake()
            //     tabs.$on('change', callback)
            //     console.log(tabNav)
            //     tabNav.click()
            //     expect(callback).to.have.been.calledWith('xiaoyang')
            //     expect(vm.selectTab).to.eq('xiaoyang')
            //     vm.$el.remove()
            //     vm.$destroy()
            // })
            setTimeout(()=>{
                const tabs = vm.$refs.tabs
                const tabNav = tabs.$refs.tabNav.$refs['tab-xiaoyang']
                const callback = sinon.fake()
                tabs.$on('change', callback)
                tabNav.click()
                expect(callback).to.have.been.calledWith('xiaoyang')
                expect(vm.selectTab).to.eq('xiaoyang')
                vm.$el.remove()
                vm.$destroy()
            },2000)
            done()
        })
    })
})