import { Router } from "express";
import advGenerator from "../controllers/advGenerator.js";

const userRoutes = Router();

userRoutes.post('/adventure', advGenerator);

export default userRoutes;