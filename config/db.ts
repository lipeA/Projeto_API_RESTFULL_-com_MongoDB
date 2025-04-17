import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect() {
  const URLi = config.get<string>("URLi");

  try {
    await mongoose.connect(URLi);
    Logger.info("Connected to database");
  } catch (error) {
    Logger.error("Error connecting to database");
    console.log(error);
  }
}

export default connect;
