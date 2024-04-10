import User from "../models/User.js";
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await User.find();
    return res.status(200).json({ message: "OK", users });
  } catch (e) {
    return res.status(404).json({ message: "ERROR", e });
  }
};