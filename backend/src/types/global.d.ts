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
    type adventureStatus = "pending" | "done" | "idea";

    namespace Express {
        interface Request {
            user?: {
                id: number;
                username: string;
                password: string;
                role: UserRole;
            };
            verifiedU?: {
                id: number;
                username: string;
                token: string;
                role: UserRole;
            }
        }
    };

}

export {};