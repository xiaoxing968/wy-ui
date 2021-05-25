<template>
  <div class="container-footer" :style="{height: height + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
import layoutMixins from "./mixins/layoutMixins"
export default {
  name: 'WFooter',
  mixins:[layoutMixins],
  mounted() {
    this.fatherDetermine()
  },
}
</script>

<style scoped lang="less">
.container-footer {}
</style>