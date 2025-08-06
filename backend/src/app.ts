import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes); // Login route

export default app;
