# <img src="https://cdn-icons-png.flaticon.com/128/83/83522.png" alt="Full Projects Logo" width="42" height="30" /> MeasureApp 前端 <img src="https://cdn-icons-png.flaticon.com/128/83/83522.png" alt="Full Projects Logo" width="42" height="30" />

## 🌐 可用语言

[![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ar.md)

![状态: 开发中](https://img.shields.io/badge/status-in%20development-yellow)

![应用演示](./gifs/apiMeasure.gif)

🤖 [Node 后端仓库](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ch.md)

<details>
  <summary><h2>简介</h2></summary>

**MeasureApp 前端** 是一个网络应用程序，提供一个便捷的界面来管理水和气的消费读数。它利用人工智能，允许用户记录读数、跟踪消费并保持详细的费用记录。该应用程序是一个综合系统的一部分，旨在优化水和气的资源管理。

</details>

<details>
  <summary><h2>功能</h2></summary>

- **用户注册**：轻松注册新用户。
- **消费读数**：允许通过界面直接输入水和气的读数。
- **消费历史**：显示每月消费历史，并提供详细图表。

## 使用的技术

- **React**：用于构建用户界面的 JavaScript 库。
- **Vite**：快速有效的网页开发工具。
- **React Router**：用于页面之间的导航路由管理。
- **SweetAlert2**：用于显示互动和可定制的警告的库。

</details>

<details>
  <summary><h2> 依赖</h2></summary>

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
</details>

## 如何在本地运行项目

<details>
  <summary><h2>🚀 使用 Docker</h2></summary>

1. 克隆仓库：

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   git clone git@github.com:SamuelRocha91/apiMeasureWaterAndGas.git
   ```

2. 下载 `docker-compose.yml` 文件。
   [从 Google Drive 下载](https://drive.google.com/file/d/1p5MKW3YB5En05Jp5ETWxNbmHllinihiH/view?usp=sharing)

3. 将 `docker-compose.yml` 文件放置在以下文件夹结构中：
   
   ![文件夹结构](./public/pastasDocker.png)

4. 构建镜像并启动容器：

   ```bash
   docker-compose up --build
   ```

</details>

<details>
  <summary><h2>🚀 不使用 Docker</h2></summary>

1. 克隆仓库：

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   ```

2. 进入项目目录：

   ```bash
   cd precisionReactApplication
   ```

3. 安装依赖：

   ```bash
   npm install
   ```

4. 启动开发服务器：

   ```bash
   npm run dev
   ```

5. 在浏览器中访问应用程序，地址为 `http://localhost:5173`。

</details>

<details>
  <summary><h2>文件夹结构</h2></summary>


```bash
precisionReactApplication/
├── assets/          # 图片和视觉资源
├── components/      # 可重用的 React 组件
├── styles/          # CSS 样式
├── public/          # 公共静态文件
├── src/             # 应用程序源代码
└── README.md        # 项目文档
```
</details>

## 其他项目

<details>
  <summary><strong>🔗 相关仓库</strong></summary>

  - 💎 [Delivery BackEnd](https://github.com/SamuelRocha91/delivery_back/blob/main/README_ch.md) - Ruby On Rails 后端
  - 🛒 [Consumy 应用程序](https://github.com/SamuelRocha91/consumy/blob/main/README_ch.md) - 消费者应用程序
  - 👨‍💼 [Seller 应用程序](https://github.com/SamuelRocha91/seller_application/blob/main/README_ch.md) - 卖家应用程序
  - 💲 [Paymenty API](https://github.com/SamuelRocha91/paymenty/blob/main/README_ch.md) - 支付 API

</details>
