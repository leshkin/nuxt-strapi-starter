# Strapi builder
FROM node:lts as builder

WORKDIR /app

COPY . .

RUN NODE_ENV=production npm run build

# Strapi production run
FROM node:lts
# Installing libvips-dev for sharp Compatability
RUN apt-get update && apt-get install libvips-dev -y

WORKDIR /app

COPY --from=builder /app/build  /app/build

COPY . .

ENV NODE_ENV production

EXPOSE 1337

CMD ["npm", "run", "start"]
