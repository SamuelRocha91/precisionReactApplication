# MeasureApp الواجهة الأمامية

<h2>🌐</h2>
<ul>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README.md" target="_blank">Português</a></li>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_es.md" target="_blank">Español</a></li>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_en.md" target="_blank">English</a></li>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ru.md" target="_blank">Русский</a></li>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ch.md" target="_blank">中文</a></li>
  <li><a href="https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ar.md" target="_blank">العربية</a></li>
</ul>

![الحالة: قيد التطوير](https://img.shields.io/badge/status-%D9%82%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-yellow)

![عرض التطبيق](./gifs/apiMeasure.gif)

![Backend Node.js](git@github.com:SamuelRocha91/apiMeasureWaterAndGas.git)

## الوصف

**MeasureApp الواجهة الأمامية** هو تطبيق يوفر واجهة سهلة الاستخدام لإدارة قياسات استهلاك المياه والغاز. يتكامل مع الذكاء الاصطناعي، مما يسمح للمستخدمين بتسجيل العدادات، ومتابعة الاستهلاك، والتحكم في المصاريف بشكل مفصل. يُعد التطبيق جزءًا من نظام متكامل يهدف إلى تحسين إدارة موارد المياه والغاز.

## الميزات

- **تسجيل المستخدمين**: يسمح للمستهلكين الجدد بالتسجيل على المنصة.
- **قياس الاستهلاك**: تسجيل قياسات المياه والغاز مباشرة من خلال الواجهة.
- **تاريخ الاستهلاك**: عرض السجل الشهري للاستهلاك مع الرسوم البيانية والتفاصيل.

## التقنيات المستخدمة

- **React**: مكتبة جافا سكريبت لإنشاء واجهات المستخدم.
- **Vite**: أداة بناء سريعة لتطوير الويب.
- **React Router**: للتنقل بين الصفحات داخل التطبيق.
- **SweetAlert2**: مكتبة لعرض التنبيهات التفاعلية والودية.

## المتطلبات

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

## كيفية تشغيل المشروع محلياً

### باستخدام Docker

1. استنساخ المستودعات:

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   git clone git@github.com:SamuelRocha91/apiMeasureWaterAndGas.git
   ```

2. قم بتنزيل ملف docker-compose.yml:

   [الوصول إلى Google Drive](https://drive.google.com/file/d/1kzs-DJGCvYImBQAqr1GI-zwoNha_b8tA/view?usp=sharing)

3. ضع ملف docker-compose.yml في هيكل مجلدات مشابه لما يلي:

   ![هيكل المجلدات](./public/pastasDocker.png)

4. قم ببناء الصور وتشغيل الحاويات:

   ```bash
   docker-compose up --build
   ```

### بدون Docker

1. استنساخ المستودع:

   ```bash
   git clone git@github.com:SamuelRocha91/precisionReactApplication.git
   ```

2. انتقل إلى دليل المشروع:

   ```bash
   cd precisionReactApplication
   ```

3. قم بتثبيت المتطلبات:

   ```bash
   npm install
   ```

4. ابدأ الخادم المحلي:

   ```bash
   npm run dev
   ```

5. افتح التطبيق في المتصفح على العنوان `http://localhost:5173`.

## هيكل المجلدات

```bash
precisionReactApplication/
├── assets/          # صور وموارد بصرية للتطبيق
├── components/      # مكونات React القابلة لإعادة الاستخدام
├── styles/          # ملفات CSS للتصميم
├── public/          # الملفات العامة
├── src/             # الكود المصدري للتطبيق
└── README.md        # توثيق المشروع
```

## الميزات التي سيتم إضافتها

- **التصميم المتجاوب**: دعم العرض عبر الأجهزة المختلفة.
- **التقسيم إلى صفحات**: عرض البيانات في صفحات متعددة.
- **تعديلات CSS**: تحسين تصميم الواجهة.
- **اختبارات الوحدة والتكامل**: لضمان جودة الكود.

