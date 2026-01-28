import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./data/michibot.sqlite", // Ensure this path exists or adjust accordingly
  logging: false, // Disable logging; set to true for debugging
});

export default sequelize;
