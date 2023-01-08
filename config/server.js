module.exports = ({ env }) => ({
  host: env('HOST', 'https://herbalaid-cms.onrender.com/'),
  port: env.int('PORT', 1337),
  url: env("PUBLIC_URL", "https://herbalaid-cms.onrender.com/"),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
