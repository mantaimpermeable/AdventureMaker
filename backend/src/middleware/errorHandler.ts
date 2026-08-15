import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger.js";
import { AppError } from "../types/errors.types.js"; 
//As every error extends from AppError we can use it to check all of our personlized errors

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    //TODO: hacer un chu
    if(error instanceof AppError) {
        //Si se trata de un error de nuestro servidor logueamos un error para que se nos guarde en futuro transporter
        //Si es un error del usuario simplemente hacemos un info con el que se trabajara a futuro
        //De todas maneras se retorna el error con su codigo de estado al usuario para que pueda manejarlo en el front
        if(error.statusCode <= 500){
            logger.error(`Error: ${error.name} - Cause: ${error.cause} - Message: ${error.message}`);
        } else {
            logger.info(`Error: ${error.name} - Cause: ${error.cause} - Message: ${error.message}`);
        };
        
        return res.status(error.statusCode).json({ 
            error: {
                name: error.name,
                cause: error.cause,
                message: error.message
            }
        });
    }
    //Y aqui manejamos cualquier otro erro que no tengamos definido para definirlo a futuros
     else {
        logger.error(`Unexpected Error: ${error}`);
        return res.status(500).json({ 
            error: {
                name: "UnexpectedError",
                cause: "An unexpected error occurred",
                message: `Didnt have defined: ${error.message} `
            }
        });
    }
}

export default errorHandler;