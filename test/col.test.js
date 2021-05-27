const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.be.ok
    })
    describe('Props', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        let vm
        afterEach(() => {
            div.remove()
            vm.$destroy()
        })
        it('可以接收span', () => {
            vm = new Constructor({
                propsData: {
                    span: 1
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('col-1')).to.equal(true)
        })
        it('可以接收offset', () => {
            vm = new Constructor({
                propsData: {
                    offset: 1
                }
            }).$mount(div)
            const element = vm.$el
            expect(element.classList.contains('offset-1')).to.equal(true)
        })
        it('可以接收ipad/ narrowPc/ pc/ widePc', () => {
            ['ipad', 'narrowPc', 'pc', 'widePc'].forEach(form => {
                vm = new Constructor({
                    propsData: {
                        [form]: {span: 1, offset: 1}
                    }
                }).$mount(div)
                const element = vm.$el
                let formName = form === 'narrowPc' ? 'narrow-pc' : form === 'widePc' ? 'wide-pc' : form
                expect(element.classList.contains(`col-${formName}-1`)).to.eq(true)
                expect(element.classList.contains(`offset-${formName}-1`)).to.eq(true)
            })
        })
    })
})