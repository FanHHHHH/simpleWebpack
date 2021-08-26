## 简易webpack

### bundler是什么？
它是我们可以在模块化地写代码

### 模块化方案
#### es6 modules
![](https://basic-1306743547.cos.ap-shanghai.myqcloud.com/learn-01/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16299544759366.png)

比如我想使用lodash
#### commonJS
![](https://basic-1306743547.cos.ap-shanghai.myqcloud.com/learn-01/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16299545305344.png) 

#### 依赖关系
![](https://basic-1306743547.cos.ap-shanghai.myqcloud.com/learn-01/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_1629954679208.png)

### 本项目实现
1. 语法解析，提取它的依赖
2. 递归创建一个依赖关系图
3. 将所有内容打包到一个文件内

### 示例项目文件
1. entry.js
2. message.js
3. name.js

### 实现
bundler.js
```
// 读取文件信息，并获得当前js文件的依赖关系
function createAsset(filename) {//代码略}
// 从入口开始分析所有依赖项，形成依赖图，采用广度遍历
function createGraph(entry) {//代码略}
// 根据生成的依赖关系图，生成浏览器可执行文件
function bundle(graph) {//代码略}
```

#### 如何分析依赖
从入口开始读取文件（字符串）-> AST 






 
