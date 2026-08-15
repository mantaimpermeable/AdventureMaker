import { Request, Response, NextFunction } from 'express';

export default function registerUser(req: Request, res: Response, next: NextFunction){
    try{
        
    }catch(error){
        next(error);
    }
}