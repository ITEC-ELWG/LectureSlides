name: index
class: center, middle 
.master-title[
# Javascript模块化实战
]

.mtl[

by 寿寿

[http://raytaylorlin.com](http://raytaylorlin.com)
]

---

background-image: url(http://fe-lecture-slides.qiniudn.com/Javascript%E6%A8%A1%E5%9D%97%E5%8C%96%E5%AE%9E%E6%88%98.png)

# 内容提要

---

# 引言

.mtl[
### 模块化的Javascript早已流行起来
]

.mtm[
### 如果你还在使用传统的方式写JS，那你就out了
]

---

## 思想的转变

.center.mtl[
### 面向过程

|

### 面向对象

|

### 面向模块
]

---

## 什么是模块？

在其他语言里面，模块的概念其实并不陌生

```c
#include <stdio.h>  // C
```

```java
import java.io.*;  // Java
```

```python
import os  # Python
```

模块是**松散耦合的**，**实现特定功能的**一组方法的集合。

---

## 什么是模块？（续）

```javascript
/* util.js */

var IS_DEBUG = true;

function each(arr) {
    // each实现
}

function log(info) {
    if (IS_DEBUG) {
        console.log(info);
    }
}
```

---

## 为什么使用模块？

### 恼人的命名冲突

解决办法：参照Java的方式，引入命名空间

```javascript
// 冗长的命名空间声明
var org = {};
org.elwg = {};
org.elwg.util = {};

org.elwg.util.each = function (arr) {
    // ...
};

org.elwg.util.log = function (str) {
    // ...
};
```

---

## 为什么使用模块？（续）

### 繁琐的文件依赖

（1）漏写依赖

```html
*<script src="util.js"></script>
<script src="dialog.js"></script>
<script>
    org.elwg.dialog.init({
        /* 传入配置 */
    });
</script>
```

（2）繁琐的依赖

```html
<script type="text/javascript" src="js/lib/jquery-2.0.3.min.js"></script>
<script type="text/javascript" src="js/lib/jquery.uploadify.js"></script>
<script type="text/javascript" src="js/lib/openseadragon.js"></script>
<script type="text/javascript" src="js/util/Constant.js"></script>
<script type="text/javascript" src="js/modules/common_view.js"></script>
<script type="text/javascript" src="js/modules/image_view.js"></script>
<script type="text/javascript" src="js/main/board_present.js"></script>
```

---

class: center, middle

*Javascript当前版本并没有为开发者们提供以一种合理的方式来引入模块的方法。正在制定中的ECMAScript标准第六版，将正式支持"类"和"模块"，但还需要很长时间才能投入实用。*

### Javascript是强大的，可以模拟模块的功能。


