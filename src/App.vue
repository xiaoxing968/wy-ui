<template>
 <div id="app">
   <div>
     xxx:<w-icon name="error"></w-icon>
   </div>
   <w-cascader :source="dataSource"></w-cascader>
<!--   <w-container>-->
<!--     <w-header><div class="layout-demo demo-header">Header</div></w-header>-->
<!--     <w-container>-->
<!--       <w-aside :width="150"><div class="layout-demo demo-aside">aside</div></w-aside>-->
<!--       <w-main><div class="layout-demo demo-main">main</div></w-main>-->
<!--     </w-container>-->
<!--   </w-container>-->
   <w-swiper>
     <w-swiper-item name="1-1"><div class="demo-swiper">1</div></w-swiper-item>
     <w-swiper-item name="2-2"><div class="demo-swiper">2</div></w-swiper-item>
     <w-swiper-item name="3-3"><div class="demo-swiper">3</div></w-swiper-item>
     <w-swiper-item name="4-4"><div class="demo-swiper">4</div></w-swiper-item>
   </w-swiper>
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

export default {
name: "demo",
 data(){
 return{
   dataSource
 }
 },
 created(){},
 methods:{},
 components:{WCascader, WHeader, WMain, WContainer, WAside, WIcon, WSwiper, WSwiperItem}
}

</script>
<style scoped>
.demo-swiper{
  border: red 1px solid;
  height: 200px;
}
</style>