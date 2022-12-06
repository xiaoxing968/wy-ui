import chai, {expect} from 'chai'
import {shallowMount, mount} from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import vueApp from "@/main";

import Vue from 'vue/dist/vue.esm.js'

import Toast from '@/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

chai.use(sinonChai)

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })
    describe('props', () => {
        let wrapper
        const div = document.createElement('div')
        document.body.appendChild(div)
        it('可以设置duration', (done) => {
            wrapper = shallowMount(Toast, {
                attachTo: div,
                propsData: {
                    duration: 200
                }
            })
            const element = wrapper.vm.$el
            setTimeout(() => {
                expect(document.body.contains(element)).to.eq(false)
                div.remove()
                wrapper.destroy()
                done()
            }, 300)
        })
        it('可以设置showClose / closeButton', () => {
            const callback = sinon.fake();
            wrapper = mount(Toast, {
                propsData: {
                    showClose: true,
                    closeButton: {
                        text: '知道了',
                        icon: 'close',
                        onClose: callback
                    }
                }
            })
            const element = wrapper.vm.$el
            const closeButton = element.querySelector('.close-button')
            expect(closeButton.textContent.trim()).to.eq('知道了')
            const useElement = element.querySelector('use')

            expect(useElement.getAttribute('xlink:href')).to.equal('#icon-close')
            closeButton.click()
            expect(callback).to.have.been.called
            div.remove()
            wrapper.destroy()
        })
        it('接受 enableHtml', () => {
            vueApp.$toast({
                message: `<strong id="test">hi</strong>`,
                enableHtml: true,
                duration: 200
            })
            const strong = document.body.querySelector('#test')
            expect(strong).to.exist
            vueApp.$destroy()
        })
        it('可以设置 position', () => {
            wrapper = mount(Toast, {
                propsData: {
                    position: 'bottom'
                }
            })
            expect(wrapper.classes('toast-bottom')).to.eq(true)
            wrapper.destroy()
        })
    })
})
