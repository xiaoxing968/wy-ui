<template>
  <div class="lock-code" @click="showCode(isShowIndex)" ref="grid">
    <w-icon class="icon-down" :name="isShow[isShowIndex] === false ? 'down' : 'up'"></w-icon>
    <span class="lock-code-word">{{ isShow[isShowIndex] === false ? '显示代码' : '隐藏代码' }}</span>
  </div>
</template>

<script>
import mixin from '../fold/mixin'
import WIcon from '../../../src/icon'

// 这个是封装的折叠工具
export default {
  name: "fold",
  mixins: [mixin],
  props:{
    isShowIndex:{
      type:Number,
      required:true
    }
  },
  data() {
    return {}
  },
  created() {
  },
  methods: {},
  components: {
    WIcon
  }
}

</script>
<style scoped>
</style>