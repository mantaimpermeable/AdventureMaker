import { Router } from "express";
import { registerUser } from '../controllers/authControllers/index.js'

const authRoutes = Router();

authRoutes.post('/register', registerUser);

export default authRoutes;