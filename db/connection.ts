import { Sequelize } from "sequelize";

const db = new Sequelize("restserver", "user", "password", {
  host: "localhost",
  dialect: "postgres",
  // logging: false
});

export default db;
