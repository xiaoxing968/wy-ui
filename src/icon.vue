<template>
  <svg class="w-icon wui">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>

export default{
  name: 'icon',
  props:['name'],
  mounted() {
    import('./svg').then()
  }
}
</script>
<style lang="less">
.w-icon {width: 1em;height: 1em; vertical-align:middle;}
</style>