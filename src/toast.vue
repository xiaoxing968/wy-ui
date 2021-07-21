<template>
  <div class="toast-wrapper" :class="toastClasses">
    <div class="toast flex-box" ref="toast">
      <div class="message">
        <div v-if="enableHtml" v-html="$slots.default"></div>
        <slot v-else></slot>
      </div>
      <div class="line" ref="line" v-if="showClose"></div>
      <div class="close-button flex-box" v-if="showClose" @click.stop="clickCloseButton">
        <span v-if="closeButton.text">{{ closeButton.text }}</span>
        <w-icon v-if="closeButton.icon" :name="closeButton.icon" style="margin-left: 3px"></w-icon>
      </div>
    </div>
  </div>
</template>

<script>
import WIcon from './icon'

export default {
  name: 'WToast',
  components: {
    XIcon: WIcon
  },
  props: {
    duration: {
      type: Number,
      default: 3000
    },
    showClose: {
      type: Boolean,
      default: false
    },
    enableHtml: {
      type: [Boolean,String],
      default: false
    },
    closeButton: {
      type: Object,
      default: () => ({
        text: '关闭',
        icon: '',
        onClose: () => {
        }
      })
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    toastClasses() {
      return {
        [`toast-${this.position}`]: true
      }
    }
  },
  created() {
    if (this.duration) {
      this.close()
    }
  },
  mounted() {
    if (this.showClose) {
      this.updateStyle()
    }
  },
  methods: {
    updateStyle() {
      this.$nextTick(() => {
        if (this.$refs.line) {
          this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
        }
      })
    },
    clickCloseButton() {
      this.close('more')
      if (this.closeButton && this.closeButton.onClose) {
        this.closeButton.onClose(this)
      }
    },
    close(more) {
      setTimeout(() => {
        this.$el.remove()
        this.$destroy()
      }, more ? 0 : this.duration)
    },
  }
}
</script>

<style scoped lang="less">
@import "./css/app.less";
.toast-wrapper {
  position: fixed;
  left: 50%;

  &.toast-top {
    top: @padding-lg;
    transform: translateX(-50%);

    .toast {
      animation: slide-down @animate-duration-regular;
    }
  }

  &.toast-bottom {
    bottom: @padding-lg;
    transform: translateX(-50%);

    .toast {
      animation: slide-up @animate-duration-regular;
    }
  }

  &.toast-middle {
    top: 50%;
    transform: translate(-50%, -50%);

    .toast {
      animation: fade-in @animate-duration-regular;
    }
  }

  .toast {
    background: @toast-bg;
    border-radius: @border-radius;
    box-shadow: @toast-box-shadow;
    color: @toast-color;
    font-size: @font-size-normal;
    line-height: 2;
    min-height: 40px;
  }

  .message {
    padding: 8px 1.2em;
    flex-shrink: 0
  }

  .close-button {
    flex-shrink: 0;
    padding: 0 1.2em;
    cursor:pointer;
    > span {
      flex-shrink: 0
    }
  }
  .line {
    width: 1px;
    background: #646566;
    flex-shrink: 0;
  }
}
</style>