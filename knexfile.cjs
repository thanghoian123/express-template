"use strict";

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    }
  },
  staging: {
    client: "postgresql",
    connection: {
      user: "postgres",
      host: "localhost",
      database: "test_app",
      password: "postgres"
    }
  },
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
  }
};