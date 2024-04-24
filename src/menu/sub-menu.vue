<template>
  <div class="w-sub-menu" :class="{active}" v-click-outside="close">
    <span class="w-sub-menu-label" @click="onClick">
      <slot name="title"></slot>
      <span class="w-sub-menu-icon" :class="{open}">
        <w-icon name="down"></w-icon>
      </span>
    </span>
    <div class="w-sub-menu-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ClickOutside from '@/utils/click-outside'
import WIcon from '../icon'
export default {
  components: { WIcon },
  directives: { ClickOutside },
  name: "WSubMenu",
  inject: ['root'],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      open: false,
      type: 'mouseover'
    }
  },
  computed: {
    active () {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false
    }
  },
  methods: {
    onClick () {
      this.open = !this.open
    },
    close () {
      this.open = false
    },
    updateNamePath () {
      this.root.namePath.unshift(this.name)
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath()
      } else {
        // this.root.namePath = []
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/css/wy-ui.less";
.w-sub-menu {
  position: relative;
  &.active {
    color: @main-theme-color;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid @main-theme-color;
      width: 100%;
    }
    .w-sub-menu-icon { fill: @main-theme-color; }
  }
  &-label { padding: 10px 20px; display: block; }
  &-popover {
    background: white;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    white-space: nowrap;
    box-shadow: 0 0 3px fade_out(black, 0.8);
    border-radius: @border-radius;
    font-size: @font-size-normal;
    color: @font-color-normal;
    min-width: 8em;
  }
}
.w-sub-menu .w-sub-menu {
  &.active {
    &::after {
      display: none;
    }
  }
  .w-sub-menu-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
  .w-sub-menu-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.w-sub-menu-icon {
  transition: transform 250ms;
  display: inline-flex;
  margin-left: 1em;
  svg {fill: @font-size-normal;}
  &.open {
    transform: rotate(180deg);
  }
}
</style>