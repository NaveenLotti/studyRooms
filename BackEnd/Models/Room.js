import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    roomName: { type: String, required: true },
    topics: [{ type: String }],
    maxUsers: { type: Number, required: true },
    isPrivate: { type: Boolean, default: false },
    roomCode: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default mongoose.model("Room", roomSchema);
