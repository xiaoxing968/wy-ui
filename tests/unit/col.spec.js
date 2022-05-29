// const expect = chai.expect;
import chai, {expect} from 'chai'
import {shallowMount, mount} from '@vue/test-utils'
import Vue from 'vue/dist/vue.esm.js'

import Col from '@/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.be.ok
    })
    describe('Props', () => {
        let wrapper
        afterEach(() => {
            wrapper.destroy()
        })
        it('可以设置span', () => {
            wrapper = shallowMount(Col, {
                propsData: {
                    span: 1
                }
            })
            expect(wrapper.classes('col-1')).to.equal(true)
        })
        it('可以设置offset', () => {
            wrapper = shallowMount(Col, {
                propsData: {
                    offset: 1
                }
            })
            expect(wrapper.classes('offset-1')).to.equal(true)
        })
        it('可以设置ipad/ narrowPc/ pc/ widePc', () => {
            ['ipad', 'narrowPc', 'pc', 'widePc'].forEach(form => {
                wrapper = shallowMount(Col, {
                    propsData: {
                        [form]: {span: 1, offset: 1}
                    }
                })
                let formName = form === 'narrowPc' ? 'narrow-pc' : form === 'widePc' ? 'wide-pc' : form
                expect(wrapper.classes(`col-${formName}-1`)).to.eq(true)
                expect(wrapper.classes(`offset-${formName}-1`)).to.eq(true)
            })
        })
    })
})