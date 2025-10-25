import Room from "../models/Room.js";
import generateRoomCode from "../utils/generateRoomCode.js";

// @desc Create a new room
export const createRoom = async (req, res) => {
  const { roomName, topics, maxUsers, isPrivate } = req.body;

  try {
    const roomData = {
      roomName,
      topics,
      maxUsers,
      isPrivate,
      createdBy: req.user._id,
    };

    if (isPrivate) {
      roomData.roomCode = generateRoomCode();
    }

    const room = await Room.create(roomData);
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get all public rooms
export const getPublicRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ isPrivate: false });
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Search rooms by topic
export const searchRooms = async (req, res) => {
  const { topic } = req.query;

  try {
    const rooms = await Room.find({
      topics: { $regex: topic, $options: "i" },
      isPrivate: false,
    });
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
