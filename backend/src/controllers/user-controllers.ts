import User from "../models/User.js";
import { hash } from "bcrypt";
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json({ message: "OK", users: users });
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: "ERROR", cause: e.message });
  }
};

export const userSignUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    return res.status(200).json({ message: "OK", id: user._id.toString() });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "ERROR", cause: e.message });
  }
};
