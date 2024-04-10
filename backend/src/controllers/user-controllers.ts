import User from "../models/User.js";
import { NextFunction, Request, Response } from "express";
import { hash } from "bcrypt";
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await User.find();
    return res.status(200).json({ message: "OK", users: users });
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: "ERROR", cause: e.message });
  }
};

export const userSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { name, email, password } = req.body;
    const hashedpassword = await hash(password, 10);
    const user = new User({ name, email, password: hashedpassword });
    await user.save();
    return res.status(201).json({ message: "OK", id: user._id.toString() });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "ERROR", cause: e.message });
  }
};
