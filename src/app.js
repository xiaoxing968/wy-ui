import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import IconGroup from './button-group'
Vue.component("w-button", Button)
Vue.component("w-icon", Icon)
Vue.component("w-button-group", IconGroup)
new Vue({
    el:"#app",
    data:{
        loading: false,
    }
})