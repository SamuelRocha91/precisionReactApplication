# MeasureApp 前端

<h2>🌐</h2>
<ul>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README.md" target="_blank">Português</a></li>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_es.md" target="_blank">Español</a></li>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_en.md" target="_blank">English</a></li>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ru.md" target="_blank">Русский</a></li>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ch.md" target="_blank">中文</a></li>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ar.md" target="_blank">العربية</a></li>
</ul>

![状态: 开发中](https://img.shields.io/badge/status-%E5%BC%80%E5%8F%91%E4%B8%AD-yellow)

![应用操作演示](./gifs/apiMeasure.gif)

![Backend Node.js](git@github.com:SamuelRocha91/apiMeasureWaterAndGas.git)

## 描述

**MeasureApp 前端** 是一个提供友好界面的应用程序，用于管理水和天然气的消费测量。通过集成人工智能，用户可以注册仪表，跟踪用量，并详细控制开支。该应用程序是优化水和天然气资源管理的完整系统的一部分。

## 功能

- **用户注册**: 允许新消费者在平台上注册。
- **消费测量**: 直接在界面中输入水和天然气的测量数据。
- **消费历史**: 查看每月消费历史记录，带有图表和详细信息。

## 使用技术

- **React**: 用于创建用户界面的 JavaScript 库。
- **Vite**: 用于快速构建 Web 开发项目的工具。
- **React Router**: 用于应用程序中的页面导航。
- **SweetAlert2**: 用于显示交互式和友好警告的库。

## 依赖项

```json
"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.26.1",
  "sweetalert2": "^11.12.4"
},
"devDependencies": {
  "@eslint/js": "^9.9.0",
  "@types/react": "^18.3.3",
  "@types/react-dom": "^18.3.0",
  "@vitejs/plugin-react-swc": "^3.5.0",
  "eslint": "^9.9.0",
  "eslint-plugin-react-hooks": "^5.1.0-rc.0",
  "eslint-plugin-react-refresh": "^0.4.9",
  "globals": "^15.9.0",
  "typescript": "^5.5.3",
  "typescript-eslint": "^8.0.1",
  "vite": "^5.4.1"
}
```

## 如何在本地运行项目

### 使用 Docker

1. 克隆仓库:

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   git clone git@github.com:SamuelRocha91/apiMeasureWaterAndGas.git
   ```

2. 下载 `docker-compose.yml` 文件:

   [访问 Google Drive](https://drive.google.com/file/d/1p5MKW3YB5En05Jp5ETWxNbmHllinihiH/view?usp=sharing)

3. 将 `docker-compose.yml` 文件放置在类似以下的文件结构中:

   ![文件结构](./public/pastasDocker.png)

4. 构建镜像并启动容器:

   ```bash
   docker-compose up --build
   ```

### 不使用 Docker

1. 克隆仓库:

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   ```

2. 进入项目目录:

   ```bash
   cd precisionReactApplication
   ```

3. 安装依赖项:

   ```bash
   npm install
   ```

4. 启动开发服务器:

   ```bash
   npm run dev
   ```

5. 在浏览器中访问 `http://localhost:5173` 以打开应用程序。

## 文件结构

```bash
precisionReactApplication/
├── assets/          # 应用程序的图片和视觉资源
├── components/      # 可重用的 React 组件
├── styles/          # CSS 样式文件
├── public/          # 公共文件
├── src/             # 应用程序的源代码
└── README.md        # 项目文档
```

## 计划添加的功能

- **响应式设计**: 适应不同设备的显示效果。
- **分页**: 数据的分页显示。
- **CSS 调整**: 改进界面样式。
- **单元测试和集成测试**: 通过自动化测试确保代码质量。
