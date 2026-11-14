
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import stripeRoutes from "./routes/stripeRoutes.js";
import purchaseRoutes from "./routes/purchaseRoutes.js";
import levelRoutes from "./routes/levelRoutes.js";
import unitRoutes from "./routes/unitRoutes.js";

// Models & Middleware
import User from "./models/userModel.js";
import { verifyToken, verifyAdmin } from "./middleware/authMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.status(200).send("API is running successfully!");
});

// API Routes
app.use("/auth", authRoutes);
app.use("/stripe", stripeRoutes);
app.use("/purchases", purchaseRoutes);
app.use("/levels", levelRoutes);
app.use("/units", unitRoutes);

// Admin users route
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

// Start server

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
