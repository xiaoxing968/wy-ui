<template>
 <div class="row">
   <slot></slot>
 </div>
</template>

<script>
export default {
name: "row",
 data(){
 return{}
 },
 created(){},
 methods:{},
 components:{}
}

</script>
<style scoped>
.row{
  display: flex;
}
</style>