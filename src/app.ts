require("dotenv").config();
import express from "express";
import config from "config";
import router from "./router";
import connect from "../config/db";
import Logger from "../config/logger";

const app = express();
app.use(express.json());
app.use("/api/", router);

const port = config.get<number>("port");

app.listen(port, async () => {
  await connect();

  Logger.info("Conectado ao banco de dados com sucesso!");
});
