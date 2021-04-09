## 安装
1. CSS 样式

使用本框架前请在 CSS 中开启 border-box

```scss
*{
	box-sizing: border-box;
 }
```

IE8 及以上浏览器都支持此样式。

你还需要设置默认颜色等变量（后续会改为scss变量）

```scss
:root{
  --button-height:32px;
  --font-size:14px;
  --button-bg:white;
  --button-active-bg:#eee;
  --border-radius:4px;
  --color:#333;
  --border-color:#999;
  --border-color-hover:#666;
}
```

IE15 及以上浏览器都支持此样式

2. 安装WyUi

```
npm i --save hi-wy-ui
```

3. 引入WyUi

   ```
   import {Button,ButtonFGroup,Icon} from 'hi-wy-ui'
   import 'hi-wy-ui/dist/index.css'
   
   export default {
     name: 'app',
     components: {
       HelloWorld,
       'w-button':Button,
       'w-icon':Icon
     }
   }
   ```

   