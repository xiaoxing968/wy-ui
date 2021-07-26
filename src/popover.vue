<template>
  <div class="w-popover-wrapper" @click="togglePopover" ref="popover">
    <div class="w-popover-content" :class="contentClasses" ref="content" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <div class="w-popover-trigger" ref="trigger">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WPopover',
  components: {
  },
  props: {
    placement: {
      type: String,
      default: 'top',
      validator (value) {
        return [ 'top', 'left', 'bottom', 'right' ].indexOf(value) > -1
      }
    }
  },
  computed: {
    contentClasses () {
      let { placement } = this
      return [
        `popover-content__${placement}`
      ]
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    positionContent () {
      document.body.appendChild(this.$refs.content)
      let { content, trigger } = this.$refs
      let { top, left, height, width } = trigger.getBoundingClientRect()
      let contentTop = top
      let contentLeft = left
      let { placement } = this
      let { height:contentHeight } = content.getBoundingClientRect()
      switch (placement) {
        case 'bottom': contentTop = top + height; break
        case 'right': contentLeft = left + width; break
      }
      if (placement === 'left' || placement === 'right') {
        contentTop = top - ( contentHeight - height ) / 2
      }
      content.style.top = contentTop + window.scrollY + 'px'
      this.$refs.content.style.left = contentLeft + window.scrollX + 'px'
    },
    toggleHandler (e) {
      if (this.$refs.popover !== e.target && !this.$refs.popover.contains(e.target)) {
        this.contentClose()
      }
    },
    contentShow () {
      this.visible = true
      setTimeout(() => {
        this.positionContent()
        document.addEventListener('click', this.toggleHandler)
      })
    },
    contentClose () {
      this.visible = false
      document.removeEventListener('click', this.toggleHandler)
    },
    togglePopover (event) {
      if (this.$refs.trigger.contains(event.target)) {
        if (this.visible) {
          this.contentClose()
        } else {
          this.contentShow()
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
@import url('./css/app');
.w-popover-wrapper {
  position: relative;
  display: inline-block;
  font-size: @font-size-normal;
  .w-popover-trigger { display: inline-block; }
}
.w-popover-content {
  position: absolute;
  padding: @padding-sm 1em;
  min-width: 150px;
  max-width: 20em;
  background: @white;
  border: @main-border;
  border-radius: @border-radius;
  filter: drop-shadow(@popover-shadow);
  font-size: @font-size-normal;
  word-break: break-all;
  &::after, &&::before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;
  }
  &.popover-content__top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::after, &&::before { left: 10px; }
    &::before { top: 100%; border-top-color: @border-color-main; }
    &::after { top: calc(100% - 1px); border-top-color: @white; }
  }
  &.popover-content__left {
    transform: translateX(-105%);
    &::after, &&::before { top: 50%; transform: translateY(-50%);}
    &::before { left: 100%; border-left-color: @border-color-main; }
    &::after { left: calc(100% - 1px); border-left-color: @white; }
  }
  &.popover-content__right {
    margin-left: @padding-sm + 2;
    &::after, &&::before { top: 50%; transform: translateY(-50%);}
    &::before { right: 100%; border-right-color: @border-color-main; }
    &::after { right: calc(100% - 1px); border-right-color: @white; }
  }
  &.popover-content__bottom {
    margin-top: 10px;
    &::after, &&::before { left: 10px; }
    &::before { bottom: 100%; border-bottom-color: @border-color-main; }
    &::after { bottom: calc(100% - 1px); border-bottom-color: @white; }
  }
}
</style>