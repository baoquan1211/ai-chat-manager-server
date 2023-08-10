import { Bard } from "googlebard";
import env_variables from "../../env_variables.js";

let cookies = "__Secure-1PSID=" + env_variables.BARD_COOKIE;

let bot = new Bard(cookies, {
  inMemory: true,
  savePath: "./conversations.json",
  proxy: {
    host: env_variables.PROXY_HOST,
    port: env_variables.PROXY_PORT,
    auth: {
      username: env_variables.PROXY_USERNAME,
      password: env_variables.PROXY_PASSWORD,
    },
    protocol: "http",
  },
});

export default bot;
