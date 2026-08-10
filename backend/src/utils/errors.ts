export class AppError extends Error {
    public readonly cause: string;
    public readonly statusCode: number;
    
    //every error should have a cause, the statusCode and a message
    constructor(cause: string, message: string, statusCode: number) {

        super(message);

        this.cause = cause;
        this.statusCode = statusCode;
    }

};

export class GenerationError extends AppError {
    constructor(cause: string, message: string) {
        super(cause, message, 500);

        this.name = "GenerationError";
    }
}