import express from "express";
import { createRoom, getAllRooms, getRoomById, searchRooms } from "../Controllers/RoomController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createRoom);
router.get("/", getAllRooms);
router.get("/search", searchRooms);
router.get("/:id", authMiddleware, getRoomById);

export default router;
