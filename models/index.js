"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

console.log("cariError: ", config);

const user = process.env.POSTGRES_USER;
const pass = process.env.POSTGRES_PASSWORD;
const example_com = process.env.IP_SERVER;
const port_pg = process.env.POSTGRES_PORT;
const dbname = process.env.POSTGRES_DB;

let sequelize = new Sequelize(
  `postgres://${user}:${pass}@${example_com}:${port_pg}/${dbname}`
);

// let sequelize = new Sequelize(config.url, config);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
