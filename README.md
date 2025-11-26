# MCP Test Repo

用于测试 `fe-testgen-mcp` 的仓库。

## 技术栈

- **TypeScript** - 类型安全的 JavaScript 超集
- **Vite** - 下一代前端构建工具
- **Vitest** - 由 Vite 提供支持的单元测试框架

## 快速开始

### 安装依赖

```bash
npm install
```

### 运行测试

```bash
# 运行测试（watch 模式）
npm test

# 运行测试（单次执行）
npm run test:run

# 运行测试并生成覆盖率报告
npm run test:coverage
```

### 构建

```bash
npm run build
```

## 项目结构

```
mcp-test-repo/
├── src/
│   ├── add.ts          # add 函数实现
│   ├── add.test.ts     # add 函数测试
│   └── index.ts        # 入口文件
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
└── README.md
```

## API

### `add(a: number, b: number): number`

将两个数字相加。

```typescript
import { add } from 'mcp-test-repo'

add(1, 2) // => 3
```
