name: index
class: center, middle 

.left-top-title[
*寿寿前端系列讲座（4）*
]

.master-title[
# 前端自动化工作流简介
]

.mtl[

by 寿寿

[http://raytaylorlin.com](http://raytaylorlin.com)
]

---

background-image: url(http://fe-lecture-slides.qiniudn.com/fe-workflow-automation/%E5%89%8D%E7%AB%AF%E8%87%AA%E5%8A%A8%E5%8C%96%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%AE%80%E4%BB%8B.png)

# 内容提要

---

# 引言

.mts[
### 什么是前端工作流？
]

简单来说，就是你完成前端开发的整个工作流程。

普通的程序开发工作流：创建，编码，测试

前端有其特殊性，所以会多很多步骤。

比如：切图，编码（HTML/CSS/Javascript），浏览器兼容测试，压缩代码，优化图片……

---

## 回顾：习以为常的传统做法

1、创建项目：新建各种文件夹（images、css、js等等），把原有项目中常用的库复制进来  
2、启动本地测试服务器（localhost），通常是WAMP环境  
<hr>
3、切图，编码页面（HTML+CSS）  
4、保存，打开/刷新**多个**浏览器，查看刚才编写的页面是否达到效果  
5、~~（如果你是一个正常的前端开发者）~~用DevTools试验/微调样式  
6、重复3-6，直到页面达到效果  
<hr>
7、编码交互和事件（Javascript）  
8、保存，打开/刷新浏览器，手动触发事件，查看是否达到效果  
9、~~（如果你是一个正常的前端开发者）~~用DevTools调试JS脚本  
10、重复7-10，直到页面达到效果  

---

## 回顾：习以为常的传统做法（续）

11、配合后端人员，填充真实数据，查看是否达到显示和逻辑效果  
12、重复3-12，直到达到效果  
13、重复上述3-13，完成下一个页面，再下一个页面……
<hr>
14、构建：开一个压缩工具（在线或线下的），压缩js和css文件，修改html中的引用文件路径  
15、部署：将整个项目打包，通过FTP或scp上传到服务器  
16、线上版本出bug，回到上面3……  
<hr>
17、项目后期，代码日渐庞大，越来越难维护。改bug或加功能都要小心翼翼，因为经常顾此失彼，改了这个地方其他地方又产生新的bug……（然后你就会逐渐开始对代码产生恐惧）

---

class: center, middle

**每增加一个切片都要改CSS**浪费了你多少时间？

**按F5刷新**浪费了你多少时间？

**按F5后等待页面加载完毕再测试**浪费了你多少时间？

**测试DOM操作**浪费了你多少时间？

**每次发布都要手动构建和部署代码**浪费了你多少时间？

.mtm[
### 如果你还在使用传统的方式做前端，那你就out了
]

---

## 解放你的生产力

.center.mtl[
### *计算机最擅长做繁琐而重复的事情，*  
### *何不把最麻烦的事交给它？*
]

.center.mtl[
### *花点精力配置，全部自动化，一劳永逸。*
]

---

# 总结

---

# 参考


---
class: center, middle

.master-title[
# Q & A
]

---
class: center, middle

.master-title[
## THANK YOU

# 前端自动化工作流简介
]

.mtl[

by 寿寿

[http://raytaylorlin.com](http://raytaylorlin.com)
]

.small[
This slide is created by [remark.js](http://remarkjs.com/)
]