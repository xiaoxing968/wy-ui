<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <div style="border: 1px solid red">
      <slot></slot>
    </div>
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
  data() {
    return {
      gutter: 0
    }
  },
  computed: {
    colClasses() {
      let {span, offset} = this
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`
      ]
    },
    colStyle() {
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
  //background: @gray-2;
  //border: 1px solid @gray-4;
  border-radius: 4px;
  width: 50%;
  box-sizing: border-box;
}

.col-loop(@index) when (@index > 0) { /* recursive mixin with guard expression - condition */
  /* the statement */
  .col-@{index} {
    width: (@index / 24) * 100%;
  }
  /* end of the statement */
  .col-loop(@index - 1); /* the next iteration's call - final-expression*/
}

.col-loop(24);
.offset-loop(@index) when (@index > 0) { /* recursive mixin with guard expression - condition */
  /* the statement */
  .offset-@{index} {
    margin-left: (@index / 24) * 100%;
  }
  /* end of the statement */
  .offset-loop(@index - 1); /* the next iteration's call - final-expression*/
}

.offset-loop(24);
</style>