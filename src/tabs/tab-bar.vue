<template>
  <div class="w-tab__active-bar">
    hi
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
    console.log(this.tabsBus,'q');
    this.tabsBus.$on('tabBar', (index, navTab) => {
      let { isVertical } = this
      let { tabPosition } = this.tabsBus
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
      console.log(this.barStyle)
    })
  }
}
</script>

<style scoped lang="less">
</style>