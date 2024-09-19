# MeasureApp Frontend

<h2>🌐</h2>
<ul>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README.md" target="_blank">Português</a></li>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_es.md" target="_blank">Español</a></li>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_en.md" target="_blank">English</a></li>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ru.md" target="_blank">Русский</a></li>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ch.md" target="_blank">中文</a></li>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ar.md" target="_blank">العربية</a></li>
</ul>

![Estado: En Desarrollo](https://img.shields.io/badge/status-en%20desarrollo-yellow)

![Demostración de la Aplicación](./gifs/apiMeasure.gif)

![Backend Node.js](git@github.com:SamuelRocha91/apiMeasureWaterAndGas.git)

## Descripción

**MeasureApp Frontend** es una aplicación web que proporciona una interfaz amigable para la gestión de mediciones de consumo de agua y gas. Integrada con Inteligencia Artificial, permite a los usuarios registrar medidores, hacer un seguimiento del consumo y mantener un control detallado de sus gastos. Esta aplicación forma parte de un sistema completo que tiene como objetivo optimizar la gestión de los recursos de agua y gas.

## Funcionalidades

- **Registro de Usuarios**: Permite que nuevos consumidores se registren fácilmente en la plataforma.
- **Medición de Consumo**: Permite a los usuarios ingresar mediciones de agua y gas directamente desde la interfaz.
- **Historial de Consumo**: Muestra el historial mensual de consumo con gráficos detallados.

## Tecnologías Utilizadas

- **React**: Biblioteca JavaScript para la creación de interfaces de usuario.
- **Vite**: Herramienta de construcción rápida y eficiente para el desarrollo web.
- **React Router**: Gestiona la navegación entre las rutas de la aplicación.
- **SweetAlert2**: Biblioteca para mostrar alertas interactivas y personalizables.

## Dependencias

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

## Cómo Ejecutar el Proyecto Localmente

### Con Docker

1. Clona los repositorios:

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   git clone git@github.com:SamuelRocha91/apiMeasureWaterAndGas.git
   ```

2. Descarga el archivo `docker-compose.yml`.

   [Acceder en Google Drive](https://drive.google.com/file/d/1p5MKW3YB5En05Jp5ETWxNbmHllinihiH/view?usp=sharing)

3. Coloca el archivo `docker-compose.yml` en la siguiente estructura de carpetas:

   ![Estructura de Carpetas](./public/pastasDocker.png)

4. Construye las imágenes y levanta los contenedores:

   ```bash
   docker-compose up --build
   ```

### Sin Docker

1. Clona el repositorio:

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   ```

2. Navega al directorio del proyecto:

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

5. Accede a la aplicación en tu navegador en `http://localhost:5173`.

## Estructura de Carpetas

```bash
precisionReactApplication/
├── assets/          # Imágenes y recursos visuales
├── components/      # Componentes React reutilizables
├── styles/          # Archivos de estilo CSS
├── public/          # Archivos públicos
├── src/             # Código fuente de la aplicación
└── README.md        # Documentación del proyecto
```

## Próximas Funcionalidades

- **Responsividad**: Asegurar que la interfaz se adapte a diferentes tamaños de pantalla.
- **Paginación**: Implementar paginación en las pantallas de consulta de datos.
- **Mejoras de CSS**: Ajustar los estilos para una interfaz más agradable.
- **Pruebas Unitarias e Integradas**: Asegurar la calidad del código con pruebas automatizadas.

---
