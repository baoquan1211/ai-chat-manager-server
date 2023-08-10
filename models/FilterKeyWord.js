import db from "../utils.js";
import { DataTypes } from "sequelize";

const FilterKeyWordModel = db.define("Filter_Key_Word", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Keyword: {
    type: DataTypes.STRING,
  },
});

export default FilterKeyWordModel;
