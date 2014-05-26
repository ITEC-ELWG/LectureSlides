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

### 模块化的Javascript早已流行起来

### 如果你还在使用传统的方式写JS，那你就out了

* 什么是模块？
* 为什么使用模块？

---

## 思想的转变

.center.mtm[
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

---

*JavaScript当前版本并没有为开发者们提供以一种合理的方式来引入模块的方法。正在制定中的ECMAScript标准第六版，将正式支持"类"和"模块"，但还需要很长时间才能投入实用。*