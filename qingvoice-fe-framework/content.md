name: index
class: center, middle 

.master-title[
# 青桔网前端架构简介
]

.mtl[

by 寿寿

2014-10-09

[http://raytaylorlin.com](http://raytaylorlin.com)
]

---

# 内容提要

* 前期：项目结构
* 中期：部署流程
* 后期：重构建议

### 基本原则

**所有的HTML/CSS/Javascript文件都保持小粒度，考虑重用性**

**每个页面（部件）都有相同名字的tpl/less/js相对应**

---

# 项目结构

* /application/
    * controllers/
    * **views/**：HTML源码
* /assets/
    * **less/**：LESS源码
    * **css/**：由LESS生成的CSS，包括图片
    * **images/**：纯静态图片
    * **scripts/**：Javascript源码
* /Gruntfile.js
* /package.json
* /config/：与grunt有关的配置文件（重要）
* /node_modules：grunt（node.js）依赖的模块，**不在版本库内**，前端开发人员自行通过`npm install`安装

---

## HTML结构

* /application/views/templates/：Smarty模板源码
    * base/：存放所有父模板（包括每个页面的祖先模板`base.tpl`，页面的二级父模板（如`mobile_base.tpl`）及其他功能性父模板
    * configs/ichangge.conf：Smarty常量配置文件
    * eban/：存放易班内嵌iframe的页面
    * email/：邮件模板
    * mobile/：所有手机页面的模板
    * partials/：存放所有页面的子部件
* /application/views/templates_c：Smarty编译后的模板（开发者不用管）

`/application/views/templates/`下所有的tpl文件为主页面模板（继承于base.tpl），partials里面有对应名字的文件夹存放对应的子部件

---

## LESS/CSS结构

所有CSS文件均由grunt从LESS源码自动生成，开发者只修改less，但要提交生成的所有css

* /assets/views/less/：LESS源码
    * bootstrap/：全站样式基础库**（此bootstrap非彼bootstrap）**。最终生成`/assets/css/bootstrap-custom.css`
    * 其余结构类似HTML的目录结构
* /assets/css/lib/：存放CSS库文件（目前有[normalize.css](http://necolas.github.io/normalize.css/)、自己构建的bootstrap和[ichangge-player.css](https://github.com/ITEC-ELWG/IChanggePlayer)

---

## LESS/CSS结构（续1）

bootstrap目录概况：

* utils/：存放各种工具类文件
* variables/：存放各种定义常量的文件（如颜色，尺寸等等），**是开发人员经常修改的地方**
* mixins.less：定义常用的mixin
* **bootstrap.less**：生成的bootstrap-custom.css的主入口，引用了所有的utils、variables、mixins和scaffolding
* **dev.less**：开发版的bootstrap，仅引用所有的mixins和varaiables，几乎每一个页面和子部件LESS文件的第一行都会import此文件

---

## LESS/CSS结构（续2）

### 图片使用方式

图片分为*静态图片*和*动态图片*，最直接的区别就是**看这个图片的呈现方式是通过img标签还是由CSS background引用**

* /assets/images/：存放静态图片
* /assets/css/images/：存放动态图片
    * 各子文件夹：存放对应的雪碧图**碎图**
* /assets/css/sprites/：存放由[grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith)将碎图拼合而成的成型雪碧图及对应CSS

---

# 部署流程

部署是什么？

具体流程参见[Tower文档《青桔网Web前端部署说明》](https://tower.im/projects/dd799bb916b24f048e11d4ac745a6018/docs/d9605d0e5a834ff69c91909a4ac01920/)

部署代码的意义：`(JS * 60% + CSS * 50%) * 30% gzip压缩`

Gruntfile讲解
---

class: center, middle

# 重构目标：可读性第一！

---

# 重构建议

### 基本原则

* 所有的HTML/CSS/Javascript文件都保持小粒度，考虑重用性
* 每个页面（部件）都有相同名字的tpl/less/js相对应

### 核心

* 拆分大模块
* 杜绝长函数
* 减少回调链

---

class: center, middle

.master-title[
## THANK YOU

# 青桔网前端架构简介
]

.mtl[

by 寿寿

[http://raytaylorlin.com](http://raytaylorlin.com)
]

.small[
This slide is created by [remark.js](http://remarkjs.com/)
]