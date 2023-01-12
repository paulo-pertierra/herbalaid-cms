module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT'),
  // url: env('PUBLIC_URL', 'http://localhost:1337'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
