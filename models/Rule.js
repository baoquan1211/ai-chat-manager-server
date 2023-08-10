import db from "../utils.js";
import { DataTypes } from "sequelize";
import RoleModel from "./Role.js";

const RuleModel = db.define(
  "Rule",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Role_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: RoleModel,
        key: "ID",
      },
    },

    Status: {
      type: DataTypes.STRING,
    },
    Key: {
      type: DataTypes.STRING,
    },
    Value: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

export default RuleModel;
