<template>
  <button class="w-button" :class="{[`icon-${iconPosition}`]:true}">
    <w-icon class="icon" :name="icon" v-if="icon"></w-icon>
    <w-icon class="loading" name="loading"></w-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon";
export default {
  components: {Icon},
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
@keyframes spin {
  0% {transform:rotate(0deg)}
  100% { transform: rotate(360deg)}
}
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
  &:hover {border-color: var(--border-color-hover);}
  &:active {background-color: var(--button-active-bg);}
  &:focus {outline: none;}

    > .content {order: 2;}
    > .icon {order: 1; margin-right: .2em}
  &.icon-right {
    > .content {order: 1;}
    > .icon {order: 2;margin-left: .2em;margin-right: 0}
  }
  .loading{
    animation:spin 1.2s infinite linear;
  }
}
</style>