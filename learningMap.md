下面是整理后的**完整前端学习路径（Learning Map）**，已按标准 Markdown 结构排版。你可以直接保存为 frontendLearningMap.md。

----------

# **Frontend Learning Map**

  

> 目标：建立从浏览器原理 → 工程能力 → 框架抽象 → 系统架构的完整能力结构。

----------

# **🧱 第一层：HTML —— 页面结构与浏览器认知**

  

## **🎯 学习目标**

  

理解浏览器如何把文本解析为可视页面结构。

----------

## **1.1 浏览器工作流程**

-   URL 解析
    
-   DNS 解析
    
-   HTTP 请求/响应
    
-   HTML 解析
    
-   DOM 树构建
    
-   CSSOM 构建
    
-   Render Tree 生成
    
-   Layout（重排）
    
-   Paint（重绘）
    

  

### **掌握标准**

-   能画出完整渲染流程图
    
-   能解释 DOM 与 Render Tree 的区别
    
-   理解重排与重绘的区别
    
### **学习笔记**

-   完整流程：URL → DNS → TCP/TLS → HTTP → HTML/DOM → CSS/CSSOM → Render Tree → Layout（重排）→ Paint（重绘）→ Composite
-   关键区别：重排影响几何（尺寸/位置）、重绘影响像素外观、合成常处理 transform/opacity；动画与位移优先使用 transform/opacity，避免 top/left/width/height
-   脚本加载：普通脚本阻塞解析；defer 下载与解析并行，待 DOM 解析完成后按顺序执行；async 下载完立即执行、顺序不定，可能早于或晚于 DOM 完成
-   DevTools 实验结论：使用 left/top 的版本在 Performance 中出现更多 Layout/Paint，且启用 Paint Flashing 时重绘区域更大；使用 transform 的版本主要走 Composite，闪烁更少，合成层开销更低

----------

## **1.2 HTML 语义结构**

-   文档结构标签：html, head, body
    
-   语义标签：header, nav, main, section, article, footer
    
-   块级元素 vs 行内元素
    
-   嵌套规则
    

  

### **掌握标准**

-   能写出结构清晰的页面骨架
    
-   理解语义化的意义（SEO / 可维护性）
    
### **学习笔记**

-   能从零写出基本 HTML 骨架：doctype、html、head、meta charset、meta viewport、title 与 body 结构
-   理解语义标签作用：header 表示页首，nav 表示导航，main 是主内容，section/section+heading 表示主题分区，article 表示可独立成篇内容，aside 表示侧栏/补充信息，footer 表示页脚；尽量避免只用 div 拼出页面（div 汤）
-   明白 li 是列表项本身不具备跳转能力，真正的链接由带 href 的 a 提供；导航列表推荐结构为 nav > ul > li > a
-   学会添加可访问的“跳至主内容”链接：在顶部使用 a href="#main-content"，并给 main 设置 id="main-content"
-   能用 DevTools 的 Accessibility Tree 检查 Landmarks（banner/navigation/main/complementary/contentinfo）与 Headings 层级（h1 → h2 → h3），验证页面结构是否语义清晰

----------

## **1.3 表单与交互元素**

-   input
    
-   textarea
    
-   button
    
-   form
    
-   默认行为机制
    

  

### **掌握标准**

-   能实现一个基本表单提交页面
    
-   理解浏览器默认提交逻辑
    

----------

# **🏗 第二层：CSS —— 布局与视觉系统**

  

## **🎯 学习目标**

  

掌握页面布局与视觉表现机制。

----------

## **2.1 盒模型**

-   content
    
-   padding
    
-   border
    
-   margin
    
-   box-sizing
    

  

### **掌握标准**

-   能解释元素实际占用宽度如何计算
    

----------

## **2.2 布局系统**

-   文档流
    
-   Flexbox
    
-   Grid
    
-   定位（relative / absolute / fixed）
    

  

### **掌握标准**

-   手写三栏布局
    
-   理解脱离文档流的影响
    

----------

## **2.3 视觉系统**

-   字体系统
    
-   颜色系统
    
-   阴影
    
-   边框
    

----------

## **2.4 动画与过渡**

-   transition
    
-   transform
    
-   @keyframes
    
-   性能差异（transform vs top/left）
    

  

### **掌握标准**

-   能实现 hover 动画
    
-   理解 transform 性能优势
    

----------

# **⚙ 第三层：JavaScript —— 逻辑与交互**

  

## **🎯 学习目标**

  

掌握浏览器端逻辑控制与动态交互。

----------

## **3.1 语言基础**

-   变量与作用域
    
-   函数
    
-   对象
    
-   数组
    
-   解构赋值
    

----------

## **3.2 DOM 操作**

-   querySelector
    
-   createElement
    
-   appendChild
    
-   属性修改
    
-   innerHTML vs textContent
    

----------

## **3.3 事件系统**

-   addEventListener
    
-   事件冒泡
    
-   事件委托
    

----------

## **3.4 异步机制**

-   回调函数
    
-   Promise
    
-   async / await
    
-   fetch API
    

  

### **掌握标准**

-   能用 fetch 加载 JSON 并渲染列表
    
-   能实现 loading 状态
    
-   理解 Promise 本质
    

----------

# **⚙ 第四层：前端工程化**

  

## **🎯 学习目标**

  

理解现代前端工程体系。

----------

## **4.1 模块化**

-   ES Module
    
-   import / export
    

----------

## **4.2 构建工具**

-   Vite 的作用
    
-   打包原理
    
-   开发服务器机制
    

----------

## **4.3 NPM 与依赖管理**

-   package.json
    
-   语义化版本号
    
-   node_modules
    

  

### **掌握标准**

-   能创建并运行 Vite 项目
    
-   理解 npm install 的过程
    
-   理解开发环境与生产环境区别
    

----------

# **🧠 第五层：框架抽象（以 Vue 为例）**

  

## **🎯 学习目标**

  

理解框架的抽象层解决了哪些问题。

----------

## **5.1 响应式系统**

-   ref
    
-   reactive
    
-   响应式原理
    

----------

## **5.2 组件化**

-   组件思想
    
-   props
    
-   事件传递
    

----------

## **5.3 路由系统**

-   SPA 原理
    
-   history vs hash
    
-   动态路由
    

  

### **掌握标准**

-   理解 Vue 与原生 DOM 操作差异
    
-   能构建简单 SPA
    

----------

# **🚀 第六层：前后端系统协作**

  

## **🎯 学习目标**

  

理解浏览器与服务器如何构成完整系统。

----------

## **6.1 HTTP 基础**

-   请求结构
    
-   响应结构
    
-   状态码
    
-   JSON
    

----------

## **6.2 Express 基础**

-   路由
    
-   中间件
    
-   RESTful API 设计
    

----------

## **6.3 部署**

-   静态部署（GitHub Pages）
    
-   服务器部署
    
-   环境变量
    

  

### **掌握标准**

-   能设计简单 API
    
-   理解 CORS
    
-   能部署完整前后端项目
    

----------

# **🗺 学习顺序（不可跳跃）**

```
1 → 2 → 3 → 4 → 5 → 6
```

----------

# **📅 建议学习节奏**

**阶段**

**建议时间**

HTML

1 周

CSS

1–2 周

JavaScript

2–3 周

工程化

1 周

Vue

2 周

Node

2 周

总周期约 8–10 周。

----------

如果你愿意，下一步我可以：

-   帮你把这个转成 Notion 结构
    
-   或拆成每日训练清单
    
-   或做成「任务制学习表」
    

  

你决定我们用哪种形式执行。
