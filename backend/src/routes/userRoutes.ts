import { Router } from "express";
import { advGenerator, registerUser } from "../controllers/index.js";

const userRoutes = Router();

userRoutes.get('/adventure', advGenerator);
userRoutes.post('/auth/register', registerUser);

export default userRoutes;