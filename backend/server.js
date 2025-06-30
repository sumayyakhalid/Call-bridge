import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import routes from "./routes/index.js";
import logger from "morgan";
import { connectMongoDB } from "./config/dbConnection.js";
// const twilio = require("twilio");

const app = express();
dotenv.config();

// --- Security Middleware ---
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(logger("dev"));
app.use(express.json());
connectMongoDB();

// --- Rate Limiting ---
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api/", apiLimiter);

app.use("/api", routes);
// --- Start Server ---
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
