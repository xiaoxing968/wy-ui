---
title: input 输入框
sidebarDepth: 2
---
# 输入框
<ClientOnly>
 <input-demos></input-demos>
</ClientOnly>

### Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| v-model / value | 绑定值 |    String / Number | -- | --
|placeholder|输入框占位文本|String|--|--
| error      | 错误提示      |  String |--| --
| disabled      | 禁用      |  Boolean |--| false
| readonly      | 原生属性，是否只读      |  Boolean |--| false
| clearable      | 是否启用清除图标，点击清除图标后会清空输入框      |  Boolean |--| false
| left-icon      | 左侧图标名称      |  String |--| --
| right-icon      | 右侧图标名称      |  String |--| --

### Slots
|插槽名称|  |  | 说明   | |
| :-------------: |:----:| :---------------------:| :---------------------:| :--:|
| left-icon |  |  |  左侧图标 |
| right-icon |  |  |  右侧图标 |

### Events
|事件名称| 说明 |  |  回调参数  | |
| :-------------: |:----:| :---------------------:| :---------------------:| :--:|
| input | 输入框内容变化时触发 |  |  value: string (当前输入的值) |
| change | 输入框内容变化时触发 |  |  value: string (当前输入的值) |
| focus | 输入框获得焦点时触发 |  |  value: string (当前输入的值) |
| blur | 输入框失去焦点时触发 |  |  value: string (当前输入的值) |
| clear | 点击清除按钮时触发 |  |  -- |
