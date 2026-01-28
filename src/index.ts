import { start as startBot } from "./bot";
import { start as startApi } from "./api";
import sequelize from "./database";
import ClientHelper from "./helpers/clientHelper";

const startSingletons = async () => {
  await ClientHelper.login();
};

(async () => {
  try {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
      await sequelize.sync({ alter: true }); // Creates tables if they don't exist; updates them if they do
      console.log("All models were synchronized successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
    startSingletons();
    startBot();
    startApi();
  } catch (error) {
    console.error("Fatal ERROR on ini", error);
  }
})();
