import express from "express";
import { createRoom, getPublicRooms, searchRooms } from "../Controllers/RoomController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createRoom);
router.get("/public", getPublicRooms);
router.get("/search", searchRooms);

export default router;
