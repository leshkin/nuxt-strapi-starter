# Starter for Nuxt 3, Strapi 4 and Traefik 2

Tested on a $6/month VPS from DigitalOcean with 1 GiB of memory. [Try it yourself.](https://m.do.co/c/28d0463092e4)

## Local start

1. Create a copy of `.env.example` named `.env` and change credentials.

2. Prepare

```
# start PostgreSQL in Docker
docker compose -f docker-compose.dev.yml up db

# start new terminal
cd backend
npm i
npm run develop
```

3. Build

```

# frontend

docker build -t starter-frontend .

cd ..

# backend

NODE_ENV=production npm run build
docker build -t starter-backend .

```

4. Run

```

docker compose -f docker-compose.dev.yml up

```

5. Open links

- http://starter.localhost - main page
- http://api.starter.localhost - Strapi API
- http://api.starter.localhost/admin - Strapi admin panel

```

```
