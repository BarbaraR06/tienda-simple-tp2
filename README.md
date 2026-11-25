# TP2 - TiendaSimple - Ruiz

Continuación del TP1. El catálogo y el detalle consultan el listado de productos desde el backend Node.js.

## Estructura

- `frontend/`: aplicación Next.js.
- `backend/`: API Express y Dockerfile.
- `.github/workflows/build-backend.yml`: construye la imagen Docker en cada push a `main`.
- `KANBAN.md`: tareas para cargar en un tablero público.

## Ejecutar localmente

Requiere Node.js 22 o superior y Docker para ejecutar el backend en contenedor.

Terminal 1, backend:

```bash
cd backend
npm install
npm run dev
```

La API queda disponible en `http://localhost:4000/api/products`.

Terminal 2, frontend:

```bash
cd frontend
npm install
```

Copiar `.env.example` a `.env.local` y mantener `NEXT_PUBLIC_API_URL=http://localhost:4000`. Luego:

```bash
npm run dev
```

Abrir `http://localhost:3000`.

Para ejecutar el backend con Docker desde la carpeta raíz:

```bash
docker build -t tiendasimple-backend ./backend
docker run --rm -p 4000:4000 tiendasimple-backend
```

## GitHub Actions y merge

El workflow de Actions construye la imagen (sin publicarla en un registry) cuando se hace push a `main`. Para registrar el flujo solicitado en el historial, crear una rama `feature/backend-api`, subir los cambios a GitHub, abrir un Pull Request hacia `main` y hacer el merge. Al hacer push del merge a `main`, revisar que el workflow termine correctamente.

## Publicación

Conectar el repositorio de GitHub a Vercel y configurar `frontend/` como Root Directory. En las variables de entorno de Vercel, definir `NEXT_PUBLIC_API_URL` con el origen público de la API, sin `/api/products` al final. Cada push a `main` desplegará el frontend.

Crear en Render un servicio Web de tipo Docker conectado al mismo repositorio, con `backend/` como directorio raíz. Render usa `backend/Dockerfile`; dejar que asigne `PORT` y configurar `FRONTEND_URL` con el origen público de Vercel si se desea restringir CORS. Habilitar el despliegue automático desde `main`.

## Enlaces de entrega

Completar estos enlaces después de crear el repositorio, el tablero y publicar los servicios:

- Frontend publicado: **PENDIENTE**
- Endpoint del backend (`/api/products`): **PENDIENTE**
- Repositorio GitHub: **PENDIENTE**
- Tablero Kanban público: **PENDIENTE**

## Tablero Kanban

Crear un tablero público con columnas `Pendiente`, `En progreso` y `Finalizada`, y cargar las tareas indicadas en `KANBAN.md`. Al finalizar, reemplazar el enlace pendiente de arriba por la URL pública del tablero.
