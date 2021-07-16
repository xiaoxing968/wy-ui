<template>
  <div class="w-tabs" :class="tabsClasses">
    <tab-nav></tab-nav>
    <slot></slot>
  </div>
</template>

<script>
import TabNav from './tabNav'

export default {
  name: 'WTabs',
  components: { TabNav },
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    tabPosition: {
      type: String,
      default:"top",
      validator(value) {
        return ['top', 'left', 'right', 'bottom'].indexOf(value) > -1
      }
    }
  },
  provide () {
    return {
      tabsBus: this.tabsBus
    }
  },
  computed: {
    selectTab: {
      get: function () {
        return this.value
      },
      set: function (value) {
        this.$emit('input', value)
      }
    },
    tabsClasses () {
      let { tabPosition } = this
      return [
        `tab-${tabPosition}`
      ]
    }
  },
  data() {
    return {
      tabsBus: this
    }
  },
  created() {
    this.tabsBus.selectTab = this.value
  },
  mounted() {
    console.log(this,'mounted')
  },
  methods: {},
}
</script>

<style scoped lang="less">
@import "../css/app";
.w-tabs {
  display: flex;
  flex-direction: column;
  .w-tab__header-tab__header {
    margin-bottom: @padding-xs;
  }
  &.tab-bottom {
    flex-direction: column-reverse;
    .w-tab__header { margin-top: @padding-xs; }
  }
  &.tab-left, &.tabs-right {
    flex-direction: row;
    .w-tab__header { height: 100%; }
  }
  &.tab-left {
    flex-direction: row;
    .w-tab__header { margin-right: @padding-xs; }
  }
  &.tab-right {
    flex-direction: row-reverse;
    .w-tabs__content { width: 100%; }
    .w-tab__header { margin-left: @padding-xs; flex-shrink: 0; }
  }
}
</style>