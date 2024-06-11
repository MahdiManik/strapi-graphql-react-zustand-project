// ./src/api/auth/controllers/auth.js

const { sanitize } = require("@strapi/utils");
const { ApplicationError, ValidationError } = require("@strapi/utils").errors;

module.exports = {
  async register(ctx) {
    const { username, email, password } = ctx.request.body.input;

    if (!username || !email || !password) {
      return ctx.badRequest("All fields are required");
    }

    try {
      // Custom logic for user registration
      const newUser = await strapi.plugins[
        "users-permissions"
      ].services.user.add({
        username,
        email,
        password,
      });

      // Create JWT token
      const jwt = strapi.plugins["users-permissions"].services.jwt.issue({
        id: newUser.id,
      });

      ctx.send({
        jwt,
        user: sanitize.contentAPI.output(newUser, {
          model: strapi.models["user"],
        }),
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async login(ctx) {
    const { identifier, password } = ctx.request.body.input;

    if (!identifier || !password) {
      return ctx.badRequest("Identifier and password are required");
    }

    try {
      // Custom logic for user login
      const user = await strapi.plugins[
        "users-permissions"
      ].services.user.fetch({ identifier });

      if (
        !user ||
        !(await strapi.plugins[
          "users-permissions"
        ].services.user.validatePassword(password, user.password))
      ) {
        return ctx.badRequest("Invalid credentials");
      }

      // Create JWT token
      const jwt = strapi.plugins["users-permissions"].services.jwt.issue({
        id: user.id,
      });

      ctx.send({
        jwt,
        user: sanitize.contentAPI.output(user, {
          model: strapi.models["user"],
        }),
      });
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
