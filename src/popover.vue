<template>
  <div class="w-popover-wrapper" @click="triggle">
    <div class="w-popover-content" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WPopover',
  components: {
  },
  props: {
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    triggle () {
      this.visible = !this.visible
    }
  }
}
</script>

<style scoped lang="less">
@import url('./css/app');
.w-popover-wrapper {
  position: relative;
  display: inline-block;
  font-size: @font-size-normal;
  .w-popover-content {
    position: absolute;
    bottom: 40px;
    left: 0;
    padding: @padding-base 1em;
    min-width: 120px;
    border: 1px solid @gray-2;
  }
}
</style>