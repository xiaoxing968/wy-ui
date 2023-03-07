<template>
  <div>
    <div class="w-swiper-container"
         @mouseenter="pause"
         @mouseleave="autoNext"
    >
      <div class="w-swiper-window">
        <slot/>
      </div>
      <div class="w-swiper-actions">
        <span class="w-swiper-arrow w-swiper-prev" @click="prev"> < </span>
        <span class="w-swiper-arrow w-swiper-next" @click="next"> > </span>
      </div>
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
      getSelected: () => this.selected, // 将当前选中的swiper-item通知到各个节点
      getReverse: () => this.reverse // 动画是否正向
    }
  },
  data() {
    return {
      selectIndex: 0,
      selected: '',
      timeout: null,
      reverse: false
    }
  },
  created() {
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.pause()
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
          this.next()
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
    },
    pause() {
      clearTimeout(this.timeout)
      this.timeout = null
    },
    // 设置当前动画是否为反向
    setReverse(val, oldVal) {
        if ((val === this.swiperItems.length - 1 && oldVal === 0) || val < oldVal) {
          this.reverse = true
        }
        if (val > oldVal || (val === 0 && oldVal === this.swiperItems.length - 1)){
          this.reverse = false
        }
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
    selectIndex(val, oldVal) {
      console.log(val, oldVal)
      this.setReverse(val, oldVal)
      this.updateSelected()
    }
  }
}
</script>

<style scoped lang="less">
.w-swiper-container {
  position: relative;

  .w-swiper-window {
    position: relative;
    overflow: hidden;
  }

  .w-swiper-actions {
    display: flex;
    justify-content: center;
    align-items: center;

    .w-swiper-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
      height: 20px;
      line-height: 20px;
      text-align: center;
      width: 20px;
      background: red;
      cursor: pointer;
    }

    .w-swiper-prev {
      left: 10px;
    }

    .w-swiper-next {
      right: 10px;
    }
  }
}


</style>