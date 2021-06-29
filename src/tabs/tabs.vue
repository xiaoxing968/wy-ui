<template>
  <div class="w-tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WTabs',
  components: {},
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    tabPosition: {
      type: String,
      validator (value) {
        return ['top', 'left', 'right', 'bottom'].indexOf(value) > -1
      }
    }
  },
  computed: {

  },
  data () {
    return {
    }
  },
  mounted () {
    console.log(this)
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
</style>