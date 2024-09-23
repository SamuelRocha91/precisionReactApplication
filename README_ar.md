# <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchGHKMA3VyA1ySh2ITWb0CIm_cnhF1cGvlQ&s" alt="Full Stack Projects" width="52" height="40" /> MeasureApp الواجهة الأمامية<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchGHKMA3VyA1ySh2ITWb0CIm_cnhF1cGvlQ&s" alt="Java Projects Logo" width="52" height="40" />  

## 🌐 [![Português](https://img.shields.io/badge/Português-green)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README.md) [![Español](https://img.shields.io/badge/Español-yellow)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_es.md) [![English](https://img.shields.io/badge/English-blue)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_en.md) [![Русский](https://img.shields.io/badge/Русский-lightgrey)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ru.md) [![中文](https://img.shields.io/badge/中文-red)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ch.md) [![العربية](https://img.shields.io/badge/العربية-orange)](https://github.com/SamuelRocha91/precisionReactApplication/blob/main/README_ar.md)

![الحالة: قيد التطوير](https://img.shields.io/badge/status-%D9%82%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-yellow)

![عرض التطبيق](./gifs/apiMeasure.gif)

🤖 [Backend Node.js](https://github.com/SamuelRocha91/apiMeasureWaterAndGas/blob/main/README_ar.md)

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


## مشاريع أخرى

- 💎 [Delivery BackEnd](https://github.com/SamuelRocha91/delivery_back/blob/main/README_ar.md) 
- 🛒 [Consumy Application](https://github.com/SamuelRocha91/consumy/blob/main/README_ar.md) 
- 👨‍💼 [Seller Application](https://github.com/SamuelRocha91/seller_application/blob/main/README_ar.md) 
- 💲 [Paymenty API](https://github.com/SamuelRocha91/paymenty) 
