import { Router } from "express";
import { advGenerator } from "../controllers/userControllers/index.js";


const userRoutes = Router();

userRoutes.post('/adventure', advGenerator);

export default userRoutes;