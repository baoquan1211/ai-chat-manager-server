import db from "../utils.js";
import { DataTypes } from "sequelize";
import RoleModel from "./Role.js";

const ConversationModel = db.define(
  "Conversation",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    User_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: RoleModel,
        key: "ID",
      },
    },
    Provider_ID: {
      type: DataTypes.STRING,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Status: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

export default ConversationModel;
