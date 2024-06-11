// module.exports = () => ({});

module.exports = {
  //
  graphql: {
    enabled: true,
    endpoint: "/graphql",
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 7,
    chartbrew: true,
    amountLimit: 100,
    apolloServer: {
      tracing: false,
    },
  },
};
