const { Sequelize } = require("sequelize");
const config = require("./config.json");

const environment = process.env.NODE_ENV || "development";
const knowledgeConfig = config[environment];
const janewayConfig = config["janeway"];

const knowledgeSequelize = new Sequelize(
  knowledgeConfig.database,
  knowledgeConfig.username,
  knowledgeConfig.password,
  {
    host: knowledgeConfig.host,
    dialect: knowledgeConfig.dialect,
  }
);

const janewaySequelize = new Sequelize(
  janewayConfig.database,
  janewayConfig.username,
  janewayConfig.password,
  {
    host: janewayConfig.host,
    dialect: janewayConfig.dialect,
  }
);

module.exports = { knowledgeSequelize, janewaySequelize };
