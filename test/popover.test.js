const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe ('Popover', () => {
    it ('存在.', () => {
        expect(Popover).to.be.ok
    })
    describe ('Props', () => {
        it ('可以设置placement', (done) => {
            Vue.component('w-popover', Popover)
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
        <w-popover placement="bottom" ref="test" trigger="click">
          <template #content>popover内容</template>
          <button>点我</button>
        </w-popover>
      `
            const vm = new Vue({
                el: div
            })
            vm.$el.querySelector('button').click()
            vm.$nextTick(() => {
                const { content } = vm.$refs.test.$refs
                expect(content.classList.contains('popover-content__bottom')).to.eq(true)
                vm.$el.remove()
                vm.$destroy()
                done()
            })
        })
        it ('可以设置trigger', (done) => {
            Vue.component('w-popover', Popover)
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
        <w-popover ref="test" trigger="hover">
          <template #content>popover内容</template>
          <button>点我</button>
        </w-popover>
      `
            const vm = new Vue({
                el: div
            })
            let { test } = vm.$refs
            test.$el.dispatchEvent(new MouseEvent('mouseenter'))
            vm.$nextTick(() => {
                const { content } = test.$refs
                expect(content).to.exist
                vm.$el.remove()
                vm.$destroy()
                done()
            })
        })
    })
})