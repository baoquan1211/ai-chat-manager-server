import http from "http";
import { google } from "googleapis";
import { Server } from "socket.io";
import express from "express";
import cors from "cors";
//import { searchProduct } from "./axios/product/product.js";
//import axios from "./axios/custom-axios.js";
//import { setTimeout } from "timers/promises";
//import { HttpsProxyAgent } from "https-proxy-agent";
//import openAiResponse from "./openai/index.js";
//import { Configuration, OpenAIApi } from "openai";
import bot from "./ai_api/google_bard/index.js";
import env_variables from "./env_variables.js";
import { register } from "./controllers/Auth.js";
import openai from "./ai_api/openai/index.js";
import * as Model from "./models/index.js";

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
  let messages = [];

  socket.on("ask_request", async (data) => {
    console.log(data.message);
    if (data.message === "damn") {
      socket.emit("answer_request", "please be polite");
      return;
    }
    messages.push({
      role: "user",
      content: data.message,
    });

    /**Bard:**/
    /* const conversationId = socket.id;
    const response = await bot.ask(data.message, conversationId); */

    /**CHAT-GPT**/
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.2,
    });
    socket.emit("answer_request", response.data.choices[0].message);

    messages.push(response.data.choices[0].message);
    console.log(messages);
  });
});

server.listen(env_variables.SERVER_PORT || 3000, () => {
  console.log("SERVER IS RUNNING");
});
