<div align="center">

# 🎓 计算机网络大师 (Computer Network Master)

**一款基于 React 19 的现代化计算机网络复习备考工具**

[![React](https://img.shields.io/badge/React-19.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-cyan)](https://tailwindcss.com/)

</div>

## 📖 项目简介

这是一个专为计算机网络课程复习设计的交互式题库网站。它不仅提供了基础的刷题功能，还结合了智能化的复习辅助工具，如错题自动收录、乱序刷题、背题模式等，帮助用户高效巩固知识点。

涵盖内容：子网划分、路由协议 (RIP/OSPF/BGP)、传输层 (TCP/UDP)、物理层基础等核心考点。

## ✨ 核心功能

### 🧠 智能复习

- **数据持久化**：自动保存答题进度和收藏记录，刷新页面不丢失（Local Storage）。
- **乱序刷题模式**：基于 Fisher-Yates 算法的真随机乱序，拒绝“位置记忆”，检验真实水平。
- **错题自动收录**：答错题目自动加入“错题本”，答对后自动移除，实现针对性突破。
- **背题模式**：一键开启“上帝视角”，自动展示所有答案与详细解析，适合考前快速突击。

### 🛠 实用工具

- **多维度筛选**：支持按题型（单选、判断、填空/分析、简答）筛选，或查看收藏/错题。
- **全局搜索**：实时检索题目内容，快速定位知识点。
- **交互式答题**：
  - 单选题/判断题：即时反馈正误，错误自动解析。
  - 综合/简答题：支持“查看/隐藏”参考答案与评分标准。
- **体验优化**：
  - 进度仪表盘：实时统计答题进度与百分比。
  - 一键回到顶部：流畅的导航体验。
  - 响应式设计：完美适配桌面端与移动端。

## 🚀 快速开始

### 前置要求

- Node.js 18+

### 安装与运行

1. **克隆项目**

   ```bash
   git clone <repository-url>
   cd computer-network-review
   ```

2. **安装依赖**

   ```bash
   npm install
   ```

3. **启动开发服务器**

   ```bash
   npm run dev
   ```

4. **构建生产版本**

   ```bash
   npm run build
   ```

## 📂 项目结构

```
src/
├── components/
│   └── QuestionCard.tsx  # 核心题目卡片组件（支持多种交互模式）
├── data.ts               # 基础题库数据
├── data1.ts              # 扩展题库数据
├── types.ts              # TypeScript 类型定义
├── App.tsx               # 主应用逻辑（状态管理、路由、布局）
└── index.css             # Tailwind 样式入口
```

## 📝 题型支持

- **单项选择题** (Single Choice)
- **判断题** (True/False)
- **综合分析/填空题** (Complex/Fill-in) - 支持富文本/表格展示
- **简答题** (Essay/Short Answer)

---

**Happy Coding & Good Luck on Exams!** 🚀
