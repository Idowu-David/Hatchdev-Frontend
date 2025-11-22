import express, { type Express, type Request, type Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/users";
import "reflect-metadata";
import db from "./db";
import { env } from "process";

dotenv.config();

const app: Express = express();
const PORT = process.env.SERVER_PORT || 5000;

console.log(process.env.DB_PORT);

app.use(express.json());
app.use(
  cors({
    origin: "https://todo-dashboard-hazel.vercel.app",
    credentials: true,
  })
);

app.use("/auth", userRoutes);

app.get("/auth", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`[Server]: Server is running`);
});
