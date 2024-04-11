import { Router } from "express";
import {
  validate,
  signUpValidator,
  loginValidator,
} from "../utils/validators.js";
import {
  getAllUsers,
  userSignUp,
  userLogin,
} from "../controllers/user-controllers.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signUpValidator), userSignUp);
userRoutes.post("/login", validate(loginValidator), userLogin);
export default userRoutes;
