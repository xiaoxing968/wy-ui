<template>
  <transition name="swiper">
    <div v-show="visible">
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
    getSelected: 'getSelected'
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
    }
  }
}
</script>

<style scoped lang="less">
.swiper-enter-active, .swiper-leave-active {
  transition: all 1s;
}

.swiper-leave-active { /* 在第二个item进入前 将第一个item脱离文档流 */
  display: none;
}

.swiper-enter {
  transform: translateX(100%);
}

.swiper-leave-to {
  transform: translateX(-100%);
}
</style>