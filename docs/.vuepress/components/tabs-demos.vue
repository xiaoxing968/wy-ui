<template>
  <div class="demo-button-wrapper">

    <h3>基础用法</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-tabs v-model="active">
          <w-tab name="xingxing" label="星星">星星</w-tab>
          <w-tab name="yanger" label="羊儿">羊儿</w-tab>
          <w-tab name="xiaomie" label="小咩">小咩</w-tab>
          <w-tab name="mie" label="咩嘿嘿" disabled>咩嘿嘿</w-tab>
        </w-tabs>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            通过 <code>v-model</code> 指定选中的标签，为Tab加上 <code>disable</code> 属性后该标签页不可选择
          </div>
          <pre><code class="vue">{{ normalContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="0"></w-fold>
    </div>

    <h3>设置不同方向</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-button-group class="position-buttons">
          <w-button
              type="success"
              @click="currentPosition = position"
              v-for="position in ['left','right','top','bottom']"
              :key="position"
          >
            {{ position }}
          </w-button>
        </w-button-group>
        <w-tabs v-model="active1" :tab-position="currentPosition">
          <w-tab name="xingxing" label="星星">星星</w-tab>
          <w-tab name="yanger" label="羊儿">羊儿</w-tab>
          <w-tab name="xiaomie" label="小咩">小咩</w-tab>
          <w-tab name="mie" label="咩嘿嘿">咩嘿嘿</w-tab>
        </w-tabs>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            通过 <code>tabPosition</code> 设置tabs的方向
          </div>
          <pre><code class="vue">{{ positionContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="1"></w-fold>
    </div>


    <h3>为标签传入icon</h3>
<!--    <p>或者通过 <code>slot</code> 传入自定义内容</p>-->
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-tabs v-model="active2">
          <w-tab name="xingxing" icon="thumbs-up" label="星星">星星</w-tab>
          <w-tab name="yanger" label="羊儿">羊儿</w-tab>
          <w-tab name="xiaomie" label="小咩">小咩</w-tab>
          <w-tab name="mieheihei" label="咩嘿嘿">咩嘿嘿</w-tab>
        </w-tabs>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            通过 <code>icon</code> 属性传入icon名称
          </div>
          <pre><code class="vue">{{ iconContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="2"></w-fold>
    </div>
  </div>
</template>

<script>
import WTabs from '../../../src/tabs/tabs'
import WTab from '../../../src/tabs/tabPane'
import WButtonGroup from '../../../src/button/button-group'
import WButton from '../../../src/button/button'
import WFold from './fold'

export default {
  name: 'demo-button',
  components: {
    WFold, WTabs, WTab, WButtonGroup, WButton
  },
  data() {
    return {
      active: "xingxing",
      active1: "xingxing",
      active2: "xingxing",
      currentPosition: "left",
      normalContent:
          `<w-tabs v-model="active">
             <w-tab name="xingxing" label="星星">星星</w-tab>
             <w-tab name="yanger" label="羊儿">羊儿</w-tab>
             <w-tab name="xiaomie" label="小咩">小咩</w-tab>
             <w-tab name="mie" label="咩嘿嘿" disabled>咩嘿嘿</w-tab>
           </w-tabs>`.replace(/^\s*/gm, '').trim(),
      positionContent: `<w-button-group class="position-buttons">
          <w-button
              type="success"
              @click="currentPosition = position"
              v-for="position in ['left','right','top','bottom']"
              :key="position"
          >
            {{ position }}
          </w-button>
        </w-button-group>
        <w-tabs v-model="active1" :tab-position="currentPosition">
          <w-tab name="xingxing" label="星星">星星</w-tab>
          <w-tab name="yanger" label="羊儿">羊儿</w-tab>
          <w-tab name="xiaomie" label="小咩">小咩</w-tab>
          <w-tab name="mie" label="咩嘿嘿">咩嘿嘿</w-tab>
        </w-tabs>`.replace(/^\s*/gm, '').trim(),
      iconContent: `<w-tabs v-model="active2">
          <w-tab name="xingxing" icon="thumbs-up" label="星星">星星</w-tab>
          <w-tab name="yanger" label="羊儿">羊儿</w-tab>
          <w-tab name="xiaomie" label="小咩">小咩</w-tab>
          <w-tab name="mieheihei" label="咩嘿嘿">咩嘿嘿</w-tab>
        </w-tabs>`.replace(/^\s*/gm, '').trim(),
    }
  }
}
</script>

<style lang="less" scoped>
.position-buttons {
  margin-bottom: 20px;
}
</style>