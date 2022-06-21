---
title: cascader 级联选择器
sidebarDepth: 2
---
# 级联选择器

<ClientOnly>
 <cascader-demos></cascader-demos>
</ClientOnly>

### Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| v-model / value | 选中项绑定值 |    Array | -- | --
| source | 数据源，键名可通过`options`属性配置 |    Array | -- | --
| options | 配置选项，详见下表 |    Object | -- | --
|placeholder|输入框占位文本|String|--|请选择
| clearable      | 是否支持清空选项      |  Boolean |--| false
| height      | 弹出层高度      |  String/Number |--| 150
| lazyLoad      | 加载动态数据的方法      |  Function |function(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用)| --

### Slots
|插槽名称 | 说明 |
| :-------------: | :--:|
| default |  默认插槽，自定义选择框 |

### Events
|事件名称| 说明 |  回调参数  |
| :-------------: |:----:|:---------------------:|
| change | 选中最后一项叶子节点时触发 | value: array (选中节点的值), selectedNodes: array(选中节点的原数据)
| clear | 点击清除按钮时触发 |  |  -- |


### Options
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| value | 指定选项的值的键名|    String | -- | value
| label | 指定选项标签的键名 |    String | -- | label
| children | 指定选项的子选项的键名 |    String | -- | children
|isLeaf|指定选项的叶子节点的标志位的键名|String|--|isLeaf
