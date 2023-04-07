FROM node:16
# Installing libvips-dev for sharp Compatability
RUN apt-get update && apt-get install libvips-dev -y

WORKDIR /app

COPY . .

ENV NODE_ENV production

EXPOSE 1337

CMD ["npm", "run", "start"]
