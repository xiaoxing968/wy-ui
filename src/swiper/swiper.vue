<template>
  <div>
    <div class="w-swiper-window">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper",
  props: {
    value: {
      type: String,
      default: ''
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: { /* 自动切换间隔时间 */
      type: Number,
      default: 2000
    }
  },
  provide() {
    return {
      getSelected: () => this.selected // 将当前选中的swiper-item通知到各个节点
    }
  },
  data() {
    return {
      selectIndex: 0,
      selected: '',
      timeout: null
    }
  },
  created() {
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
    this.timeout = null
  },
  methods: {
    init() {
      this.selected = this.value || this.itemNames[this.selectIndex]
      this.selectIndex = this.getSelectedIndex()

      this.autoplay && this.autoNext()
    },
    getSelectedIndex() {
      return this.itemNames.indexOf(this.value || this.selected)
    },
    updateSelected() {
      this.selected = this.itemNames[this.selectIndex]
      this.$emit('update:value', this.selected)
    },
    autoNext() {
      if (this.timeout) {
        return
      }
      const play = () => {
        this.timeout = setTimeout(() => {
          this.prev()
          play()
        }, this.interval)
      }
      play()
    },
    next() {
      this.selectIndex === this.swiperItems.length - 1 ? this.selectIndex = 0 : this.selectIndex++
    },
    prev() {
      this.selectIndex === 0 ? this.selectIndex = this.swiperItems.length - 1 : this.selectIndex--
    }
  },
  computed: {
    swiperItems() {
      return this.$children.filter(vm => vm.$options.name === 'swiper-item') || []
    },
    itemNames() {
      return this.swiperItems.map(vm => vm.$props.name)
    },
  },
  watch: {
    selectIndex() {
      this.updateSelected()
    }
  }
}
</script>

<style scoped lang="less">
.w-swiper-window {
  position: relative;
  overflow: hidden;
}

</style>