<template>
  <div class="container-main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WMain'
}
</script>

<style scoped lang="less">
.container-main {
  flex-grow: 1;
}
</style>