<template>
  <div class="w-button-group"><slot></slot></div>
</template>
<script>
  export default {
    mounted() {
      for (let node of this.$el.children){
        let _nodeName = node.nodeName.toLocaleLowerCase();
        if(_nodeName !== "button"){
          console.warn(`w-button-group组件内部只能嵌套w-button，但你使用了${_nodeName}`)
        }
      }
    }
  }
</script>
<style lang="less" scoped>
@import url('../css/app');
.w-button-group{
  display: inline-flex;
  vertical-align: middle;
  > .w-button{
    border-radius:0;
    &:not(:first-child){
      margin-left: -1px;
    }
    &:first-child{
      border-top-left-radius: @border-radius;
      border-bottom-left-radius: @border-radius;
    }
    &:last-child{
      border-top-right-radius: @border-radius;
      border-bottom-right-radius: @border-radius;
    }
    &:hover{
      position: relative;
      z-index:1;
    }
  }
}
</style>
