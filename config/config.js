module.exports = {
  development: {
    username: process.env.POSTGRES_USER_DEV,
    password: process.env.POSTGRES_PASSWORD_DEV,
    host: process.env.IP_SERVER_DEV,
    port: process.env.POSTGRES_PORT_DEV,
    database: process.env.POSTGRES_DB_DEV,
    dialect: "postgres",
    url: `postgres://${process.env.POSTGRES_USER_DEV}:${process.env.POSTGRES_PASSWORD_DEV}@${process.env.IP_SERVER_DEV}:${process.env.POSTGRES_PORT_DEV}/${process.env.POSTGRES_DB_DEV}`,
  },
  test: {
    username: process.env.POSTGRES_USER_TEST,
    password: process.env.POSTGRES_PASSWORD_TEST,
    database: process.env.POSTGRES_DB_TEST,
    host: process.env.IP_SERVER_TEST,
    dialect: "postgres",
    url: `postgres://${process.env.POSTGRES_USER_TEST}:${process.env.POSTGRES_PASSWORD_TEST}@${process.env.IP_SERVER_TEST}:${process.env.POSTGRES_PORT_TEST}/${process.env.POSTGRES_DB_TEST}`,
  },
  production: {
    username: process.env.POSTGRES_USER_PROD,
    password: process.env.POSTGRES_PASSWORD_PROD,
    database: process.env.POSTGRES_DB_PROD,
    host: process.env.IP_SERVER_PROD,
    dialect: "postgres",
    url: `postgres://${process.env.POSTGRES_USER_PROD}:${process.env.POSTGRES_PASSWORD_PROD}@${process.env.IP_SERVER_PROD}:${process.env.POSTGRES_PORT_PROD}/${process.env.POSTGRES_DB_PROD}`,
  },
};
