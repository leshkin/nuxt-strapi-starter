# Starter for Nuxt, Strapi, Traefik and PostgreSQL in Docker container

Tested on a $6/month VPS from DigitalOcean with 1 GiB of memory. [Try it yourself!](https://m.do.co/c/28d0463092e4)

| Component    | Version |
| ------------ | ------- |
| Nuxt         | 3       |
| Tailwind CSS | 3       |
| Strapi       | 4       |
| Traefik      | 2       |
| PostgreSQL   | 14      |

## Prepare

1. Clone the repository

1. Create a copy of `.env.example` named `.env` and change credentials. Repeat for `frontend/.env.example` and `backend/.env.example`.

1. Install packages for frontend and backend

```
cd frontend
npm i
cd ..

cd backend
npm i
cd ..
```

3. Run PostgreSQL with Docker Compose

```
docker compose -f docker-compose.dev.yml up db
```

4. In a new terminal run Strapi

```
cd backend
npm run develop
```

5. Register the first administrator user. More information about getting started with Strapi: https://docs.strapi.io/dev-docs/quick-start

6. The Content Manager already contains a Post collection type. If you don't need it, you can delete it later. For now, add a couple of entries to it to see what the starter can do.

7. In the Settings, add permissions to perform find and findOne operations for Post.

8. Stop PostgreSQL (Ctrl+C in terminal) and Strapi (Ctrl+C in terminal)

## Local run

1. Frontend

```
cd frontend
docker build -t starter-frontend .
cd ..
```

2. Backend

```
cd backend
docker build -t starter-backend .
cd..
```

4. Run

```
docker compose -f docker-compose.dev.yml up
```

5. Open links

- http://starter.localhost - main page
- http://api.starter.localhost - Strapi API
- http://api.starter.localhost/admin - Strapi admin panel

# Production run

1. Build frontend with the right URL in `frontend/.env`
2. Add frontend domain to CORS `backend/config/middlewares.js`
3. Change the values in the `.env` file
4. Use `docker-compose.prod.yml` for production run with Docker Compose or Docker Swarm
5. Set up a database backup
