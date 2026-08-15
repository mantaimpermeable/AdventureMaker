declare global{
    //first we extend the process.env to define env types
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            HUGGINGFACE_API_KEY: string;
        }   
    };

    //declare global types
    type UserRole = "admin" | "user" ;

    namespace Express {
        interface Request {
            user?: {
                id: string;
                username: string;
                role: UserRole;
            };
        }
    }
}

export {};