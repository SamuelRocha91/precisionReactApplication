# MeasureApp Frontend

![Статус: В разработке](https://img.shields.io/badge/status-%D0%B2%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B5-yellow)

![Демонстрация работы приложения](./gifs/apiMeasure.gif)

## Описание

**MeasureApp Frontend** — это веб-приложение с удобным интерфейсом для управления измерениями потребления воды и газа. С интеграцией искусственного интеллекта пользователи могут регистрировать счётчики, отслеживать потребление и вести подробный учёт расходов. Это приложение является частью системы для оптимизации управления водными и газовыми ресурсами.

## Функциональные Возможности

- **Регистрация пользователей**: Позволяет новым пользователям зарегистрироваться на платформе.
- **Измерение потребления**: Ввод измерений воды и газа через интерфейс.
- **История потребления**: Просмотр ежемесячной истории потребления с графиками и детализацией.

## Используемые технологии

- **React**: Библиотека JavaScript для создания пользовательских интерфейсов.
- **Vite**: Быстрый и лёгкий инструмент для разработки веб-приложений.
- **React Router**: Управление навигацией между страницами приложения.
- **SweetAlert2**: Библиотека для создания интерактивных и стильных уведомлений.

## Зависимости

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

## Как запустить проект локально

### С Docker

1. Клонируйте репозитории:

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   git clone git@github.com:SamuelRocha91/apiMeasureWaterAndGas.git
   ```

2. Скачайте файл `docker-compose.yml`:

   [Доступ через Google Drive](https://drive.google.com/file/d/1kzs-DJGCvYImBQAqr1GI-zwoNha_b8tA/view?usp=sharing)

3. Разместите файл `docker-compose.yml` в структуре папок, аналогичной следующей:

   ![Структура папок](./public/pastasDocker.png)

4. Постройте образы и запустите контейнеры:

   ```bash
   docker-compose up --build
   ```

### Без Docker

1. Клонируйте репозиторий:

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   ```

2. Перейдите в каталог проекта:

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

5. Откройте приложение в браузере по адресу `http://localhost:5173`.

## Структура папок

```bash
precisionReactApplication/
├── assets/          # Изображения и визуальные ресурсы
├── components/      # Повторно используемые React-компоненты
├── styles/          # CSS стили
├── public/          # Публичные файлы
├── src/             # Исходный код приложения
└── README.md        # Документация проекта
```

## Планируемые функции

- **Адаптивный дизайн**: Обеспечение корректного отображения на разных устройствах.
- **Пагинация**: Введение постраничного вывода данных.
- **Улучшение CSS**: Настройка стилей для более привлекательного интерфейса.
- **Модульные и интеграционные тесты**: Обеспечение качества кода с помощью автоматизированного тестирования.