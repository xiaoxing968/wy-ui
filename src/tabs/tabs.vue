<template>
  <div class="w-tabs">
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
</style>