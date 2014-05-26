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

---

# 预备知识

* 对象字面量
* 对象的扩展
* 作用域
* 立即函数
* 闭包

---

## 对象字面量

**万物皆对象。**

*包括函数、模块，等等。*

对象是属性——名值对（key-value pair）的容器，每个key可以是包括空字符串在内的任意字符串，每个value可以是除`undefined`值之外的任何值。

```javascript
var options = {
    sourceUrl: 'content.md',
    maxPage: 10,
    navigation: {
        click: true,
        scroll: false
    },
    onClick: function(e)
        console.log('on click');
    },
    getSource: function() {
        return this.sourceUrl;
    }
};
```

---

## 对象的扩展

将源对象的所有属性合并到目标对象中。

API: [jQuery.extend()](http://api.jquery.com/jquery.extend/)

```javascript
var target = {};
var source1 = {
    foo: 'bar'
};
var source2 = {
    foo: 'hehe',
    hehe: function() {
        console.log(this.foo);
    }
};

$.extend(target, source1);
$.extend(target, source2);

// 现在target对象已经具备了其它对象的属性
console.log(target.foo);
target.hehe();
```

---

## 作用域

大多数C语法的语言（C/C艹、Java、C#）都有块级作用域，表现在一对花括号中定义的变量在代码块外是不可见的。Javascript的作用域是**函数**，不是代码块！

```javascript
var foo = function() {
    var a = 3, b = 5;
    var bar = function() {
        var c = 7;
        a += (b + c);
    };
    bar();
};
```

变量上升陷阱
```javascript
var foo = 'bar'; 
function test() { 
    console.log(foo); 
    var foo = 'you fool'; 
    console.log(foo); 
}
test(); 
```

---

## 立即函数

定义一个匿名函数并立即执行。

```javascript
(function test() {
    console.log('hehe');
})();

test(); // ReferenceError: test is not defined
```

---

## 闭包

闭包是能够读取其他函数内部变量的函数。

闭包最大的用处有两个：一个是可以读取函数内部的变量（实现私有变量机制），另一个就是让这些变量的值始终保持在内存中。

```javascript
var girl = {
    _cup: 'A',
    askCup: function(isBoyFriend) {
        return isBoyFriend ? this._cup : 'Unknown';
    }
};
console.log(girl.askCup(boy.isBoyFriend));
console.log(girl._cup);  // 暴露了！
```

```javascript
var girl = (function() {
*    var _cup = 'A';
    return {
        askCup: function(isBoyFriend) {
*            return isBoyFriend ? _cup : 'Unknown';
        }
    };
})();
console.log(girl._cup);
```
