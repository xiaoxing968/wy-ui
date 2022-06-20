---
title: 快速上手
---

# 快速上手

本章节待完善

### 安装

<pre v-highlight> <code class="sh">npm install hi-wy-ui</code> </pre>

### 开始使用

#### 添加 CSS 样式

使用本框架前，请确保整个项目的 CSS 开启了 border-box
<pre v-highlight>
    <code class="css"> 
        * , * ::before,*::after { box-sizing: border-box; }
    </code> 
</pre>

#### 按需引入

<pre v-highlight>
 <code class="js">
 import { WButton } from 'hi-wy-ui'
 import 'hi-wy-ui/dist/wy-ui.less'
 import Vue from 'vue'

 new Vue({
    el: '#app',
    components: {
        WButton
    }
 })
</code>

</pre>

#### 使用组件

<pre v-highlight> <code> &lt;w-button> 欢迎使用Wy-UI &lt;/w-button> </code> </pre>
