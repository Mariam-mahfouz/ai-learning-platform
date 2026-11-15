
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import stripeRoutes from "./routes/stripeRoutes.js";
import purchaseRoutes from "./routes/purchaseRoutes.js";
import levelRoutes from "./routes/levelRoutes.js";
import unitRoutes from "./routes/unitRoutes.js";

import User from "./models/userModel.js";
import { verifyToken, verifyAdmin } from "./middleware/authMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());

// Ensure database connection before handling requests
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection failed:", error.message);
    res.status(500).json({ message: "Database connection failed" });
  }
});

app.get("/", (req, res) => {
  res.status(200).send("API is running successfully!");
});

app.use("/auth", authRoutes);
app.use("/stripe", stripeRoutes);
app.use("/purchases", purchaseRoutes);
app.use("/levels", levelRoutes);
app.use("/units", unitRoutes);

app.use("/users", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching users",
      error: err.message
    });
  }
});

export default app;
