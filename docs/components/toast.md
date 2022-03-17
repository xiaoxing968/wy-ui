---
title: Toast 轻提示
sidebarDepth: 2
---
# 轻提示

<ClientOnly>
 <toast-demos></toast-demos>
</ClientOnly>

### Toast Options
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|  message | 提示消息文字 |    String | -- | --
| duration | 显示时间, 单位为毫秒。设为 0 则不会自动关闭 | Number  | 	-- |  3000
| showClose | 是否显示关闭按钮。有关闭按钮时不会自动关闭 | Boolean  | 	-- |  false
| enableHtml | 是否将 message 属性作为 HTML 片段处理 | Boolean  | 	-- |  false
| closeButton | 可配置关闭按钮 `text` 文字, `icon` 图标,<br> `onClose` 关闭后的回调(返回当前 Toast 实例) | Object  | 	-- |  { <br>  text:'关闭',<br>  icon:'',<br> onClose:()=>{} <br>}