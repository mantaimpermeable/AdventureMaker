import { Router } from "express";
import { advGenerator, registerUser } from "../controllers/index.js";

const userRoutes = Router();

userRoutes.post('/adventure', advGenerator);
userRoutes.post('/auth/register', registerUser);

export default userRoutes;