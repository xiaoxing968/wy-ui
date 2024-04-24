<template>
  <div class="w-menu-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WMenuItem",
  inject: ['root'],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selected: false
    }
  },
  created () {
    if (this.root.selected.indexOf(this.name) >= 0) {
      this.$parent.updateNamePath && this.$parent.updateNamePath()
    }
    this.root.addItem(this)
  },
  methods: {
    onClick () {
      this.root.namePath = []
      this.$parent.updateNamePath && this.$parent.updateNamePath()
      this.$emit('add:selected', this.name)
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/css/wy-ui.less";
.w-menu-item {
  padding: 10px 20px;
  position: relative;
  &.selected {
    color: @main-theme-color;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid @main-active-color;
      width: 100%;
    }
  }
}
.w-sub-menu .w-menu-item {
  &.selected {
    color: @main-theme-color;
    background: @gray-1;
    &::after {
      display: none;
    }
  }
}
</style>