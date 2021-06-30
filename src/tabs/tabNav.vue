<template>
  <div class="tab-nav__wrapper">
    <div class="tab-nav__item"
         :class="{navActive : tabsBus.selectTab === nav.name,}"
         v-for="(nav, index) in tabPanes" :key="index"
         @click="clickNavItem(nav.name)">
      <w-icon class="icon" :name="nav.icon" v-if="nav.icon"></w-icon>
      {{ nav.label }}
    </div>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import tabsMixin from "../mixins/tabsMixin";
import icon from '../icon'
import tabBar from './tab-bar'

export default {
  name: 'WTabNav',
  mixins: [tabsMixin],
  components: {icon,tabBar},
  props: {},
  data() {
    return {
    }
  },
  methods: {
    clickNavItem(name) {
      console.log(name)
      this.tabsBus.selectTab = name
    },
    tabNavClasses(nav) {
      let {name, disabled} = nav
      let {selectTab} = this.tabsBus
      return [
        selectTab === name ? 'nav-active' : '',
        disabled ? 'nav-disabled' : ''
      ]
    },
  }
}
</script>

<style scoped lang="less">
@import "../css/app";
.tab-nav__wrapper{
  height: 100%;
  display: flex;
  position: relative;
  .tab-nav__item{
    display: flex;
    height: @item-height-regular;
    flex-shrink: 0;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2em;
    &.nav-active, &:hover { color: @main-theme-color; cursor: pointer; }
  }
  &:after{
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #e4e7ed;
      z-index: 1;
  }
}
</style>