<template>
  <div class="w-button-group"><slot></slot></div>
</template>
<script>
  export default {
    mounted() {
      console.log(this.$el.children);
      for (let node of this.$el.children){
        let _nodeName = node.nodeName.toLocaleLowerCase();
        if(_nodeName !== "button"){
          console.warn(`w-button-group组件内部只能嵌套w-button，而得到的是${_nodeName}`)
        }
      }
    }
  }
</script>
<style lang="scss">
.w-button-group{
  display: inline-flex;
  vertical-align: middle;
  > .w-button{
    border-radius:0;
    &:not(:first-child){
      margin-left: -1px;

    }
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child{
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover{
      position: relative;
      z-index:1;
    }
  }
}
</style>
