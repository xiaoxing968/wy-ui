import Vue from "vue";
import App from "./App.vue";
import toast from "@/plugin/toast"
Vue.config.productionTip = false;

Vue.use(toast)

const vueApp = new Vue({
    render: (h) => h(App),
})
vueApp.$mount("#app")

export default vueApp