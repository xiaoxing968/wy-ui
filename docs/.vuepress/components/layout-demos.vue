<template>
 <div id="layout">



   <h3>常用的页面布局</h3>
   <p>搭建页面的基本结构</p>
   <div class="component-wrapper">
     <div class="component-wrapper-demo">
       <w-container>
         <w-header><div class="layout-demo demo-header">Header</div></w-header>
         <w-main><div class="layout-demo demo-main">main</div></w-main>
       </w-container>
     </div>
     <div class="code-content" style="height: 0;">
       <div class="code-content-height">
         <pre><code class="vue">{{ layout_1 }}</code></pre>
       </div>
     </div>
     <w-fold :isShowIndex="0"></w-fold>
   </div>


   <div class="component-wrapper">
     <div class="component-wrapper-demo">
       <w-container>
       <w-header><div class="layout-demo demo-header">Header</div></w-header>
       <w-main><div class="layout-demo demo-main">main</div></w-main>
       <w-footer><div class="layout-demo demo-footer">footer</div></w-footer>
     </w-container>
     </div>
     <div class="code-content" style="height: 0;">
       <div class="code-content-height">
         <pre><code class="vue">{{ layout_2 }}</code></pre>
       </div>
     </div>
     <w-fold :isShowIndex="1"></w-fold>
   </div>

   <div class="component-wrapper">
     <div class="component-wrapper-demo">
       <w-container>
       <w-aside :width="150"><div class="layout-demo demo-aside">aside</div></w-aside>
       <w-main><div class="layout-demo demo-main">main</div></w-main>
     </w-container>
     </div>
     <div class="code-content" style="height: 0;">
       <div class="code-content-height">
         <pre><code class="vue">{{ layout_3 }}</code></pre>
       </div>
     </div>
     <w-fold :isShowIndex="2"></w-fold>
   </div>


   <div class="component-wrapper">
     <div class="component-wrapper-demo">
       <w-container>
         <w-header><div class="layout-demo demo-header">Header</div></w-header>
         <w-container>
           <w-aside :width="150"><div class="layout-demo demo-aside">aside</div></w-aside>
           <w-main><div class="layout-demo demo-main">main</div></w-main>
         </w-container>
     </w-container>
     </div>
     <div class="code-content" style="height: 0;">
       <div class="code-content-height">
         <pre><code class="vue">{{ layout_4 }}</code></pre>
       </div>
     </div>
     <w-fold :isShowIndex="3"></w-fold>
   </div>


   <div class="component-wrapper">
     <div class="component-wrapper-demo">
       <w-container>
         <w-header><div class="layout-demo demo-header">Header</div></w-header>
         <w-container>
           <w-aside :width="150"><div class="layout-demo demo-aside">aside</div></w-aside>
           <w-main><div class="layout-demo demo-main">main</div></w-main>
         </w-container>
         <w-footer><div class="layout-demo demo-footer">footer</div></w-footer>
     </w-container>
     </div>
     <div class="code-content" style="height: 0;">
       <div class="code-content-height">
         <pre><code class="vue">{{ layout_5 }}</code></pre>
       </div>
     </div>
     <w-fold :isShowIndex="4"></w-fold>
   </div>


   <div class="component-wrapper">
     <div class="component-wrapper-demo">
       <w-container>
         <w-aside :width="150"><div class="layout-demo demo-aside">aside</div></w-aside>
         <w-container>
           <w-header><div class="layout-demo demo-header">Header</div></w-header>
           <w-main><div class="layout-demo demo-main">main</div></w-main>
         </w-container>
     </w-container>
     </div>
     <div class="code-content" style="height: 0;">wwww
       <div class="code-content-height">
         <pre><code class="vue">{{ layout_6 }}</code></pre>
       </div>
     </div>
     <w-fold :isShowIndex="5"></w-fold>
   </div>


   <div class="component-wrapper">
     <div class="component-wrapper-demo">
       <w-container>
         <w-aside :width="150"><div class="layout-demo demo-aside">aside</div></w-aside>
         <w-container>
           <w-header><div class="layout-demo demo-header">Header</div></w-header>
           <w-main><div class="layout-demo demo-main">main</div></w-main>
           <w-footer><div class="layout-demo demo-footer">footer</div></w-footer>
         </w-container>
     </w-container>
     </div>
     <div class="code-content" style="height: 0;">
       <div class="code-content-height">
         <pre><code class="vue">{{ layout_7 }}</code></pre>
       </div>
     </div>
     <w-fold :isShowIndex="6"></w-fold>
   </div>


 </div>
