<template>
  <div class="demo-button-wrapper">

    <h3>基础按钮</h3>
    <p>基础的按钮用法</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-button>取消按钮</w-button>
        <w-button icon="setting">图标按钮</w-button>
        <w-button icon="download" icon-position="right">图标按钮</w-button>
        <w-button :loading="true">正在加载</w-button>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            木得颜色的Button
          </div>
          <pre><code class="vue">{{ normalContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="0"></w-fold>
    </div>


    <h3>提交按钮</h3>
    <p>提交按钮的用法</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-button type="success">提交按钮</w-button>
        <w-button type="success" icon="setting">图标按钮</w-button>
        <w-button type="success" icon="download" icon-position="right">图标按钮</w-button>
        <w-button type="success" :loading="true">正在加载</w-button>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            加上 <code>type="success"</code> 属性可以使变成提交按钮
          </div>
          <pre><code class="vue">{{ successContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="1"></w-fold>
    </div>


    <h3>警告按钮</h3>
    <p>带颜色的警告按钮用法</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-button type="warning">警告按钮</w-button>
        <w-button type="warning" icon="setting">图标按钮</w-button>
        <w-button type="warning" icon="download" icon-position="right">图标按钮</w-button>
        <w-button type="warning" :loading="true">正在加载</w-button>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            加上 <code>type="warning"</code> 属性可以使普通按钮变成带警示颜色的按钮
          </div>
          <pre><code class="vue">{{ warningContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="2"></w-fold>
    </div>

    <h3>图标按钮</h3>
    <p>只有图标的按钮</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-button icon="setting"></w-button>
        <w-button type="success" icon="download"></w-button>
        <w-button type="warning" icon="thumbs-up"></w-button>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            只需要设置 <code>icon</code> 属性就可以变成图标按，同时也支持 <code>type</code> 属性
          </div>
          <pre><code class="vue">{{ iconContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="3"></w-fold>
    </div>


    <h3>按钮组</h3>
    <p>用于上下页等场景</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-button-group>
          <w-button icon="left">上一页</w-button>
          <w-button icon="right" icon-position="right">下一页</w-button>
        </w-button-group>
        <w-button-group>
          <w-button icon="download"></w-button>
          <w-button icon="setting"></w-button>
          <w-button icon="thumbs-up"></w-button>
        </w-button-group>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            将按钮写在 <code>&lt;w-button-group&gt;</code> 标签里面就能变成按钮组了
          </div>
          <pre><code class="vue">{{ groupContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="4"></w-fold>
    </div>
  </div>
</template>

<script>
import WButton from '../../../src/button/button.vue'
import WButtonGroup from '../../../src/button/button-group'
import WIcon from '../../../src/icon'
import WFold from './fold'

export default {
  name: 'demo-button',
  components: {
    WButton, WButtonGroup, WIcon, WFold
  },
  data() {
    return {
      normalContent: `<w-button>取消按钮</w-button>
      <w-button icon="setting">图标按钮</w-button>
      <w-button icon="download" icon-position="right">图标按钮</w-button>
      <w-button :loading="true">正在加载</w-button>`.replace(/^\s*/gm, '').trim(),
      successContent: `<w-button type="success">提交按钮</w-button>
      <w-button type="success" icon="setting">图标按钮</w-button>
      <w-button type="success" icon="download" icon-position="right">图标按钮</w-button>
      <w-button type="success" :loading="true">正在加载</w-button>`.replace(/^\s*/gm, '').trim(),
      warningContent: `<w-button type="warning">警告按钮</w-button>
      <w-button type="warning" icon="setting">图标按钮</w-button>
      <w-button type="warning" icon="download" icon-position="right">图标按钮</w-button>
      <w-button type="warning" :loading="true">正在加载</w-button>`.replace(/^\s*/gm, '').trim(),
      iconContent: `<w-button icon="setting"></w-button>
      <w-button type="success" icon="download"></w-button>
      <w-button type="warning" icon="thumbs-up"></w-button>`.replace(/^\s*/gm, '').trim(),
      groupContent: `<w-button-group>
        <w-button icon="left">上一页</w-button>
        <w-button icon="right" icon-position="right">下一页</w-button>
      </w-button-group>
      <w-button-group>
        <w-button icon="download"></w-button>
        <w-button icon="setting"></w-button>
        <w-button icon="thumbs-up"></w-button>
      </w-button-group>`.replace(/^\s*/gm, '').trim(),
    }
  }
}
</script>

<style lang="less">
</style>