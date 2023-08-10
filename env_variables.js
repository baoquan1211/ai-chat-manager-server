import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";

/* CONFIGURATIONS */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

export default process.env;
