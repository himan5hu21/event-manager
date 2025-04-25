import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return next(errorHandler(401, "Invalid credentials"));
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({
        success: true,
        user: { _id: user._id, email: user.email, role: user.role },
        token,
      });
  } catch (error) {
    next(error);
  }
};

export const signup = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(errorHandler(400, "Email already registered"));
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });

    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User created successfully!" });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  res.clearCookie("access_token", {
    httpOnly: true,
    sameSite: "Strict", // Optional: Adjust depending on frontend/backend setup
    secure: process.env.NODE_ENV === "production", // Use 'true' in production with HTTPS
  });

  return res
    .status(200)
    .json({ success: true, message: "User logged out successfully" });
};
