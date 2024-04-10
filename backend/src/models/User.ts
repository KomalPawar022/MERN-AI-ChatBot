import mongoose from "mongoose";
import { randomUUID } from "crypto";
const userSchmema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  chats: [chatSchema],
});
const chatSchema = new mongoose.Schema({
  id: { type: String, default: randomUUID() },
  role: { type: String, required: true },
  content: { type: String, required: true },
});

export default mongoose.model("User", userSchmema);
