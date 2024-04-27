<template>
  <div class="wy-pager" :class="{hide: hideIfOnePage === true && totalPage <= 1}">
    <span class="wy-pager-nav prev" :class="{disabled:current===1}"
          @click="onClickPage(current-1)">
      <w-icon name="left"></w-icon>
    </span>
    <template v-for="page in pages">
      <template v-if="page === current">
        <span class="wy-pager-item current">{{ page }}</span>
      </template>
      <template v-else-if="page === '...'">
        <w-icon class="wy-pager-separator" name="dots"></w-icon>
      </template>
      <template v-else>
        <span class="wy-pager-item other" @click="onClickPage(page)">{{ page }}</span>
      </template>
    </template>
    <span class="wy-pager-nav next" :class="{disabled: current===totalPage}"
          @click="onClickPage(current+1)">
      <w-icon name="right"></w-icon>
    </span>
  </div>
</template>

<script>
import WIcon from '../icon'

export default {
  name: "WPager",
  components: {WIcon},
  props: {
    // 总数
    total: {
      type: Number,
      required: true
    },
    // 当前页码
    current: {
      type: Number,
      required: true
    },
    // 每页显示多少条
    pageSize: {
      type: Number,
      default: 10
    },
    // 只有一页时 是否隐藏分页器
    hideIfOnePage: {
      type: Boolean,
      default: true
    },
    // 是否显示总条数
    totalVisible: {
      type: Boolean,
      default: true
    },
    // 可选择的pageSize
    pageSizeOptions: {
      type: Array,
      default: () => [10, 20, 50, 100]
    }
  },
  computed: {
    // 计算出总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    },
    // 当前可选择的页码 以及省略号
    pages() {
      return unique([1, this.totalPage,
        this.current,
        this.current - 1, this.current - 2,
        this.current + 1, this.current + 2]
          .filter((n) => n >= 1 && n <= this.totalPage)
          .sort((a, b) => a - b))
          .reduce((prev, current, index, array) => {
            prev.push(current)
            array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('...')
            return prev
          }, [])
    }
  },
  methods: {
    onClickPage(current) {
      if (current >= 1 && current <= this.totalPage) {
        this.$emit('update:current', current)
      }
    }
  }
}

function unique(array) {
  // return [...new Set(array)]
  // array = [1 1 2 3 4 5 20]
  const object = {}
  array.map((number) => {
    object[number] = true
  })
  return Object.keys(object).map((s) => parseInt(s, 10))

}
</script>
<style scoped lang="less">
@import "~@/css/wy-ui.less";

.wy-pager {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  @width: 20px;
  @height: 20px;
  @font-size: 12px;

  &.hide {
    display: none;
  }

  &-separator {
    width: @width;
    font-size: @font-size;
  }

  &-item {
    min-width: @width;
    height: @height;
    font-size: @font-size;
    border: 1px solid #e1e1e1;
    border-radius: @border-radius;
    padding: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
    cursor: pointer;

    &.current, &:hover {
      border-color: @main-active-color;
      transition: border-color .3s;
    }

    &.current {
      cursor: default;
    }
  }

  &-nav {
    margin: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: @gray-1;
    height: @height;
    width: @width;
    border-radius: @border-radius;
    font-size: @font-size;
    cursor: pointer;

    &.disabled {
      cursor: default;

      svg {
        transition: all .3s;
        fill: darken(@gray-1, 30%);
      }
    }
  }
}
</style>
