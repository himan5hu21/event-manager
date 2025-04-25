import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";
import User from "../models/user.model.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Get the token from the Authorization: Bearer <token>

    if (!token) {
      return next(errorHandler(401, "No token provided. Access denied."));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password"); // attach user to request (without password)

    if (!req.user) {
      return next(errorHandler(401, "User not found. Access denied."));
    }

    next();
  } catch (error) {
    next(error);
  }
};
