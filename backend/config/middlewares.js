module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",

    config: {
      origin: ["http://localhost:3000", "http://starter.localhost"],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
