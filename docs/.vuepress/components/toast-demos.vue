<template>
  <div class="demo-button-wrapper">

    <h3>基础用法</h3>
    <p>通过Api调用</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-button type="success" @click="$toast('你好！')">单文本提示</w-button>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            通过<code>placement</code>设置弹出方向，默认为 <code>top</code>
          </div>
          <pre><code class="vue">{{ normalContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="0"></w-fold>
    </div>


  </div>
</template>

<script>
import WButton from '../../../src/button/button.vue'
import WPopover from '../../../src/popover'
import WToast from '../../../src/toast'
import WIcon from '../../../src/icon'
import WFold from './fold'
import Icon from "../../../src/icon";

export default {
  name: 'popover-demos',
  components: {
    Icon,
    WButton, WPopover, WIcon, WFold, WToast
  },
  data() {
    return {
      normalContent: `
            <w-popover>
              <template slot="content">hi.我是向上的popover</template>
              <w-button type="success">上</w-button>
            </w-popover>
            <w-popover placement="left">
              <template slot="content">hi.我是向左的popover</template>
              <w-button type="success">左</w-button>
            </w-popover>
            <w-popover placement="right">
              <template slot="content">hi.我是向右的popover</template>
              <w-button type="success">右</w-button>
            </w-popover>
            <w-popover placement="bottom">
              <template slot="content">hi.我是向下的popover</template>
              <w-button type="success">下</w-button>
            </w-popover>`.replace(/^\s*/gm, '').trim(),
      hoverContent: `
            <w-popover trigger="hover">
              <template slot="content">hi.我是向上的popover</template>
              <w-button type="success">上</w-button>
            </w-popover>
            <w-popover placement="left" trigger="hover">
              <template slot="content">hi.我是向左的popover</template>
              <w-button type="success">左</w-button>
            </w-popover>
            <w-popover placement="right" trigger="hover">
              <template slot="content">hi.我是向右的popover</template>
              <w-button type="success">右</w-button>
            </w-popover>
            <w-popover placement="bottom" trigger="hover">
              <template slot="content">hi.我是向下的popover</template>
              <w-button type="success">下</w-button>
            </w-popover>`.replace(/^\s*/gm, '').trim(),
      closeContent: `<w-popover placement="right">
          <template slot="content" slot-scope="{ contentClose }">
              来点我关闭弹窗吧：<span @click="contentClose"><icon name="error"></icon></span>
          </template>
          <w-button type="success">可关闭</w-button>
        </w-popover>`.replace(/^\s*/gm, '').trim(),
    }
  },
  methods: {
    showToast() {
      this.$toast({
        message: `hi${parseInt(Math.random() * 100)}`,
        // message: '<i>hi!</i>',
        // enableHtml: true,
        duration: 2000,
        showClose: true,
        position: 'middle',
        closeButton: {
          text: '知道了',
          icon: 'close'
        }
      })
    }
  }
}
</script>

<style lang="less">
.popover-button-container {
  padding: 20px 50px;

  .popover-button-container-center {
    text-align: center;
  }
}
</style>