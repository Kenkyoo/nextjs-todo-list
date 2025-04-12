Next.js Todo List App

Aplicación de lista de tareas desarrollada con tecnologías modernas del ecosistema web. Permite gestionar múltiples listas con autenticación real, almacenamiento persistente y un diseño responsivo.
✨ Características principales

    ✅ Autenticación y autorización con Hanko

    📋 Crear, editar, completar y eliminar tareas

    📂 Múltiples listas de tareas por usuario

    🔒 Middleware para proteger rutas

    💾 Base de datos PostgreSQL vía Neon

    🧠 ORM con Prisma

    🌐 Deploy en Vercel

    🎨 UI con TailwindCSS y DaisyUI

    ⚙️ Transiciones animadas con autoAnimate

🚀 Tecnologías usadas

    Next.js 15 App Router

    TypeScript

    React 18

    TailwindCSS + DaisyUI

    Prisma ORM

    PostgreSQL (antes SQLite)

    Hanko para auth

    Neon para base de datos

    Vercel para despliegue

🛠 Instalación

git clone https://github.com/Kenkyoo/nextjs-todo-list
cd nextjs-todo-list
npm install
npx prisma generate
npx prisma migrate dev
npm run dev

Asegúrate de configurar las variables de entorno para Hanko y la base de datos (.env):

DATABASE_URL=postgresql://...
NEXT_PUBLIC_HANKO_API_URL=https://...

📸 Capturas

    ![alt text](https://github.com/Kenkyoo/nextjs-todo-list/blob/main/public/background.png?raw=true)

🔗 Enlaces

    Demo en Vercel: nextjs-todo-list.vercel.app

    Repositorio: GitHub
