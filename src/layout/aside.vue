<template>
  <transition name="slide">
    <div class="container-aside" v-if="visible" :style="{width: width + 'px'}">
      <slot></slot>
<!--      <button @click="visible=false">close</button>-->
    </div>
  </transition>
</template>
<script>
import layoutMixins from "../mixins/layoutMixins"
export default {
  name: 'WAside',
  mixins:[layoutMixins],
  data () {
    return {
      visible: true
    }
  },
  mounted() {
    this.fatherDetermine()
  },
  methods: {},

}
</script>

<style lang="less" scoped>
.container-aside {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active, .slide-leave-active {
  transition: all .3s;
}
.slide-enter, .slide-leave-to {
  margin-left: -200px;
}
</style>