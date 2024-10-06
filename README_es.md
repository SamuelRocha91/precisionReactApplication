# <img src="https://cdn-icons-png.flaticon.com/128/83/83522.png" alt="Full Projects Logo" width="42" height="30" /> MeasureApp Frontend <img src="https://cdn-icons-png.flaticon.com/128/83/83522.png" alt="Full Projects Logo" width="42" height="30" />

## 🌐 Idiomas Disponibles

[![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ar.md)

![Estado: En Desarrollo](https://img.shields.io/badge/status-en%20desarrollo-yellow)

![Demostración de la Aplicación](./gifs/apiMeasure.gif)

🤖 [Repositorio Backend Node](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_es.md)

<details>
  <summary><h2>Descripción</h2></summary>

La **MeasureApp Frontend** es una aplicación web que proporciona una interfaz amigable para la gestión de mediciones de consumo de agua y gas. Integrada con Inteligencia Artificial, permite que los usuarios registren mediciones, sigan el consumo y mantengan un control detallado de sus gastos. Esta aplicación forma parte de un sistema completo dirigido a la optimización de la gestión de recursos de agua y gas.

</details>

<details>
  <summary><h2>Funcionalidades</h2></summary>

- **Registro de Usuarios**: Registre nuevos consumidores en la plataforma de forma sencilla.
- **Medición de Consumo**: Permite la inserción de mediciones de agua y gas directamente a través de la interfaz.
- **Historial de Consumo**: Muestra el historial mensual de consumo, con gráficos detallados.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para la creación de interfaces de usuario.
- **Vite**: Herramienta para un desarrollo web rápido y eficiente.
- **React Router**: Gestión de rutas para la navegación entre páginas.
- **SweetAlert2**: Biblioteca para la exhibición de alertas interactivas y personalizables.

</details>

<details>
  <summary><h2> Dependencias</h2></summary>

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

## Cómo Ejecutar el Proyecto Localmente

<details>
  <summary><h2>🚀 Usando Docker</h2></summary>

1. Clona los repositorios:

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   git clone git@github.com:SamuelRocha91/apiMeasureWaterAndGas.git
   ```

2. Descarga el archivo `docker-compose.yml`.
   [Acceder en Google Drive](https://drive.google.com/file/d/1p5MKW3YB5En05Jp5ETWxNbmHllinihiH/view?usp=sharing)

3. Coloca el archivo `docker-compose.yml` en la siguiente estructura de carpetas:
   
   ![Jerarquía de Carpetas](./public/pastasDocker.png)

4. Construye las imágenes y levanta los contenedores:

   ```bash
   docker-compose up --build
   ```

</details>

<details>
  <summary><h2>🚀 Sin Docker</h2></summary>

1. Clona el repositorio:

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   ```

2. Navega hasta el directorio del proyecto:

   ```bash
   cd precisionReactApplication
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Accede a la aplicación en tu navegador a través de la dirección `http://localhost:5173`.

</details>

<details>
  <summary><h2>Estructura de Carpetas</h2></summary>


```bash
precisionReactApplication/
├── assets/          # Imágenes y recursos visuales
├── components/      # Componentes React reutilizables
├── styles/          # Archivos de estilo CSS
├── public/          # Archivos estáticos públicos
├── src/             # Código fuente de la aplicación
└── README.md        # Documentación del proyecto
```
</details>

## Otros Proyectos

<details>
  <summary><strong>🔗 Repositorios Relacionados</strong></summary>

  - 💎 [Delivery BackEnd](https://github.com/SamuelRocha91/delivery_back/blob/main/README_es.md) - Backend Ruby On Rails
  - 🛒 [Consumy Application](https://github.com/SamuelRocha91/consumy/blob/main/README_es.md) - Aplicación del consumidor
  - 👨‍💼 [Seller Application](https://github.com/SamuelRocha91/seller_application/blob/main/README_es.md) - Aplicación del vendedor
  - 💲 [Paymenty API](https://github.com/SamuelRocha91/paymenty/blob/main/README_es.md) - API de pago

</details>

