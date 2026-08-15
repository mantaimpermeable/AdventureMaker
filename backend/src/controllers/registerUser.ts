import { Request, Response, NextFunction } from 'express';
import { registerUserService } from '../services/index.js'
import { User } from '../types/object.types.js'

 const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const user = req.user;
        const registerService = new registerUserService();
        const newUser: User  = await registerService.registerUser(user);

        return res.status(200).json({
            result: "New user created",
            userId: newUser.id,
            username: newUser.username,
            role: newUser.role,
            createdTime: newUser.createdAt,

        })

    }catch(error){
        next(error);
    }
};

export default registerUser;
