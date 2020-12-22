<template>
  <svg class="w-icon">
    <use :xlink:href=`#icon-${name}`></use>
  </svg>
</template>
<script>
export default{
  props:['name']
}
</script>
<style lang="scss">
.w-icon {width: 1em;height: 1em;
  > .content {order: 2;}
  > .icon {order: 1; margin-right: .2em}
  &.icon-right {
    > .content {order: 1;}
    > .w-icon {order: 2;margin-left: .2em;margin-right: 0}
  }}
</style>