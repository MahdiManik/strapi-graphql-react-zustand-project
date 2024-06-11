module.exports = {
  definition: `
    extend type Mutation {
      register(input: UsersPermissionsRegisterInput!): UsersPermissionsLoginPayload!
      login(input: UsersPermissionsLoginInput!): UsersPermissionsLoginPayload!
    }
  `,
  resolver: {
    Mutation: {
      register: {
        description: "Register a new user",
        resolver: "application::auth.auth.register",
      },
      login: {
        description: "Login a user",
        resolver: "application::auth.auth.login",
      },
    },
  },
};
