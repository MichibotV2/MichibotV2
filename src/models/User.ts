import { DataTypes, Model } from "sequelize";
import sequelize from "../database";

class User extends Model {
  public id!: string; // Discord user ID
  public michiName!: string;
  public currency!: number;
  public level!: number;
}

User.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    michiName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currency: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "User",
  },
);

export default User;
