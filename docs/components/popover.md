---
title: Popover 弹出层
sidebarDepth: 2
---
# 弹出层

<ClientOnly>
 <popover-demos></popover-demos>
</ClientOnly>

### Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| trigger | 弹出层的触发方式 |    String | click/hover | click
|placement|弹出层位置|String|top/right/left/bottom|top
| contentClassName | 弹出层内容类名 |    String | -- | --

### Events
|事件名称| 说明 |  |  回调参数  | |
| :-------------: |:----:| :---------------------:| :---------------------:| :--:|
| onClose | 弹出层关闭的回调 |  |  -- |