<template>
  <div class="w-cascader-item" :style="{ height: height + 'px' }">
    <ul class="w-cascader-item-left w-scrollbar">
      <li class="label" :class="getLabelClasses(node)"
          v-for="(node,index) in source" :key="node[labelName] + index"
          @click="onClickLabel(node)">
        <span>{{ node[labelName] }}</span>
        <w-icon v-if="rightArrowVisible(node)" name="right"></w-icon>
        <w-icon v-if="loadingNodeValue === node[valueName]" name="loading" class="w-loading"></w-icon>
      </li>
    </ul>
    <div class="w-cascader-item-right" v-if="rightItems">
      <w-cascader-items v-model="newValue" :source="rightItems" :level="level+1" :lazy-load="lazyLoad"
                        :loading-node-value="loadingNodeValue" :options="options"
                        @closePopover="$listeners.closePopover" @change="change" @select="select($event)">
      </w-cascader-items>
    </div>
  </div>
</template>

<script>
import WIcon from '../icon'
import cascaderMixins from './cascaderMixins';

export default {
  name: 'WCascaderItems',
  mixins: [cascaderMixins],
  components: {
    WIcon
  },
  props: {
    loadingNodeValue: {
      type: String,
      default: ''
    }
  },
  computed: {
    currentItem() {
      const {level, newValue} = this
      return newValue[level]
    },
    rightItems() {
      const {currentItem, childrenName} = this
      return currentItem && currentItem[childrenName] ? currentItem[childrenName] : null
    }
  },
  data() {
    return {
      selectedNode: null
    }
  },
  methods: {
    getLabelClasses(node) {
      const {selectedNode, currentItem, valueName} = this
      const isSelected = (currentItem) => currentItem && node[valueName] === currentItem[valueName]
      return {
        'active': isSelected(currentItem),
        'focus': isSelected(selectedNode)
      }
    },
    rightArrowVisible(node) {
      const {lazyLoad, loadingNodeValue, childrenName, valueName, isLeafName} = this
      return lazyLoad ? !node[isLeafName] && loadingNodeValue !== node[valueName] : node[childrenName] && node[childrenName].length > 0
    },
    onClickLabel(node) {
      this.$parent.selectedNode = null
      this.selectedNode = node
      this.newValue.splice(this.level)
      this.$set(this.newValue, this.level, node)
      this.changeHandler(node)
    },
    changeHandler(node) {
      const {childrenName, lazyLoad, isLeafName} = this
      const {closePopover} = this.$listeners
      if (!node[childrenName] || node[childrenName].length === 0 || node[isLeafName]) {
        if (!lazyLoad || node[isLeafName]) {
          closePopover()
          this.change()
          return
        }
        this.select(node)
      }
    },
    select(node) {
      this.$emit('select', node)
    },
    change() {
      this.$emit('change', this.newValue)
    }
  }
}
</script>

<style lang="less">
@import url('../css/wy-ui.less');

.w-cascader-item {
  display: flex;
  align-items: flex-start;

  &-left {
    height: 100%;
    padding: 0;
    margin: 0;
    //overflow: auto;

    .label {
      min-width: @cascader-popover-min-width;
      padding: .5em 1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      white-space: nowrap;
      @media (any-hover: hover) {
        &:hover {
          background: @gray-1;
        }
      }

      .w-icon {
        font-size: @font-size-sm;
        color: @gray-5 !important;
      }

      &.active {
        font-weight: 600;
        color: @cascader-active-color;

        .w-icon { color: @cascader-active-color !important; }
      }

      &.focus { background: @gray-1; }

    }
  }

  &-right {
    border-left: @main-border;
  }

}
</style>
