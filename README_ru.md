# <img src="https://cdn-icons-png.flaticon.com/128/83/83522.png" alt="Full Projects Logo" width="42" height="30" /> MeasureApp Frontend <img src="https://cdn-icons-png.flaticon.com/128/83/83522.png" alt="Full Projects Logo" width="42" height="30" />

## 🌐 Доступные Языки

[![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ar.md)

![Статус: В Разработке](https://img.shields.io/badge/status-in%20development-yellow)

![Демонстрация Приложения](./gifs/apiMeasure.gif)

🤖 [Репозиторий Бэкенда Node](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ru.md)

<details>
  <summary><h2>Описание</h2></summary>

**MeasureApp Frontend** — это веб-приложение, предоставляющее удобный интерфейс для управления показаниями потребления воды и газа. Встроенное с использованием искусственного интеллекта, оно позволяет пользователям регистрировать показания, отслеживать потребление и поддерживать детальный учет своих расходов. Это приложение является частью комплексной системы, направленной на оптимизацию управления ресурсами воды и газа.

</details>

<details>
  <summary><h2>Функционал</h2></summary>

- **Регистрация Пользователей**: Легкая регистрация новых пользователей на платформе.
- **Показания Потребления**: Позволяет вводить показания воды и газа прямо через интерфейс.
- **История Потребления**: Показывает ежемесячную историю потребления с подробными графиками.

## Используемые Технологии

- **React**: Библиотека JavaScript для создания пользовательских интерфейсов.
- **Vite**: Инструмент для быстрого и эффективного веб-разработки.
- **React Router**: Управление маршрутами для навигации между страницами.
- **SweetAlert2**: Библиотека для отображения интерактивных и настраиваемых предупреждений.

</details>

<details>
  <summary><h2> Зависимости</h2></summary>

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

## Как Запустить Проект Локально

<details>
  <summary><h2>🚀 С Использованием Docker</h2></summary>

1. Клонируйте репозитории:

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   git clone git@github.com:SamuelRocha91/apiMeasureWaterAndGas.git
   ```

2. Скачайте файл `docker-compose.yml`.
   [Скачать с Google Drive](https://drive.google.com/file/d/1p5MKW3YB5En05Jp5ETWxNbmHllinihiH/view?usp=sharing)

3. Поместите файл `docker-compose.yml` в следующую структуру папок:
   
   ![Структура Папок](./public/pastasDocker.png)

4. Постройте образы и поднимите контейнеры:

   ```bash
   docker-compose up --build
   ```

</details>

<details>
  <summary><h2>🚀 Без Docker</h2></summary>

1. Клонируйте репозиторий:

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   ```

2. Перейдите в директорию проекта:

   ```bash
   cd precisionReactApplication
   ```

3. Установите зависимости:

   ```bash
   npm install
   ```

4. Запустите сервер разработки:

   ```bash
   npm run dev
   ```

5. Получите доступ к приложению в вашем браузере по адресу `http://localhost:5173`.

</details>

<details>
  <summary><h2>Структура Папок</h2></summary>


```bash
precisionReactApplication/
├── assets/          # Изображения и визуальные ресурсы
├── components/      # Переиспользуемые компоненты React
├── styles/          # CSS-стили
├── public/          # Публичные статические файлы
├── src/             # Исходный код приложения
└── README.md        # Документация проекта
```
</details>

## Другие Проекты

<details>
  <summary><strong>🔗 Связанные Репозитории</strong></summary>

  - 💎 [Delivery BackEnd](https://github.com/SamuelRocha91/delivery_back/blob/main/README_ru.md) - Бэкенд на Ruby On Rails
  - 🛒 [Consumy Application](https://github.com/SamuelRocha91/consumy/blob/main/README_ru.md) - Приложение для потребителей
  - 👨‍💼 [Seller Application](https://github.com/SamuelRocha91/seller_application/blob/main/README_ru.md) - Приложение для продавцов
  - 💲 [Paymenty API](https://github.com/SamuelRocha91/paymenty/blob/main/README_ru.md) - Платежный API

</details>
