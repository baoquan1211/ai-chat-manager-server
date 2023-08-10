import db from "../utils.js";
import { DataTypes } from "sequelize";

const RoleModel = db.define(
  "Role",
  {
    ID: {
      type: DataTypes.INTEGER,

      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default RoleModel;
