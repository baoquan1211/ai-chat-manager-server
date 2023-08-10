import { Sequelize } from "sequelize";
import env_variables from "./env_variables.js";

const sequelize = new Sequelize(env_variables.DATABASE_URL);

export default sequelize;
