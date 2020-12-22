<template>
  <button class="w-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg class="icon" v-if="icon">
      <use :xlink:href=`#icon-${icon}`></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  // props:['icon','iconPosition'],
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(val){
        console.log(val === 'left')
        return val === 'left' || val === 'right'
      }
    }
  }
}
</script>
<style lang="scss">
.w-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 .7em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align:middle;
  & .icon {width: 1em;height: 1em;}
  &:hover {border-color: var(--border-color-hover);}
  &:active {background-color: var(--button-active-bg);}
  &:focus {outline: none;}
    > .content {order: 2;}
    > .icon {order: 1; margin-right: .2em}
  &.icon-right {
    > .content {order: 1;}
    > .icon {order: 2;margin-left: .2em;margin-right: 0}
  }
}
</style>