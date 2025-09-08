# Proyecto-Prueba-EduStream-Pro
# 🎓 Plataforma de Cursos Online con Dashboard Administrativo  

Proyecto desarrollado como prueba de entrenamiento para la competencia **Senasoft – Categoría Mujeres Digitales (2025)**.  
El reto consiste en construir una **plataforma de streaming educativo tipo Netflix**, utilizando **Laravel (backend)** y **React (frontend)**, con autenticación de usuarios, gestión de roles, dashboard administrativo y despliegue en contenedores con Docker.  

---

## 🚀 Características principales  

- 🎬 **Catálogo de cursos** con carruseles dinámicos (destacados, populares, etc.).  
- 📚 **Vista de detalle** con información del curso y sus lecciones.  
- 👩‍🎓 **Gestión de usuarios y roles** (estudiante / administrador).  
- 🔐 **Rutas protegidas** y control estricto de sesiones.  
- 📊 **Dashboard administrativo** con gráficas y reportes interactivos.  
- 🧪 **Pruebas automatizadas** en backend y frontend.  
- 🐳 **Despliegue con Docker** para asegurar portabilidad.  

---

## 🛠️ Tecnologías utilizadas  

### Backend  
- Laravel 10, PHP 8.x  
- MySQL / PostgreSQL  
- Laravel Sanctum o JWT (autenticación)  
- spatie/laravel-permission (roles y permisos)  

### Frontend  
- React 18 + Vite  
- React Router, Axios  
- TailwindCSS, Framer Motion  
- React Query / Context API / Redux  

### Dashboard  
- Recharts / Chart.js  
- TanStack Table  

### Otros  
- Docker & docker-compose  
- PHPUnit (pruebas backend)  
- React Testing Library (pruebas frontend)  

---

## 📂 Estructura del Proyecto  

/backend -> API Laravel (cursos, usuarios, lecciones)
/frontend -> Interfaz en React (catálogo, dashboard)
/docker -> Archivos de configuración para orquestación


---

## 📦 Instalación y configuración  

### 1. Clonar repositorio  
```bash
git clone https://github.com/usuario/proyecto-senasoft.git
cd proyecto-senasoft
```

### 2. Backend (Laravel)
```
cd backend
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate --seed
php artisan 

```

### 3. Frontend (React)
```
cd frontend
npm install
npm run dev
```

### 4. Usando Docker
```
docker-compose up --build
```
Esto levantará:

- API Laravel con base de datos MySQL/Postgres.
- Frontend React servido con Nginx.

👩‍💻 Autor

Proyecto de entrenamiento realizado por [Tu Nombre]
Competencia Senasoft 2025 – Mujeres Digitales

