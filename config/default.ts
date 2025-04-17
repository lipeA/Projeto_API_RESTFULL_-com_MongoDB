import { env } from "process";

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

export default {
  port: 3000,
  URLi: `mongodb+srv://${dbUser}:${dbPass}@cluster0.a8de62g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  env: process.env.NODE_ENV || "development",
};
