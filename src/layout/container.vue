<template>
  <div class="w-container" :class="containerClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WContainer',
  components: {},
  props: {
    direction: {
      type: String,
      validator(value) {
        return ['vertical', 'horizontal'].includes(value);
      }
    }
  },
  data() {
    return {
      containerClasses: {
        ['has-aside']: false,
        vertical: this.direction === 'vertical',
        horizontal: this.direction === 'horizontal',
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === 'WAside') {
        this.containerClasses['has-aside'] = true
      }
    })
  }
}
</script>

<style scoped lang="less">
.w-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  &.has-aside {
    flex-direction: row;
  }

  &.horizontal {
    flex-direction: row;
  }

  &.visibility {
    flex-direction: column;
  }
}
</style>