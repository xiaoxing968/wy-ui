<template>
  <div class="w-tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WTab',
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
    // this.tabsBus.$emit('getTabProps', this.$props)
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
</style>