const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })
    describe('props', () => {
        const Constructor = Vue.extend(Toast)
        let vm
        const div = document.createElement('div')
        document.body.appendChild(div)
        it('可以接收duration', (done) => {
            vm = new Constructor({
                propsData: {
                    duration: 500
                }
            }).$mount(div)
            const element = vm.$el
            setTimeout(() => {
                expect(document.body.contains(element)).to.eq(false)
                div.remove()
                vm.$destroy()
                done()
            }, 800)
        })
        it('可以接收showClose / closeButton', (done) => {
            const callback = sinon.fake();
            vm = new Constructor({
                propsData: {
                    showClose: true,
                    closeButton: {
                        text: '知道了',
                        icon: 'close',
                        onClose: callback
                    }
                }
            }).$mount(div)
            setTimeout(() => {
                const element = vm.$el
                const closeButton = element.querySelector('.close-button')
                expect(closeButton.textContent.trim()).to.eq('知道了')
                const useElement = vm.$el.querySelector('use')
                expect(useElement.getAttribute('xlink:href')).to.equal('#icon-close')
                closeButton.click()
                expect(callback).to.have.been.called
                div.remove()
                vm.$destroy()
            }, 2000)
            done()
        })
        it('接受 enableHtml', () => {
            vm = new Constructor({
                propsData: {enableHtml: true}
            })
            vm.$slots.default = '<strong id="test">hi</strong>'
            vm.$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
            vm.$destroy()
        })
        it('接受 position', () => {
            vm = new Constructor({
                propsData: {
                    position: 'bottom'
                }
            }).$mount()
            expect(vm.$el.classList.contains('toast-bottom')).to.eq(true)
            vm.$destroy()
        })
    })
})