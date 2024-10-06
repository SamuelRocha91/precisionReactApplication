# <img src="https://cdn-icons-png.flaticon.com/128/83/83522.png" alt="Full Projects Logo" width="42" height="30" /> MeasureApp Frontend <img src="https://cdn-icons-png.flaticon.com/128/83/83522.png" alt="Full Projects Logo" width="42" height="30" />

## 🌐 Available Languages

[![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ar.md)

![Status: In Development](https://img.shields.io/badge/status-in%20development-yellow)

![Application Demonstration](./gifs/apiMeasure.gif)

🤖 [Backend Repository Node](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_en.md)

<details>
  <summary><h2>Description</h2></summary>

The **MeasureApp Frontend** is a web application that provides a user-friendly interface for managing water and gas consumption measurements. Integrated with Artificial Intelligence, it allows users to record measurements, monitor consumption, and maintain detailed control of their expenses. This application is part of a comprehensive system aimed at optimizing the management of water and gas resources.

</details>

<details>
  <summary><h2>Features</h2></summary>

- **User Registration**: Easily register new consumers on the platform.
- **Consumption Measurement**: Allows for the insertion of water and gas measurements directly through the interface.
- **Consumption History**: Displays the monthly consumption history with detailed graphs.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Tool for fast and efficient web development.
- **React Router**: Route management for navigation between pages.
- **SweetAlert2**: Library for displaying interactive and customizable alerts.

</details>

<details>
  <summary><h2>Dependencies</h2></summary>

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

## How to Run the Project Locally

<details>
  <summary><h2>🚀 Using Docker</h2></summary>

1. Clone the repositories:

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   git clone git@github.com:SamuelRocha91/apiMeasureWaterAndGas.git
   ```

2. Download the `docker-compose.yml` file.
   [Access on Google Drive](https://drive.google.com/file/d/1p5MKW3YB5En05Jp5ETWxNbmHllinihiH/view?usp=sharing)

3. Place the `docker-compose.yml` file in the following folder structure:
   
   ![Folder Hierarchy](./public/pastasDocker.png)

4. Build the images and start the containers:

   ```bash
   docker-compose up --build
   ```

</details>

<details>
  <summary><h2>🚀 Without Docker</h2></summary>

1. Clone the repository:

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   ```

2. Navigate to the project directory:

   ```bash
   cd precisionReactApplication
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Access the application in your browser at `http://localhost:5173`.

</details>

<details>
  <summary><h2>Folder Structure</h2></summary>

```bash
precisionReactApplication/
├── assets/          # Images and visual resources
├── components/      # Reusable React components
├── styles/          # CSS style files
├── public/          # Public static files
├── src/             # Application source code
└── README.md        # Project documentation
```
</details>

## Other Projects

<details>
  <summary><strong>🔗 Related Repositories</strong></summary>

  - 💎 [Delivery BackEnd](https://github.com/SamuelRocha91/delivery_back/blob/main/README_en.md) - Ruby On Rails Backend
  - 🛒 [Consumy Application](https://github.com/SamuelRocha91/consumy/blob/main/README_en.md) - Consumer Application
  - 👨‍💼 [Seller Application](https://github.com/SamuelRocha91/seller_application/blob/main/README_en.md) - Seller Application
  - 💲 [Paymenty API](https://github.com/SamuelRocha91/paymenty/blob/main/README_en.md) - Payment API

</details>
