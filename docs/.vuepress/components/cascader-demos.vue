<template>
  <div class="demo-button-wrapper">

    <h3>基础用法</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-cascader v-model="value" :source="source"></w-cascader>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">
            通过 <code>source</code> 传入数据源
          </div>
          <pre><code class="vue">{{ normalContent }}</code></pre>

        </div>
      </div>
      <w-fold :isShowIndex="0"></w-fold>
    </div>

    <h3>默认值</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-cascader v-model="selected" :source="source"></w-cascader>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">默认值通过数组方式指定</div>
          <pre><code class="vue">{{ defaultContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="1"></w-fold>
    </div>

    <h3>可清空选择</h3>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-cascader v-model="value" :source="source" clearable></w-cascader>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">通过设置 <code>clearable</code> 在选择结束后可清空选项</div>
          <pre><code class="vue">{{ clearableContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="2"></w-fold>
    </div>

    <h3>动态加载</h3>
    <p>当选中某一级时，动态加载该级下的选项</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-cascader
            v-model="value"
            clearable
            :source.sync="lazySource"
            :lazy-load="lazyLoad"
        ></w-cascader>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <div class="code-user-desc">通过设置 <code>clearable</code> 在选择结束后可清空选项</div>
          <pre><code class="vue">{{ lazyContent }}</code></pre>
        </div>
      </div>
      <w-fold :isShowIndex="3"></w-fold>
    </div>
  </div>
</template>

<script>
import WCascader from '../../../src/cascader/index'
import WFold from './fold'

const dbList = [
  {
    value: 'guangdong',
    name: '广东',
    isLeaf: false,
    id: 1,
    parent_id: 0
  },
  {
    value: 'hunan',
    name: '湖南',
    id: 2,
    isLeaf: false,
    parent_id: 0
  },
  {
    value: 'guangzhou',
    name: '广州',
    isLeaf: true,
    id: 3,
    parent_id: 1
  },
  {
    value: 'shenzhen',
    name: '深圳',
    isLeaf: true,
    id: 4,
    parent_id: 1
  },
  {
    value: 'changsha',
    name: '长沙',
    isLeaf: false,
    id: 5,
    parent_id: 2
  },
  {
    value: 'shaoyang',
    name: '邵阳',
    isLeaf: true,
    id: 6,
    parent_id: 2
  },
  {
    value: 'ningxiang',
    name: '宁乡',
    isLeaf: true,
    id: 7,
    parent_id: 5
  }
];
const ajax = function (id = 0) {
  return new Promise((resolve, reject) => {
    let result = dbList.filter(item => item.parent_id === id)
    setTimeout(() => {
      resolve(result)
    }, 1500)
  })
}
export default {
  name: 'demo-button',
  components: {
    WFold, WCascader
  },
  data() {
    return {
      value: [],
      lazySource: [],
      selected: ['hunan', 'changsha', 'yuelu'],
      source: [
        {
          name: '湖南',
          value: 'hunan',
          children: [
            {
              name: '长沙市',
              value: 'changsha',
              children: [
                {name: '岳麓区', value: 'yuelu'},
                {name: '宁乡市', value: 'ningxiang'},
              ]
            },
            {
              name: '邵阳',
              value: 'shaoyang',
            }
          ]
        }, {
          name: '浙江',
          value: 'zhejiang',
          children: [
            {
              name: '杭州',
              value: 'hangzhou',
              children: [
                {name: '上城', value: 'shangcheng'},
                {name: '下城', value: 'xiacheng'},
                {name: '江干', value: 'jianggan'},
              ]
            },
            {
              name: '嘉兴',
              value: 'anhui',
              children: [
                {name: '南湖', value: 'nanhu'},
                {name: '秀洲', value: 'xiuzhou'},
                {name: '嘉善', value: 'jiashan'},
              ]
            },
          ]
        }, {
          name: '福建',
          value: 'fujian',
          children: [
            {
              name: '福州',
              value: 'fuzhou',
              children: [
                {name: '鼓楼', value: 'gulou'},
                {name: '台江', value: 'taijiang'},
                {name: '仓山', value: 'cangshan'},
              ]
            },
          ]
        }, {
          name: '安徽',
          value: 'anhui',
          children: [{
            name: '合肥',
            value: 'hefei',
            children: [{
              name: '瑶海', value: 'yaohai'
            }, {
              name: '庐阳', value: 'luyang'
            }]
          }]
        }],
      normalContent: `<w-cascader v-model="value" :source="source"></w-cascader>
export default {
  data() {
    return {
      value:[],
      source:[
        {
          name: '湖南',
          value: 'hunan',
          children: [
            {
              name: '长沙市',
              value: 'changsha',
              children: [
                {name: '岳麓区', value: 'xiacheng'},
                {name: '宁乡市', value: 'ningxiang'},
              ]
            },
            {
              name: '邵阳',
              value: 'shaoyang',
            }
          ]
        },{
          name: '浙江',
          value: 'zhejiang',
          children: [
            {
              name: '杭州',
              value: 'hangzhou',
              children: [
                {name: '上城', value: 'shangcheng'},
                {name: '下城', value: 'xiacheng'},
                {name: '江干', value: 'jianggan'},
              ]
            },
            {
              name: '嘉兴',
              value: 'anhui',
              children: [
                {name: '南湖', value: 'nanhu'},
                {name: '秀洲', value: 'xiuzhou'},
                {name: '嘉善', value: 'jiashan'},
              ]
            },
          ]
        }, {
          name: '福建',
          value: 'fujian',
          children: [
            {
              name: '福州',
              value: 'fuzhou',
              children: [
                {name: '鼓楼', value: 'gulou'},
                {name: '台江', value: 'taijiang'},
                {name: '仓山', value: 'cangshan'},
              ]
            },
          ]
        }, {
          name: '安徽',
          value: 'anhui',
          children: [{
            name: '合肥',
            value: 'hefei',
            children: [{
              name: '瑶海', value: 'yaohai'
            }, {
              name: '庐阳', value: 'luyang'
            }]
          }]
        }]
    }
  }
}
`.replace(/^\s*/gm, '').trim(),
      defaultContent: `
<w-cascader v-model="value" :source="source"></w-cascader>
export default {
  data() {
    return {
      selected:[hunan', 'changsha', 'yuelu],
      source:[
        {
          name: '湖南',
          value: 'hunan',
          children: [
            {
              name: '长沙市',
              value: 'changsha',
              children: [
                {name: '岳麓区', value: 'yuelu'},
                {name: '宁乡市', value: 'ningxiang'},
              ]
            },
            {
              name: '邵阳',
              value: 'shaoyang',
            }
          ]
        },{
          name: '浙江',
          value: 'zhejiang',
          children: [
            {
              name: '杭州',
              value: 'hangzhou',
              children: [
                {name: '上城', value: 'shangcheng'},
                {name: '下城', value: 'xiacheng'},
                {name: '江干', value: 'jianggan'},
              ]
            },
            {
              name: '嘉兴',
              value: 'anhui',
              children: [
                {name: '南湖', value: 'nanhu'},
                {name: '秀洲', value: 'xiuzhou'},
                {name: '嘉善', value: 'jiashan'},
              ]
            },
          ]
        }, {
          name: '福建',
          value: 'fujian',
          children: [
            {
              name: '福州',
              value: 'fuzhou',
              children: [
                {name: '鼓楼', value: 'gulou'},
                {name: '台江', value: 'taijiang'},
                {name: '仓山', value: 'cangshan'},
              ]
            },
          ]
        }, {
          name: '安徽',
          value: 'anhui',
          children: [{
            name: '合肥',
            value: 'hefei',
            children: [{
              name: '瑶海', value: 'yaohai'
            }, {
              name: '庐阳', value: 'luyang'
            }]
          }]
        }]
    }
  }
}`.replace(/^\s*/gm, '').trim(),
      clearableContent: `<w-cascader v-model="value" :source="source" clearable></w-cascader>`.replace(/^\s*/gm, '').trim(),
      lazyContent: `<x-cascader v-model="selected"
            clearable
            placeholder="动态加载选项"
            :source.sync="source"
            :lazy-load="lazyLoad">
</x-cascader>

const dbList = [
  {
    value: 'guangdong',
    label: '广东',
    isLeaf: false,
    id:1,
    parent_id:0
  },
  {
    value: 'hunan',
    label: '湖南',
    id:2,
    isLeaf: false,
    parent_id:0
  },
  {
    value: 'guangzhou',
    label: '广州',
    isLeaf: true,
    id:3,
    parent_id:1
  },
  {
    value: 'shenzhen',
    label: '深圳',
    isLeaf: true,
    id:4,
    parent_id:1
  },
  {
    value: 'changsha',
    label: '长沙',
    isLeaf: false,
    id:5,
    parent_id:2
  },
  {
    value: 'shaoyang',
    label: '邵阳',
    isLeaf: true,
    id:6,
    parent_id:2
  },
  {
    value: 'ningxiang',
    label: '宁乡',
    isLeaf: true,
    id:7,
    parent_id:5
  }
];

const ajax = function (id = 0) {
  return new Promise((resolve, reject) => {
    let result = dbList.filter(item => item.parent_id === id)
    setTimeout(() => {
      resolve(result)
    }, 1500)
  })
}

export default {
  data () {
    return {
      selected: [],
      source: []
    }
  },
  created () {
    ajax().then(result => {
      this.source = result;
    })
  },
  methods: {
    lazyLoad (node, resolve) {
      ajax(node.id).then(result => {
        resolve(result)
      })
    }
  }
}`.replace(/^\s*/gm, '').trim(),
    }
  },
  created() {
    ajax().then(result => {
      this.lazySource = result;
    })
  },
  methods: {
    lazyLoad(node, resolve) {
      ajax(node.id).then(result => {
        resolve(result)
      })
    }
  }
}
</script>

<style lang="less">
</style>