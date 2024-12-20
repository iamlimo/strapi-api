// module.exports = () => ({});

module.exports = {
  documentation: {
    config: {
      swagger: {
        securityDefinitions: {
          BearerAuth: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
          },
        },
        security: [{ BearerAuth: [] }],
      },
    },
  },
};

console.log(module.exports);
