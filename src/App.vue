<template>
  <div id="app">
    <div>
      xxx:
      <w-icon name="error"></w-icon>
    </div>
    <w-cascader :source="dataSource"></w-cascader>
    <!--   <w-container>-->
    <!--     <w-header><div class="layout-demo demo-header">Header</div></w-header>-->
    <!--     <w-container>-->
    <!--       <w-aside :width="150"><div class="layout-demo demo-aside">aside</div></w-aside>-->
    <!--       <w-main><div class="layout-demo demo-main">main</div></w-main>-->
    <!--     </w-container>-->
    <!--   </w-container>-->
<!--       <w-swiper ref="demo">-->
<!--         <w-swiper-item name="1-1"><div class="demo-swiper swiper1">1</div></w-swiper-item>-->
<!--         <w-swiper-item name="2-2"><div class="demo-swiper swiper2">2</div></w-swiper-item>-->
<!--         <w-swiper-item name="3-3"><div class="demo-swiper swiper3">3</div></w-swiper-item>-->
<!--         <w-swiper-item name="4-4"><div class="demo-swiper swiper4">4</div></w-swiper-item>-->
<!--       </w-swiper>-->
    <w-menu :selected.sync="selected">
      <w-menu-item name="home">首页</w-menu-item>
      <w-menu-item name="case">案例</w-menu-item>
      <w-sub-menu name="about">
        <template #title>关于</template>
        <w-menu-item name="culture">企业文化</w-menu-item>
        <w-menu-item name="developers">开发团队</w-menu-item>
      </w-sub-menu>
    </w-menu>
    <button @click="test(1)">1</button>
    <button @click="test('3-3')">3-3</button>
  </div>
</template>

<script>
import WHeader from '@/layout/header.vue'
import WMain from '@/layout/main.vue'
import WAside from '@/layout/aside.vue'
import WContainer from '@/layout/container.vue'
import WCascader from "@/cascader";
import dataSource from "./cascader/dataSource";
import WIcon from "./icon.vue"
import WSwiper from "./swiper/swiper"
import WSwiperItem from "./swiper/swiper-item"
import WMenu from "@/menu/menu";
import WMenuItem from "@/menu/menu-item";
import WSubMenu from "@/menu/sub-menu";

export default {
  name: "demo",
  data() {
    return {
      dataSource,
      selected: ['culture']
    }
  },
  created() {
  },
  methods: {
    test(index) {
      this.$refs.demo.setActiveItem(index)
    }
  },
  components: {WSubMenu, WMenuItem, WMenu, WCascader, WHeader, WMain, WContainer, WAside, WIcon, WSwiper, WSwiperItem}
}

</script>
<style scoped>
.demo-swiper {
  height: 200px;
  background-color: #3182bd;
}
</style>