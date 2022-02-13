---
title: layout 布局
sidebarDepth: 2
---
# 布局

<p><code>&lt;w-container></code>：外层容器。当子元素中包含 &lt;w-header> 或 &lt;w-footer> 时，全部子元素会垂直上下排列，否则会水平左右排列</p>
<p><code>&lt;w-header></code>：顶栏容器</p>
<p><code>&lt;w-aside></code>：侧边栏容器</p>
<p><code>&lt;w-main></code>：主要区域容器</p>
<p><code>&lt;w-footer></code>：底栏容器</p>

::: tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外 <code> &lt;w-container> </code> 的子元素只能是后四者，后四者的父元素也只能是 <code> &lt;w-container> </code>
:::
<ClientOnly>
 <layout-demos></layout-demos>
</ClientOnly>