<template>
  <div class="demo-button-wrapper">

    <h3>基础用法</h3>
    <p>支持双向绑定的</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-input v-model="value" placeholder="请输入内容"></w-input>
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

    <h3>禁用与只读</h3>
    <p>支持禁用与只读两种状态</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <p>禁用状态</p>
          <w-input v-model="value_1" disabled placeholder="请输入内容"></w-input>
        <p>只读状态</p>
          <w-input v-model="value_1" readonly placeholder="请输入内容"></w-input>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">通过 <code>disabled</code> 设置禁用，通过 <code>readonly</code> 设置只读</div>
          <pre><code class="vue">{{ displayContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="1"></w-fold>
    </div>

    <h3>错误信息</h3>
    <p>可以将出误信息展示出来</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
          <w-input :error="errorInfo" placeholder="请输入内容"></w-input>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc"> <code>error</code> 接收 <code>String</code> 类型的错误信息内容</div>
          <pre><code class="vue">{{ errorContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="2"></w-fold>
    </div>
  </div>
</template>

<script>
import WInput from '../../../src/input'
import WFold from './fold'

export default {
  name: 'demo-button',
  components: {
    WFold,WInput
  },
  data() {
    return {
      value:"",
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