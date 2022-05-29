import chai, {expect} from 'chai'
import {shallowMount, mount} from '@vue/test-utils'

import Row from '@/grid/row'
import Col from '@/grid/col'


describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })
    describe('props', () => {
        let div
        let wrapper
        beforeEach(() => {
            div = document.createElement('div')
            document.body.appendChild(div)
        })
        afterEach(() => {
            div.remove()
            wrapper.destroy()
        })
        it('可以设置gutter', () => {
            wrapper = shallowMount(Row, {
                attachTo: div,
                propsData: {gutter: 20},
                slots: {default: [Col]},
                stubs: {Col}
            })
            const row = wrapper.vm.$el
            expect(getComputedStyle(row).marginLeft).to.equal('-10px')
            expect(getComputedStyle(row).marginRight).to.equal('-10px')
            const {paddingLeft, paddingRight} = wrapper.vm.$children[0].colStyle
            expect(paddingLeft).to.equal('10px')
            expect(paddingRight).to.equal('10px')
        })
        it('可以设置align', () => {
            wrapper = mount(Row, {
                attachTo: div,
                propsData: {align: 'right'}
            })
            // const element = wrapper.vm.$el
            expect(wrapper.classes('align-right')).to.eq(true)
            // expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
        })
    })

})