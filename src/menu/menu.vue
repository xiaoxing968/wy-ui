<template>
  <div class="w-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WMenu",
  provide () {
    return {
      root: this
    }
  },
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      items: [],
      namePath: []
    }
  },
  mounted () {
    this.updateChildren()
    this.listenToChildren()
  },
  updated () {
    this.updateChildren()
  },
  methods: {
    addItem (vm) {
      this.items.push(vm)
    },
    updateChildren () {
      this.items.forEach(vm => {
        if (this.selected.indexOf(vm.name) >= 0) {
          vm.selected = true
        } else {
          vm.selected = false
        }
      })
    },
    listenToChildren () {
      this.items.forEach(vm => {
        vm.$on('add:selected', (name) => {
          if (this.multiple) {
            if (this.selected.indexOf(name) < 0) {
              let copy = JSON.parse(JSON.stringify(this.selected))
              copy.push(name)
              this.$emit('update:selected', copy)
            }
          } else {
            this.$emit('update:selected', [name])
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/css/wy-ui.less";
.w-menu {
  display: flex;
  border-bottom: 1px solid @gray-1;
  font-size: @font-size-normal;
  color: @font-color-normal;
  cursor: default;
  user-select: none;
}
</style>