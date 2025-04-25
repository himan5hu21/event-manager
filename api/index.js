import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import eventRouter from "./routes/events.route.js";

// HeSL7fjZvdzdWQRJ

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error", err);
    process.exit(1); // Exit the process with failure
  }
};

// Initialize Express app
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Register routes
app.use("/api/auth", authRouter);
app.use("/api/events", eventRouter);
app.use("/api/user", (req, res) => {
  res.send("Working fine");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message =
    err.name === "ValidationError"
      ? Object.values(err.errors)
          .map((value) => value.message)
          .join(" ")
      : err.code === 11000
      ? `${Object.keys(err.keyValue)[0]} already exists`
      : err.message || "An Internal Server Error Occured";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start the sever and connect to the database
const startServer = async () => {
  await connectDB();
  app.listen(3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
};

startServer();
