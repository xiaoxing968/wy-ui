<template>
  <div class="demo">
    <h3>基础布局</h3>
    <p>基础布局的用法</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-row>
          <w-col class="demo-col" :span="24">
            <div></div>
          </w-col>
        </w-row>
        <w-row>
          <w-col class="demo-col" :span="12">
            <div></div>
          </w-col>
          <w-col class="demo-col" :span="12">
            <div></div>
          </w-col>
        </w-row>
        <w-row>
          <w-col class="demo-col" :span="8">
            <div></div>
          </w-col>
          <w-col class="demo-col" :span="8">
            <div></div>
          </w-col>
          <w-col class="demo-col" :span="8">
            <div></div>
          </w-col>
        </w-row>
        <w-row>
          <w-col class="demo-col" :span="6">
            <div></div>
          </w-col>
          <w-col class="demo-col" :span="6">
            <div></div>
          </w-col>
          <w-col class="demo-col" :span="6">
            <div></div>
          </w-col>
          <w-col class="demo-col" :span="6">
            <div></div>
          </w-col>
        </w-row>
        <w-row>
          <w-col class="demo-col" :span="4">
            <div></div>
          </w-col>
          <w-col class="demo-col" :span="4">
            <div></div>
          </w-col>
          <w-col class="demo-col" :span="4">
            <div></div>
          </w-col>
          <w-col class="demo-col" :span="4">
            <div></div>
          </w-col>
          <w-col class="demo-col" :span="4">
            <div></div>
          </w-col>
          <w-col class="demo-col" :span="4">
            <div></div>
          </w-col>
        </w-row>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            根据 <code>&lt;w-col&gt;</code> 的 <code>span</code> 来控制col的长度范围，最多拆分为24栏
          </div>
          <pre><code class="vue">{{ normalRow }}</code></pre>
          <pre><code class="vue">{{ normalStyle }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="0"></w-fold>
    </div>
    <h3>栅栏间隔</h3>
    <p>带间隔的栅栏用法</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-row :gutter="20">
          <w-col class="demo-col" :span="8"><div></div></w-col>
          <w-col class="demo-col" :span="8"><div></div></w-col>
          <w-col class="demo-col" :span="8"><div></div></w-col>
        </w-row>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            给 <code>&lt;w-row&gt;</code> 标签添加上 <code>gutter</code> 属性来控制该row下面每个col之间的间距，<code>gutter</code> 接收一个数字
          </div>
          <pre><code class="vue">{{ gutterRow }}</code></pre>
          <pre><code class="vue">{{ normalStyle }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="1"></w-fold>
    </div>


    <h3>栅栏偏移</h3>
    <p>带间隔的栅栏用法</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-row :gutter="20">
          <w-col class="demo-col" :span="8"><div></div></w-col>
          <w-col class="demo-col" :span="8"><div></div></w-col>
        </w-row>
        <w-row :gutter="20">
          <w-col class="demo-col" :span="8" :offset="5"><div></div></w-col>
          <w-col class="demo-col" :span="8"><div></div></w-col>
        </w-row>
        <w-row :gutter="20">
          <w-col class="demo-col" :span="8" :offset="2"><div></div></w-col>
          <w-col class="demo-col" :span="8" :offset="5"><div></div></w-col>
        </w-row>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            给 <code>&lt;w-col&gt;</code> 标签添加上 <code>offset</code> col偏移的长度，<code>offset</code> 接收一个数字
          </div>
          <pre><code class="vue">{{ offsetRow }}</code></pre>
          <pre><code class="vue">{{ normalStyle }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="2"></w-fold>
    </div>



    <h3>对齐方式</h3>
    <p>通过参数设置布局的对齐方式</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-row :gutter="20" align="center">
          <w-col class="demo-col" :span="8"><div></div></w-col>
          <w-col class="demo-col" :span="8"><div></div></w-col>
        </w-row>
        <w-row :gutter="20" align="right">
          <w-col class="demo-col" :span="5"><div></div></w-col>
          <w-col class="demo-col" :span="5"><div></div></w-col>
          <w-col class="demo-col" :span="5"><div></div></w-col>
        </w-row>
        <w-row :gutter="20" align="left">
          <w-col class="demo-col" :span="5"><div></div></w-col>
          <w-col class="demo-col" :span="5"><div></div></w-col>
          <w-col class="demo-col" :span="5"><div></div></w-col>
        </w-row>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            <code>&lt;w-row&gt;</code> 接受 <code>align</code> 属性作为对齐方式，接收<code>center</code>、<code>left</code>、<code>right</code> 三个可选参数
          </div>
          <pre><code class="vue">{{ alignRow }}</code></pre>
          <pre><code class="vue">{{ normalStyle }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="3"></w-fold>
    </div>

 <h3>响应式</h3>
    <p>能够适用不同屏幕尺寸的设备</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-row>
          <w-col class="demo-col" :pc="{span:4,offset:1}" :ipad="{span:6}" :narrow-pc="{span:8 ,offset:2}" :wide-pc="{span:8,offset:4}" :phone="{span:20}"><div></div></w-col>
          <w-col class="demo-col" :pc="{span:4,offset:1}" :ipad="{span:6}" :narrow-pc="{span:8 ,offset:2}" :wide-pc="{span:8,offset:4}" :phone="{span:20}"><div></div></w-col>
        </w-row>
        <w-row>
          <w-col class="demo-col" :pc="{span:10,offset:2}" :ipad="{span:6,offset:4}" :narrow-pc="{span:6 }" :wide-pc="{span:10,}" :phone="{span:12}"><div></div></w-col>
          <w-col class="demo-col" :pc="{span:10,offset:2}" :ipad="{span:6,offset:4}" :narrow-pc="{span:6 }" :wide-pc="{span:8,offset:4}" :phone="{span:12}"><div></div></w-col>
        </w-row>
        <w-row>
          <w-col class="demo-col" :pc="{span:8}" :ipad="{span:6,offset:2}" :narrow-pc="{span:6}" :wide-pc="{span:4}" :phone="{span:6,offset:2}"><div></div></w-col>
          <w-col class="demo-col" :pc="{span:8}" :ipad="{span:6,offset:2}" :narrow-pc="{span:6}" :wide-pc="{span:6,offset:2}" :phone="{span:8}"><div></div></w-col>
          <w-col class="demo-col" :pc="{span:8}" :ipad="{span:6,offset:2}" :narrow-pc="{span:6}" :wide-pc="{span:6}" :phone="{span:8}"><div></div></w-col>
        </w-row>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            响应式支持：<code>phone</code>、<code>ipad</code>、<code>narrow-pc</code>、<code>pc</code>、<code>wide-pc</code> 五种不同屏幕尺寸的设备，类型为Object，参数为 <code>span</code>、 <code>offset</code>
          </div>
          <pre><code class="vue">{{ mediaRow }}</code></pre>
          <pre><code class="vue">{{ normalStyle }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="4"></w-fold>
    </div>




  </div>
</template>

<script>
import WFold from './fold'
import WRow from '../../../src/grid/row'
import WCol from '../../../src/grid/col'

export default {
  name: 'demo',
  components: {
    WFold, WCol, WRow
  },
  data() {
    return {
      normalRow: `
           <w-row>
        <w-col class="demo-col" :span="24"><div></div></w-col>
      </w-row>
      <w-row>
        <w-col class="demo-col" :span="12"><div></div></w-col>
        <w-col class="demo-col" :span="12"><div></div></w-col>
      </w-row>
      <w-row>
        <w-col class="demo-col" :span="8"><div></div></w-col>
        <w-col class="demo-col" :span="8"><div></div></w-col>
        <w-col class="demo-col" :span="8"><div></div></w-col>
      </w-row>
      <w-row>
        <w-col class="demo-col" :span="6"><div></div></w-col>
        <w-col class="demo-col" :span="6"><div></div></w-col>
        <w-col class="demo-col" :span="6"><div></div></w-col>
        <w-col class="demo-col" :span="6"><div></div></w-col>
      </w-row>
      <w-row>
        <w-col class="demo-col" :span="4"><div></div></w-col>
        <w-col class="demo-col" :span="4"><div></div></w-col>
        <w-col class="demo-col" :span="4"><div></div></w-col>
        <w-col class="demo-col" :span="4"><div></div></w-col>
        <w-col class="demo-col" :span="4"><div></div></w-col>
        <w-col class="demo-col" :span="4"><div></div></w-col>
      </w-row>`.replace(/^\s*/gm, '').trim(),
      normalStyle: `<style lang="less" scoped>
.demo-col div{
  height: 40px;
  border-radius: 5px;
}
.demo-col:nth-child(-n+5){
  margin-bottom: 20px;
}
.demo-col:nth-child(odd) div{
  background: #fdefed;
}
.demo-col:nth-child(even) div{
  background: #c2c4c2;
}
</style>`,
      gutterRow:`
      <w-row :gutter="20">
          <w-col class="demo-col" :span="8"><div></div></w-col>
          <w-col class="demo-col" :span="8"><div></div></w-col>
          <w-col class="demo-col" :span="8"><div></div></w-col>
        </w-row>`.replace(/^\s*/gm, '').trim(),
      offsetRow:`
      <w-row :gutter="20">
          <w-col class="demo-col" :span="8"><div></div></w-col>
          <w-col class="demo-col" :span="8"><div></div></w-col>
        </w-row>
        <w-row :gutter="20">
          <w-col class="demo-col" :span="8" :offset="5"><div></div></w-col>
          <w-col class="demo-col" :span="8"><div></div></w-col>
        </w-row>
        <w-row :gutter="20">
          <w-col class="demo-col" :span="8" :offset="2"><div></div></w-col>
          <w-col class="demo-col" :span="8" :offset="5"><div></div></w-col>
        </w-row>`.replace(/^\s*/gm, '').trim(),
      alignRow:`
      <w-row :gutter="20" align="center">
          <w-col class="demo-col" :span="8"><div></div></w-col>
          <w-col class="demo-col" :span="8"><div></div></w-col>
        </w-row>
        <w-row :gutter="20" align="right">
          <w-col class="demo-col" :span="5"><div></div></w-col>
          <w-col class="demo-col" :span="5"><div></div></w-col>
          <w-col class="demo-col" :span="5"><div></div></w-col>
        </w-row>
        <w-row :gutter="20" align="left">
          <w-col class="demo-col" :span="5"><div></div></w-col>
          <w-col class="demo-col" :span="5"><div></div></w-col>
          <w-col class="demo-col" :span="5"><div></div></w-col>
        </w-row>`.replace(/^\s*/gm, '').trim(),
      mediaRow:``.replace(/^\s*/gm, '').trim()
    }
  }
}
</script>

<style lang="less" scoped>
.demo-col div {
  height: 40px;
  border-radius: 5px;
}

.demo-col:nth-child(-n+5) {
  margin-bottom: 20px;
}

.demo-col:nth-child(odd) div {
  background: #fdefed;
}

.demo-col:nth-child(even) div {
  background: #c2c4c2;
}
</style>
