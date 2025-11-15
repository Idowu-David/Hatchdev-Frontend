import express, { type Express, type Request, type Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/users";
import "reflect-metadata";
import db from "./db"

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/auth/", userRoutes);


app.listen(PORT, () => {
  console.log(`[Server]: Server is running at http://localhost:${PORT}`);
});
