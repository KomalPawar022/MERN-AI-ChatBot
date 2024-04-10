import express from "express";
import cors from "cors";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import { config } from "dotenv";
config();
const app = express();
app.use(cors());
app.use(express.json());
//remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);
app.use("/api", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

export default app;
