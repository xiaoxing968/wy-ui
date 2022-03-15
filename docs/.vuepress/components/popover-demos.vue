<template>
  <div class="demo-button-wrapper">

    <h3>基础用法</h3>
    <p>默认为点击触发，支持四种弹出方向</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div class="popover-button-container">
          <div class="popover-button-container-center">
            <w-popover>
              <template slot="content">hi.我是向上的popover</template>
              <w-button type="success">上</w-button>
            </w-popover>
          </div>
          <div class="popover-button-container-flex" style="display: flex;justify-content: space-between">
            <w-popover placement="left">
              <template slot="content">hi.我是向左的popover</template>
              <w-button type="success">左</w-button>
            </w-popover>
            <w-popover placement="right">
              <template slot="content">hi.我是向右的popover</template>
              <w-button type="success">右</w-button>
            </w-popover>
          </div>
          <div class="popover-button-container-center">
            <w-popover placement="bottom">
              <template slot="content">hi.我是向下的popover</template>
              <w-button type="success">下</w-button>
            </w-popover>
          </div>
        </div>
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


    <h3>内部关闭</h3>
    <p>通过 <code>slot</code>往外提供了一个关闭方法，使之可以在popover内部关闭。</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-popover placement="right">
          <template slot="content" slot-scope="{ contentClose }">
              来点我关闭弹窗吧：
              <span @click="contentClose"><icon name="error" style="fill: red"></icon></span>
          </template>
          <w-button type="success">可关闭</w-button>
        </w-popover>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            通过 <code>slot-scope</code> 向外提供一个可以关闭popover的 <code>contentClose</code> 事件
          </div>
          <pre><code class="vue">{{ closeContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="1"></w-fold>
    </div>

    <h3>通过hover触发</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div class="popover-button-container">
          <div class="popover-button-container-center">
            <w-popover trigger="hover">
              <template slot="content">hi.我是向上的popover</template>
              <w-button type="success">上</w-button>
            </w-popover>
          </div>
          <div class="popover-button-container-flex" style="display: flex;justify-content: space-between">
            <w-popover placement="left" trigger="hover">
              <template slot="content">hi.我是向左的popover</template>
              <w-button type="success">左</w-button>
            </w-popover>
            <w-popover placement="right" trigger="hover">
              <template slot="content">hi.我是向右的popover</template>
              <w-button type="success">右</w-button>
            </w-popover>
          </div>
          <div class="popover-button-container-center">
            <w-popover placement="bottom" trigger="hover">
              <template slot="content">hi.我是向下的popover</template>
              <w-button type="success">下</w-button>
            </w-popover>
          </div>
        </div>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            通过<code>trigger</code>设置触发方式，默认为 <code>click</code>
          </div>
          <pre><code class="vue">{{ hoverContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="2"></w-fold>
    </div>
  </div>
</template>

<script>
import WButton from '../../../src/button/button.vue'
import WPopover from '../../../src/popover'
import WIcon from '../../../src/icon'
import WFold from './fold'
import Icon from "../../../src/icon";

export default {
  name: 'popover-demos',
  components: {
    Icon,
    WButton, WPopover, WIcon, WFold
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