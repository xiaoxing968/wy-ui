<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [String, Number],
      default: ''
    },
    offset: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      gutter: 0
    }
  },
  computed: {
    colClasses () {
      let { span, offset } = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`
      ]
    },
    colStyle () {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px',
      }
    }
  }
}
</script>

<style scoped lang="less">
.col {
  height: 40px;
  border-radius: 4px;
  box-sizing: border-box;
}
.col-loop(@index) when (@index > 0) {
  .col-@{index} {
    width: (@index / 24) * 100%;
  }
  .col-loop(@index - 1);
}
.col-loop(24);
.offset-loop(@index) when (@index > 0) {
  .offset-@{index} {
    margin-left: (@index / 24) * 100%;
  }
  .offset-loop(@index - 1);
}
.offset-loop(24);
</style>