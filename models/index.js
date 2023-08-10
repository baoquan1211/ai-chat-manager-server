import UserModel from "./User.js";
import RoleModel from "./Role.js";
import RuleModel from "./Rule.js";
import ConversationModel from "./Conversation.js";
import MessageModel from "./Message.js";
import FilterKeyWordModel from "./FilterKeyWord.js";

/* await RoleModel.sequelize.sync();
await RuleModel.sequelize.sync();
await UserModel.sequelize.sync();
await ConversationModel.sequelize.sync();
await MessageModel.sequelize.sync();
await FilterKeyWordModel.sequelize.sync; */

/* await FilterKeyWordModel.create({ Keyword: "damn" });

await RoleModel.create({ Name: "Leader" });
await RoleModel.create({ Name: "Staff" });
await RoleModel.create({ Name: "Manager" });
await RoleModel.create({ Name: "Director" });
await RoleModel.create({ Name: "Admin" }); */

export {
  UserModel,
  RoleModel,
  RuleModel,
  ConversationModel,
  MessageModel,
  FilterKeyWordModel,
};
