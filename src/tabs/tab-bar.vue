<template>
  <div class="w-tab__active-bar" :style="barStyle">
  </div>
</template>

<script>
import tabsMixin from "../mixins/tabsMixin";
export default {
  name: 'WTabBar',
  mixins: [tabsMixin],
  components: {
  },
  props: {
    propName: {
      type: Number,
      default: 0
    },
  },
  data () {
    return {
      barStyle: {}
    }
  },
  methods: {
  },
  mounted() {
    this.tabsBus.$on('tabBar', (index,navTab) => {
      let { isVertical } = this
      let { tabPosition } = this.tabsBus
      navTab = navTab[0];//@TODO
      let navTabStyle = window.getComputedStyle(navTab)
      let { paddingLeft, paddingRight } = navTabStyle
      let width = navTab.getBoundingClientRect().width - (parseFloat(paddingLeft) + parseFloat(paddingRight))
      let translate = isVertical ? navTab.offsetTop : navTab.offsetLeft + parseFloat(paddingLeft)
      let style = isVertical ?
          {
            top: `${translate}px`,
            width: '2px',
            height: '40px',
            left: tabPosition === 'left' ? '' : 0,
            right: tabPosition === 'left' ? 0 : ''
          } :
          {
            left: `${translate}px`, width: `${width}px`
          }
      this.barStyle = style
    })
  }
}
</script>

<style scoped lang="less">
@import "../css/app";
.w-tab__active-bar {
  position: absolute;
  bottom: 0;
  z-index: 99;
  height: 2px;
  background: @main-theme-color;
  transition: all .5s;
}
</style>