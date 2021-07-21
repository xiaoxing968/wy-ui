<template>
  <div class="w-tab-pane" v-show="tabsBus.selectTab === name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WTab',
  inject: ['tabsBus'],
  components: {},
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: [String, Number],
      required: true
    },
    icon: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  created() {
    this.tabsBus.$emit('getTabProps', this.$props)
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
</style>