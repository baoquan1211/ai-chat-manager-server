import UserModel from "../models/User.js";
import RoleModel from "../models/Role.js";
import bcrypt, { hashSync } from "bcrypt";

/**REGISTER**/
export const register = async (req, res) => {
  const fullName = req.body.fullname;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const role = req.body.role;

  if (
    fullName === undefined ||
    username === undefined ||
    password === undefined ||
    email === undefined ||
    role === undefined
  ) {
    res.status(500).json({ error: "Some parameters were missing." });
  }

  const salt = bcrypt.genSaltSync();
  const hashPass = hashSync(password, salt);

  const roleID = console.log(salt);
};
