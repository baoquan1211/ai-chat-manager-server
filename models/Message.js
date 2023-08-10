import db from "../utils.js";
import { DataTypes } from "sequelize";
import RoleModel from "./Role.js";
import ConversationModel from "./Conversation.js";

const MessageModel = db.define(
  "Message",
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
    Conversation_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ConversationModel,
        key: "ID",
      },
    },
    Status: {
      type: DataTypes.STRING,
    },
    Question: {
      type: DataTypes.STRING,
    },
    Answer: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

export default MessageModel;
