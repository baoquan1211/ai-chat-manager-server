import { Configuration, OpenAIApi } from "openai";
import https from "https";
import fs from "fs";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default openai;
