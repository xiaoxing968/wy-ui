<template>
  <div class="row" :class="rowClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: [String, Number],
      default: ''
    },
    align: {
      type: String,
      validator(value) {
        return ['center', 'left', 'right'].includes(value);
      }
    }
  },
  computed: {
    rowClass() {
      let {align} = this
      return align && `align-${align}`
    },
    rowStyle() {
      let {gutter} = this
      return {
        marginLeft: -gutter / 2 + 'px',
        marginRight: -gutter / 2 + 'px'
      }
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  }
}
</script>

<style scoped lang="less">
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start
  }

  &.align-right {
    justify-content: flex-end
  }

  &.align-center {
    justify-content: center
  }
}
</style>