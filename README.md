# Starter for Nuxt 3, Strapi 4 and Traefik 2

## Development

1. Create a copy of `.env.example` named `.env` and change the variable values.

2. Build

```
# frontend
cd frontend
docker build -t starter-frontend .

cd ..

# backend
cd backend
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
