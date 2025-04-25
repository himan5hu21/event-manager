import { signin, signup, logout } from "../controllers/auth.controller.js";
import express from "express";

const router = express.Router();

router.post("/login", signin);
router.post("/signup", signup);
router.post("/logout", logout);

export default router;
