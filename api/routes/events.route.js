import express from "express";
import {
  createEventController,
  deleteEventController,
  getAllEventController,
  getEventByCategoryNameController,
  getSingleEventController,
  searchEventController,
  updateEventController,
} from "../controllers/event.controller.js";
import { authMiddleware } from "../utils/authMiddleware.js";
import { adminMiddleware } from "../utils/adminMiddleware.js";

const router = express.Router();

router.get("/", getAllEventController);
router.get("/search", searchEventController);
router.get("/byCategory/:categoryName", getEventByCategoryNameController);
router.get("/:id", getSingleEventController);

// Admin-only Routes (Protected)
router.post("/", authMiddleware, adminMiddleware, createEventController);
router.put("/:id", authMiddleware, adminMiddleware, updateEventController);
router.delete("/:id", authMiddleware, adminMiddleware, deleteEventController);

export default router;
