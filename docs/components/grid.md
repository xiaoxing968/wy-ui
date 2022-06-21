---
title: grid 栅格
sidebarDepth: 2
---
# 栅格
<ClientOnly>
 <grid-demos></grid-demos>
</ClientOnly>


### Row Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| gutter | 栅格间隔 |    String/Number | -- | 0
|align|水平排列方式|String|left/right/center|left

### Col Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| span | 栅格占据的列数 |    String/Number | 1-24 | --
|ipad|`≥577`响应式布局|Number/Object|span数字或{ span:1; offset:1 }|--
|narrowPc|`≥769`响应式布局|Number/Object|span数字或{ span:1; offset:1 }|--
|pc|`≥993`响应式布局|Number/Object|span数字或{ span:1; offset:1 }|--
|widePc|`≥1201`响应式布局|Number/Object|span数字或{ span:1; offset:1 }|--