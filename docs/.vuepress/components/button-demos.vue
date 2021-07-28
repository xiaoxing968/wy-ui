<template>
  <div class="demo-button-wrapper">
    <div class="demo-box">
      <w-button>取消按钮</w-button>
      <w-button type="success">成功按钮</w-button>
      <w-button icon="setting">图标按钮</w-button>
      <w-button icon="download" icon-position="right">图标按钮</w-button>
      <w-button :loading="loading" @click="loading = !loading">点击加载</w-button>
      <w-button :loading="loading2" @click="loading2 = !loading2">取消加载</w-button>
    </div>
  </div>
</template>

<script>
import WButton from '../../../src/button/button.vue'
export default {
  name: 'demo-button',
  components: {
    WButton
  },
  data () {
    return {
      loading: false,
      loading2: true,
    }
  }
}
</script>

<style lang="less">
@import "src/css/app";
.demo-box{
  padding-bottom: 50px;
}
</style>