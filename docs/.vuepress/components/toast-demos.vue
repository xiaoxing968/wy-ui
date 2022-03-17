<template>
  <div class="demo-button-wrapper">

    <h3>基础用法</h3>
    <p>Api调用，传入 <code>string</code> 使用基本功能</p>
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

    <h3>更多参数</h3>
    <p>通过Api 传入 <code>options</code> 参数调用</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-button type="success" @click="showToast">传入options</w-button>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            传入<code>options</code>对象，详细参数见底部表格
          </div>
          <pre><code class="vue">{{ optionsContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="1"></w-fold>
    </div>

    <h3>更多功能</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-button type="success" @click="showToastGiveHtml">可以传入HTML</w-button>
        <w-button type="success" @click="showToastClosed">可以关闭</w-button>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            传入<code>options</code>对象，详细参数见底部表格
          </div>
          <pre><code class="vue">{{ HTMLContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="2"></w-fold>
    </div>


  </div>
</template>

<script>
import WButton from '../../../src/button/button.vue'
import WPopover from '../../../src/popover'
import WToast from '../../../src/toast'
import WFold from './fold'

export default {
  name: 'popover-demos',
  components: {
    WButton, WPopover, WFold, WToast
  },
  data() {
    return {
      normalContent: `<w-button type="success" @click="$toast('你好！')">单文本提示</w-button>`.replace(/^\s*/gm, '').trim(),
      optionsContent: `<w-button type="success" @click="showToast">传入options</w-button>`.replace(/^\s*/gm, '').trim(),
      HTMLContent: `<w-button type="success" @click="showToastGiveHtml">可以传入HTML</w-button>
                    <w-button type="success" @click="showToastClosed">可以关闭</w-button>
                    `.replace(/^\s*/gm, '').trim(),
    }
  },
  methods: {
    showToast() {
      this.$toast({
        message: `hi，点击按钮关闭`,
        duration: 2000,
        position: 'middle',
      })
    },
    showToastGiveHtml() {
      this.$toast({
        message: `<strong>我加粗了</strong>`,
        enableHtml: true,
        duration: 2000,
      })
    },
    showToastClosed() {
      this.$toast({
        message: `可以关闭`,
        enableHtml: true,
        duration: 2000,
        showClose: true,
        position: 'middle',
        closeButton: {
          text: '关闭',
          icon: 'close'
        }
      })
    },
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