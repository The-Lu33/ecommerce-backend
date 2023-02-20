import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();
const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
  logging: false,
  ssl: true,
});

export default db;
