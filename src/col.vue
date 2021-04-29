<template>
  <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: "w-col",
  data() {
    return {}
  },
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
  },
  created() {
  },
  methods: {},
  components: {}
}

</script>
<style scoped lang="less">
.col {
  height: 100px;
  background: #bbbbbb;
  width: 50%;
  border: 1px solid red;
  .col-loop(@index) when (@index > 0) { /* recursive mixin with guard expression - condition */
    /* the statement */
    .col-@{index} {
      width: (@index / 24) * 100%;
    }
    /* end of the statement */
    .col-loop(@index - 1); /* the next iteration's call - final-expression*/
  }
  .col-loop(24);
}
</style>