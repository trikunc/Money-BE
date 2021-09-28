module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.IP_SERVER,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    dialect: "postgres",
    url: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.IP_SERVER}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
