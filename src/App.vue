<template>
 <div id="app">
   <w-container>
     <w-header><div class="layout-demo demo-header">Header</div></w-header>
     <w-container>
       <w-aside :width="150"><div class="layout-demo demo-aside">aside</div></w-aside>
       <w-main><div class="layout-demo demo-main">main</div></w-main>
     </w-container>
   </w-container>
 </div>
</template>

<script>
import WHeader from '@/layout/header.vue'
import WMain from '@/layout/main.vue'
import WAside from '@/layout/aside.vue'
import WContainer from '@/layout/container.vue'
export default {
name: "demo",
 data(){
 return{}
 },
 created(){},
 methods:{},
 components:{WHeader, WMain, WContainer, WAside}
}

</script>
<style scoped>
.demo-aside{
  background: #476582;
  height: 100px;
}
</style>