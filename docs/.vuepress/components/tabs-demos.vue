<template>
  <div class="demo-button-wrapper">

    <h3>基础用法</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-tabs v-model="active">
          <w-tab name="xingxing" label="星星">星星1</w-tab>
          <w-tab name="yanger" label="羊儿">羊儿</w-tab>
          <w-tab name="xiaomie" label="小咩">小咩</w-tab>
          <w-tab name="mie" label="咩嘿嘿">咩嘿嘿</w-tab>
        </w-tabs>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            通过 <code>v-model</code> 对数据进行双向绑定
          </div>
          <pre><code class="vue">{{ normalContent }}</code></pre>

        </div>
      </div>
      <w-fold :isShowIndex="0"></w-fold>
    </div>

  </div>
</template>

<script>
import WTabs from '../../../src/tabs/tabs'
import WTab from '../../../src/tabs/tabPane'
import WFold from './fold'

export default {
  name: 'demo-button',
  components: {
    WFold,WTabs,WTab
  },
  data() {
    return {
      active:"xingxing",
      value_1:"来点我吧！",
      errorInfo:"你填错啦！",
      normalContent: `<w-input v-model="value" placeholder="请输入内容"></w-input>`.replace(/^\s*/gm, '').trim(),
      displayContent: `    <w-input v-model="value_1" disabled placeholder="请输入内容"></w-input>
                        <w-input v-model="value_1" readonly placeholder="请输入内容"></w-input>`.replace(/^\s*/gm, '').trim(),
      errorContent: `<w-input :error="errorInfo" placeholder="请输入内容"></w-input>`.replace(/^\s*/gm, '').trim(),
    }
  }
}
</script>

<style lang="less">
</style>