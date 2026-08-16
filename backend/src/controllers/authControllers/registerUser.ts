import { Request, Response, NextFunction } from 'express';
import  { registerUserService } from '../../services/index.js';
import { User, RegisterUserData } from '../../types/object.types.js';
import { Database } from '../../database/Database.js';

/*
    Controller for the registration of a user request, it extracts the whole .user extended type of the request in a const and tries to
    execute the service of creating a new user. If any errors happens in the service it throws it and here we catch it and throw it 
    to the errorHandler in the middleware, if everything is allright we send the user in the response
*/
 const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try{

        const user:  RegisterUserData= req.body;
        const registerService = new registerUserService(new Database);
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
