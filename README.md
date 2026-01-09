<div align="center">

# 🎓 备考大师 (Exam Prep Master)

**一款基于 React 19 的现代化计算机专业课复习备考工具**

[![React](https://img.shields.io/badge/React-19.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-cyan)](https://tailwindcss.com/)

</div>

## 📖 项目简介

这是一个专为计算机专业学生设计的交互式复习题库网站。目前主要收录了 **计算机系统基础 (Computer Systems)** 的核心考点。它不仅提供了基础的刷题功能，还集成了 **番茄钟专注模式**、**错题自动收录**、**背题模式** 等智能化辅助工具，帮助用户高效巩固知识点，提升复习效率。

涵盖内容：数据的机器级表示（二进制/补码/浮点数）、程序的转换与链接、CPU 指令流水线、存储器层次结构等核心知识。

## ✨ 核心功能

### 🧠 智能复习
- **数据持久化**：自动保存答题进度、错题本和收藏记录，刷新页面不丢失（Local Storage）。
- **错题自动收录**：答错题目自动加入“错题本”，答对后自动移除，实现针对性突破。
- **乱序刷题模式**：基于 Fisher-Yates 算法的真随机乱序，拒绝“位置记忆”，检验真实水平。
- **背题模式**：一键开启“上帝视角”，自动展示所有答案与详细解析，适合考前快速突击。

### 🍅 专注番茄钟 (New!)
- **沉浸式计时**：内置番茄工作法计时器，支持工作/休息模式切换。
- **自定义设置**：可调节专注时长，配合舒缓的提示音，助你保持心流状态。
- **迷你悬浮窗**：答题时可将计时器最小化，时刻掌握时间进度。

### 🛠 实用工具
- **多维度筛选**：支持按题型（单选、判断、填空/分析、简答）筛选，或查看收藏/错题。
- **全局搜索**：实时检索题目内容，快速定位知识点。
- **交互式答题**：
  - 单选题/判断题：即时反馈正误，错误自动解析。
  - 综合/简答题：支持富文本/表格展示，支持“查看/隐藏”参考答案。
- **体验优化**：
  - 进度仪表盘：实时统计答题进度与百分比。
  - 响应式设计：完美适配桌面端与移动端。

## 🚀 快速开始

### 前置要求
- Node.js 18+

### 安装与运行

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd Exam_Prep_Master
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
│   ├── pomodoro/           # 番茄钟相关组件与逻辑
│   │   ├── components/     # 子组件 (MiniView, ProgressRing)
│   │   ├── hooks/          # 自定义 Hooks (usePomodoroTimer, etc.)
│   │   └── constants.ts    # 常量配置
│   ├── PomodoroTimer.tsx   # 番茄钟主组件
│   └── QuestionCard.tsx    # 核心题目卡片组件
├── data.ts                 # 题库数据源
├── types.ts                # TypeScript 类型定义
├── App.tsx                 # 主应用逻辑（状态管理、路由、布局）
└── index.css               # 全局样式
```

## 📝 题型支持

- **单项选择题** (Single Choice)
- **判断题** (True/False)
- **综合分析/填空题** (Complex/Fill-in) - 支持 HTML 表格与富文本展示
- **简答题** (Essay/Short Answer)

---

**Happy Coding & Good Luck on Exams!** 🚀
