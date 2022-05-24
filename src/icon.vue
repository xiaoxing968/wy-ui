<template>
  <svg class="w-icon wui">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
// import './svg'
export default{
  props:['name']
}
</script>
<style lang="less">
.w-icon {width: 1em;height: 1em; vertical-align:middle;}
</style>