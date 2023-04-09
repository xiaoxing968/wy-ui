<template>
  <div>
    <div class="w-swiper-container"
         @mouseenter="pause"
         @mouseleave="autoNext"
    >
      <div class="w-swiper-window">
        <slot/>
      </div>
      <div class="w-swiper-actions" v-if="arrowVisible">
        <span class="w-swiper-arrow w-swiper-prev" @click="prev">
          <w-icon class="w-swiper-arrow-icon" name="left"></w-icon>
        </span>
        <span class="w-swiper-arrow w-swiper-next" @click="next">
          <w-icon class="w-swiper-arrow-icon" name="right"></w-icon>
        </span>
      </div>
      <div class="w-swiper-dots-container">
        <span
            v-for="(dot, index) in itemCount"
            :key="dot"
            :class="{ active: index === selectIndex}"
            @click="onDotClick(index)"
            class="w-swiper-dot">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import WIcon from '@/icon'

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
    },
    arrowVisible: { /* 是否显示左右箭头 */
      type: Boolean,
      default: true
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
      reverse: false,
      itemCount: 0,
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
      this.reverse = false
      this.selectIndex === this.swiperItems.length - 1 ? this.selectIndex = 0 : this.selectIndex++
    },
    prev() {
      this.reverse = true
      this.selectIndex === 0 ? this.selectIndex = this.swiperItems.length - 1 : this.selectIndex--
    },
    onDotClick(index) {

      this.selectIndex = index
    },
    pause() {
      clearTimeout(this.timeout)
      this.timeout = null
    },
    // 设置当前动画是否为反向
    setReverse(index) {
      this.reverse = this.selectIndex > index;
    },
    /**
     * @description 对外暴露的方法，手动选中当前面板 接受参数为swiper-item的name值或者index
     * @param { Number | String } param
     * @return void
     *  */
    setActiveItem(param) {
      if (typeof param === 'undefined') {
        return console.warn('参数接收一个name值或者index')
      }
      let index = 0
      if (this.itemNames.includes(param)) {
        index = this.itemNames.indexOf(param)
      } else if (typeof param === 'number') {
        index = param
      }
      this.setReverse(index)
      this.selectIndex = index
      this.pause()
      this.autoplay && this.autoNext()
    }
  },
  computed: {
    swiperItems() {
      return this.$children.filter(vm => vm.$options.name === 'swiper-item') || []
    },
    itemNames() {
      this.itemCount = this.swiperItems.length
      return this.swiperItems.map(vm => vm.$props.name)
    }
  },
  watch: {
    selectIndex(val, oldVal) {
      this.updateSelected()
      this.$emit('change', val, oldVal)
    }
  },
  components: {WIcon}
}
</script>

<style scoped lang="less">
@dot-active-color: white;
@operate-color: #c6c6c6;
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
      line-height: 20px;
      text-align: center;
      cursor: pointer;
      width: 25px;
      height: 25px;
      font-size: 25px;
      border: 2px solid @operate-color;
      border-radius: 50%;
      transition: all .3s;

      &-icon {
        fill: @operate-color;
        transition: all .3s;
      }

      &:hover {
        border-color: @dot-active-color;

        .w-swiper-arrow-icon {
          fill: @dot-active-color;
        }
      }
    }

    .w-swiper-prev {
      left: 10px;
    }

    .w-swiper-next {
      right: 10px;
    }
  }

  .w-swiper-dots-container {
    position: absolute;
    display: flex;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);

    .w-swiper-dot {
      position: relative;
      display: inline-block;
      flex: 0 1 auto;
      box-sizing: content-box;
      width: 16px;
      height: 3px;
      margin: 0 3px;
      padding: 0;
      text-align: center;
      text-indent: -999px;
      vertical-align: top;
      transition: all .5s;
      background: @operate-color;
      cursor: pointer;

      &:hover {
        background-color: @dot-active-color;
      }

      &.active {
        background-color: @dot-active-color;
      }
    }
  }
}


</style>