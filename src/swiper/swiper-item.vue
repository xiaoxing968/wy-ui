<template>
  <transition name="swiper">
    <div v-show="visible" :class="{ reverse }">
      <slot/>
    </div>
  </transition>
</template>

<script>
export default {
  name: "swiper-item",
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  inject: {
    getSelected: 'getSelected',
    getReverse: 'getReverse',
  },
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  methods: {},
  computed: {
    visible() {
      return this.name === this.getSelected()
    },
    reverse() {
      return this.getReverse()
    }
  }
}
</script>

<style scoped lang="less">
.swiper-enter-active, .swiper-leave-active {
  transition: all 1s;
}

.swiper-leave-active { /* 在第二个item进入前 将第一个item脱离文档流 */
  position: absolute;
  top: 0;
  width: 100%;
}
.swiper-enter {
  transform: translateX(100%);
}
.swiper-enter.reverse {
  transform: translateX(-100%);
}

.swiper-leave-to {
  transform: translateX(-100%);
}
.swiper-leave-to.reverse {
  transform: translateX(100%);
}
</style>