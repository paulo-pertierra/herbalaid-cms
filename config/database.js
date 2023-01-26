// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'dpg-cetbju9gp3jmgl0c41og-a'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'herbaiddb'),
//       user: env('DATABASE_USERNAME', 'paulo'),
//       password: env('DATABASE_PASSWORD', 'k2PFiz8E6JK9AwH6kZGsm7Uao9CMjauA'),
//       ssl: {
//         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
//       },
//     },
//     debug: false,
//   },
// });

const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});