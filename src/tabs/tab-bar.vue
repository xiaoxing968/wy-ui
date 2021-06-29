<template>
  <div class="w-tab__active-bar">
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
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
</style>