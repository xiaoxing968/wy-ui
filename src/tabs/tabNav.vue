<template>
  <div class="w-tab-nav__wrapper">
    <div class="w-tab-nav__scroll" :class="tabNavWrapperClasses">
    <tab-bar></tab-bar>
      <div class="w-tab-nav__item"
           :class="tabNavClasses(nav)"
           v-for="(nav, index) in tabPanes" :key="index"
           :ref="`tab-${nav.name}`"
           @click="clickNavItem(nav)"
      >
        <icon class="icon" :name="nav.icon" v-if="nav.icon"></icon>
        {{ nav.label }}
      </div>
  </div>
  </div>
</template>
<script>
import tabsMixin from "../mixins/tabsMixin";
import icon from '../icon'
import tabBar from './tab-bar'
import './tabNav.less'

export default {
  name: 'WTabNav',
  mixins: [tabsMixin],
  components: {icon, tabBar},
  props: {},
  data() {
    return {
      initIndex: 0,
    }
  },
  methods: {
    emitToTabBar(index) {
      this.$nextTick(() => {
        let {selectTab} = this.tabsBus
        let navTab = this.$refs[`tab-${selectTab}`]
        this.tabsBus.$emit('tabBar', index, navTab)
      })
    },
    clickNavItem(nav) {
      let {name, disabled} = nav
      if (disabled)return
      this.tabsBus.selectTab = name
    },
    tabNavClasses(nav) {
      let {name, disabled} = nav
      let {selectTab} = this.tabsBus
      return [
        selectTab === name ? 'nav-active' : '',
        disabled ? 'nav-disabled' : '',
        `w-tab-nav__item-${name}`
      ]
    },
  },
  mounted() {
    this.emitToTabBar(this.initIndex)
  },
  updated() {
    this.emitToTabBar(this.initIndex)
  },
}
</script>

<style scoped lang="less">
@import "../css/app";
@import './tabNav';
</style>