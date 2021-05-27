const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/grid/row'
import Col from '../src/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })
    it('可以接收gutter', (done) => {
        Vue.component('w-row', Row)
        Vue.component('w-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <w-row :gutter="20">
          <w-col :span="12"></w-col>
          <w-col :span="12"></w-col>
        </w-row>
      `
        const vm = new Vue({
            el: div
        })
        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.equal('-10px')
            expect(getComputedStyle(row).marginRight).to.equal('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingLeft).to.equal('10px')
            expect(getComputedStyle(cols[1]).paddingRight).to.equal('10px')
            vm.$el.remove()
            vm.$destroy()
            done()
        })
    })
    it('可以接收align', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align: 'right'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
        div.remove()
        vm.$destroy()
    })
})