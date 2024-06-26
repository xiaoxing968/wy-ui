<template>
  <button class="w-button" :class="{[`icon-${iconPosition} type-${type} size-${size}`]:true}" @click="$emit('click')">
    <w-icon class="loading icon" name="loading" v-if="loading"></w-icon>
    <w-icon class="icon" :name="icon" v-if="icon && !loading"></w-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import wIcon from "../icon"

export default {
  name: 'w-button',
  components: {wIcon},
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(val) {
        return val === 'left' || val === 'right'
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'normal',
      validator(val) {
        return val === 'normal' || val === 'success' || val === 'warning'
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(val) {
        return val === 'normal' || val === 'small' || val === 'mini'
      }
    },
  }
}
</script>
<style lang="less" scoped>
@import url('../css/app');

@keyframes spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

.w-button {
  font-size: @font-size-normal;
  height: @normal-height;
  border-radius: @border-radius;
  border: @button-border;
  padding: 0 1.5em;
  background: #ffffff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  transition: all .3s;

  &:hover {
    color: @main-hover-color;
    border-color: @main-active-color;
    cursor: pointer;
    fill: @main-hover-color
  }

  &:active {
    border: 1px solid @main-active-color;
  }

  &:focus {
    outline: none;
  }

  > .content {
    order: 2;
  }

  > .icon {
    order: 1;
    margin-right: .2em;
  }

  &.icon-right {
    > .content {
      order: 1;
    }

    > .icon {
      order: 2;
      margin-left: .2em;
      margin-right: 0
    }
  }

  .loading {
    animation: spin 1.2s infinite linear
  }
}

.w-button.type-success {
  background: @main-theme-color;
  color: #ffffff;
  fill: #ffffff;
  border-color: @main-theme-color;

  &:hover {
    border-color: @main-hover-color;
    background: @main-hover-color
  }

  &:active {
    border-color: @main-active-color;
    background: @main-active-color
  }
}

.w-button.type-warning {
  background: @main-warning-color;
  color: #ffffff;
  fill: #ffffff;
  border-color: @main-warning-color;

  &:hover {
    background: @main-warning-hover-color;
    border-color: @main-warning-hover-color;
  }

  &:active {
    border-color: @main-warning-color;
    background: @main-warning-active-color
  }
}

.size-small {
  height: @small-height;
  padding: 0 .7em;
}

.size-mini {
  height: @mini-height;
  padding: 0 .5em;
}
</style>