</template>

<script>
import WContainer from '../../../src/layout/container'
import WHeader from '../../../src/layout/header'
import WAside from '../../../src/layout/aside'
import WFooter from '../../../src/layout/footer'
import WMain from '../../../src/layout/main'
import WFold from './fold'
export default {
name: "layout-demos",
 data(){
 return{
   layout_1:` <w-container>
         <w-header><div class="layout-demo demo-header">Header</div></w-header>
         <w-main><div class="layout-demo demo-main">main</div></w-main>
       </w-container>`.replace(/^\s*/gm, '').trim(),
   layout_2:` <w-container>
         <w-header><div class="layout-demo demo-header">Header</div></w-header>
         <w-main><div class="layout-demo demo-main">main</div></w-main>
         <w-footer><div class="layout-demo demo-footer">footer</div></w-footer>
       </w-container>`.replace(/^\s*/gm, '').trim(),
   layout_3:`<w-container>
       <w-aside :width="150"><div class="layout-demo demo-aside">aside</div></w-aside>
       <w-main><div class="layout-demo demo-main">main</div></w-main>
     </w-container>`.replace(/^\s*/gm, '').trim(),
   layout_4:`
       <w-container>
         <w-header><div class="layout-demo demo-header">Header</div></w-header>
         <w-container>
           <w-aside :width="150"><div class="layout-demo demo-aside">aside</div></w-aside>
           <w-main><div class="layout-demo demo-main">main</div></w-main>
         </w-container>
     </w-container>`.replace(/^\s*/gm, '').trim(),
   layout_5:`
       <w-container>
         <w-header><div class="layout-demo demo-header">Header</div></w-header>
         <w-container>
           <w-aside :width="150"><div class="layout-demo demo-aside">aside</div></w-aside>
           <w-main><div class="layout-demo demo-main">main</div></w-main>
         </w-container>
         <w-footer><div class="layout-demo demo-footer">footer</div></w-footer>
     </w-container>`.replace(/^\s*/gm, '').trim(),
   layout_6:`
       <w-container>
         <w-aside :width="150"><div class="layout-demo demo-aside">aside</div></w-aside>
         <w-container>
           <w-header><div class="layout-demo demo-header">Header</div></w-header>
           <w-main><div class="layout-demo demo-main">main</div></w-main>
         </w-container>
     </w-container>`.replace(/^\s*/gm, '').trim(),
   layout_7:`
       <w-container>
         <w-aside :width="150"><div class="layout-demo demo-aside">aside</div></w-aside>
         <w-container>
           <w-header><div class="layout-demo demo-header">Header</div></w-header>
           <w-main><div class="layout-demo demo-main">main</div></w-main>
           <w-footer><div class="layout-demo demo-footer">footer</div></w-footer>
         </w-container>
     </w-container>`.replace(/^\s*/gm, '').trim(),
 }
 },
 created(){},
 methods:{},
 components:{WContainer,WHeader,WAside,WFooter,WMain,WFold}
}

</script>
<style lang="less" scoped>
#layout{
  .layout-demo{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    height: 100%;
  }
  .demo-header{
    background: #bbbbbb;
  }
  .demo-main{
    height: 150px;
    background: #2c3e50;
    color: #bbbbbb;
  }
  .demo-footer{
    background: #3eaf7c;
  }
  .demo-aside{
    background: #476582;
  }
}
</style>