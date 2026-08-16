import { Router } from "express";
import { advGenerator } from "../controllers/userControllers/index.js";
import { registerUser } from '../controllers/authControllers/index.js'

const userRoutes = Router();

userRoutes.post('/adventure', advGenerator);
userRoutes.post('/auth/register', registerUser);

export default userRoutes;