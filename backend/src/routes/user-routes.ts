import { Router } from "express";
import { validate, signUpValidator } from "../utils/validators.js";
import { getAllUsers, userSignUp } from "../controllers/user-controllers.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signUpValidator), userSignUp);
export default userRoutes;
