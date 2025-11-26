# MCP Test Repo

用于测试 `fe-testgen-mcp` 的 Monorepo 仓库。

## 技术栈

- **pnpm** - 包管理器 + Workspace
- **TypeScript** - 类型安全的 JavaScript 超集
- **Vite** - 下一代前端构建工具
- **Vitest** - 由 Vite 提供支持的单元测试框架

## 项目结构

```
mcp-test-repo/
├── packages/
│   ├── vue-app/          # Vue 子项目（支持用户行为测试）
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Counter.vue
│   │   │   │   └── Counter.test.ts    # 用户行为测试
│   │   │   └── utils/
│   │   │       ├── multiply.ts
│   │   │       └── multiply.test.ts
│   │   └── ...
│   │
│   └── react-app/        # React 子项目（不支持用户行为测试）
│       ├── src/
│       │   ├── components/
│       │   │   └── Calculator.tsx
│       │   └── utils/
│       │       ├── divide.ts
│       │       └── divide.test.ts     # 仅单元测试
│       └── ...
│
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── README.md
```

## 子项目说明

### @mcp-test/vue-app

Vue 3 项目，**支持用户行为测试**：
- 使用 `@testing-library/vue` 进行组件测试
- 使用 `happy-dom` 作为 DOM 环境
- 包含 `Counter` 组件及其用户交互测试
- 包含 `multiply` 工具函数

### @mcp-test/react-app

React 18 项目，**不支持用户行为测试**：
- 仅支持纯函数单元测试
- 测试环境为 `node`（无 DOM）
- 包含 `Calculator` 组件（无组件测试）
- 包含 `divide` 工具函数及其单元测试

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 运行测试

```bash
# 运行所有子项目的测试
pnpm test

# 仅运行 Vue 项目测试
pnpm test:vue

# 仅运行 React 项目测试
pnpm test:react
```

### 开发

```bash
# 启动 Vue 项目
pnpm dev:vue

# 启动 React 项目
pnpm dev:react
```

### 构建

```bash
pnpm build
```

## API

### Vue App

#### `multiply(a: number, b: number): number`

将两个数字相乘。

```typescript
import { multiply } from '@mcp-test/vue-app'

multiply(3, 4) // => 12
```

### React App

#### `divide(a: number, b: number): number`

将两个数字相除，除数为零时抛出错误。

```typescript
import { divide } from '@mcp-test/react-app'

divide(10, 2) // => 5
divide(5, 0)  // => Error: 除数不能为零
```
