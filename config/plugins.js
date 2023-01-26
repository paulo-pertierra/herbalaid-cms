module.exports = ({ env }) => ({
  
  // Fuzzy Search API
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::remedy.remedy",
          modelName: "remedy",
          transliterate: false,
          queryConstraints: {
            where: {
              $and: [
                {
                  publishedAt: { $notNull: true },
                },
              ],
            },
          },
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -1000,
            limit: 15,
            keys: [
              {
                name: "name",
                weight: 200,
              },
              {
                name: "fuzzy_tags",
                weight: 150,
              },
              {
                name: "remedy_tags",
                weight: 150,
              },
            ],
          },
        },
      ],
    },
  },
  // SendGrid API
  email: {
    config: {
      provider: env('MAIL_PROVIDER'),
      providerOptions: {
        apiKey: env('MAIL_API'),
      },
      settings: {
        defaultFrom: env('MAIL_DEF_FROM'),
        defaultReplyTo: env('MAIL_DEF_TO'),
      },
    },
  },

  //cloudinary
//   upload: {
//     config: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: env('CLOUDINARY_NAME'),
//         api_key: env('CLOUDINARY_KEY'),
//         api_secret: env('CLOUDINARY_SECRET'),
//       },
//       actionOptions: {
//         upload: {},
//         delete: {},
//       },
//     },
//   },
});