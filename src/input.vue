<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text"
           :disabled="disabled"
           :readonly="readonly"
           :placeholder="placeholder"
           :style="inputStyle"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <w-icon name="error" class="icon-error"></w-icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
    <div v-if="hasRightIcon" ref="rightIcons" class="input-icons right" @click.stop="clearValue">
      <w-icon v-if="rightIcon && !$slots['right-icon']"
              class="right-icon" :name="rightIcon">
      </w-icon>
      <slot v-if="$slots['right-icon']" name="right-icon"></slot>
      <w-icon v-if="clearable" class="clear-icon"
              :class="{'visible': clearIconVisible}"
              name="close"
              >
      </w-icon>
    </div>
    <div v-if="hasLeftIcon" class="input-icons left">
      <slot v-if="$slots['left-icon']" name="left-icon"></slot>
      <w-icon v-else :name="leftIcon" class="left-icon"></w-icon>
    </div>
  </div>
</template>

<script>
import wIcon from "./icon";

export default {
  components: {wIcon},
  name: "wInput",
  props: {
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
    },
    error: {
      type: String,
    },
    clearable: {
      type: Boolean,
      default: false
    },
    rightIcon: {
      type: String,
      default: ''
    },
    leftIcon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  created() {},
  methods: {
    clearValue() {
      if (this.clearIconVisible) {
        this.$emit('input', '')
        this.$emit('clear', '')
      }
    }
  },
  computed: {
    hasLeftIcon() {
      return this.leftIcon || this.$slots['left-icon']
    },
    hasRightIcon() {
      return this.clearable || this.rightIcon || this.$slots['right-icon']
    },
    clearIconVisible() {
      return this.value.length > 0 && this.clearable
    },
    inputStyle() {
      const {hasLeftIcon, hasRightIcon} = this
      return {
        paddingRight: hasRightIcon ? '2.5em' : '1em',
        paddingLeft: hasLeftIcon ? '2.5em' : '1em'
      }
    }
  }
}

</script>
<style lang="less" scoped>
@import "./css/app";

@height: 32px;
@border-color: #d9d9d9;
@border-color-hover: #666;
@box-shadow-color: #67c23a36;
@red: #F1453D;
.wrapper {
  font-size: @font-size-normal;
  display: inline-block;
  > :not(:last-child) {
    margin-right: .2em;
  }

  > input {
    height: 32px;
    border: 1px solid @border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;

    &:hover {
      border-color: @main-theme-color;
    }

    &:focus {
      box-shadow: 0 0 0 2px @main-shadow-color;
      outline: none;
    }

    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
    }
  }

  &.error {
    > input {
      border-color: @red;
    }
  }

  .icon-error {
    fill: @red;
  }

  .errorMessage {
    color: @red;
  }
}
.input-icons {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;

  &.right { right: 1em; }

  &.left { left: 1em; }

  .w-icon {
    color: @icon-color-light;
    font-size: @font-size-md15;

    &.clear-icon {
      margin-left: @padding-sm;
      display: none;
      transition: all @animate-duration-regular;
      @media (any-hover: hover) {
        &:hover {
          color: @gray-6;
        }
      }

      &.visible { display: inline-block; }
    }
  }
}
</style>