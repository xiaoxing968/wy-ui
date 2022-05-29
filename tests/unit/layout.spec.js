import chai, {expect} from 'chai'
import {shallowMount, mount} from '@vue/test-utils'
import Vue from 'vue/dist/vue.esm.js'

import Container from '@/layout/container'
import Aside from '@/layout/aside'
import Header from '@/layout/header'
import Footer from '@/layout/footer'
import Main from '@/layout/footer'

describe('container', () => {
    it('存在.', () => {
        expect(Container).to.be.ok
    })
    describe('Props', () => {
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
        it('container可以设置direction', () => {
            wrapper = shallowMount(Container, {
                attachTo: div,
                propsData: {
                    direction: 'horizontal'
                }
            })
            const element = wrapper.vm.$el
            expect(getComputedStyle(element).flexDirection).to.equal('row')
        })
    })
    describe('prompRules', () => {
        it('有aside组件时排列为row', () => {
            const wrapper = shallowMount(Aside, {
                parentComponent: Container
            })
            const containerClass = wrapper.vm.$parent.containerClasses['has-aside']
            expect(containerClass).to.eq(true)
            wrapper.destroy()
        })
    })
})

describe('layout-children', () => {
    it('Aside存在.', () => {
        expect(Aside).to.be.ok
    })
    it('Header存在.', () => {
        expect(Header).to.be.ok
    })
    it('Main存在.', () => {
        expect(Main).to.be.ok
    })
    it('Footer存在.', () => {
        expect(Footer).to.be.ok
    })
    describe('Props', () => {
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
        it('aside可以设置width', () => {
            wrapper = shallowMount(Aside, {
                attachTo: div,
                propsData: {
                    width: 80,
                },
                parentComponent: Container
            })
            const aside = wrapper.vm.$el.querySelector('.container-aside')
            expect(getComputedStyle(aside).width).to.equal('80px')
        })
        it('header可以设置height', () => {
            wrapper = shallowMount(Header, {
                attachTo: div,
                propsData: {
                    height: 70,
                },
                parentComponent: Container
            })
            const header = wrapper.vm.$el
            expect(getComputedStyle(header).height).to.equal('70px')
        })
        it('footer可以设置height', () => {
            wrapper = shallowMount(Footer, {
                attachTo: div,
                propsData: {
                    height: 60,
                },
                parentComponent: Container
            })
            const footer = wrapper.vm.$el
            expect(getComputedStyle(footer).height).to.equal('60px')
        })
    })
})
