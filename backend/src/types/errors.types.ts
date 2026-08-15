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

//error for problems accesing data of user input
export class DataCollectionError extends AppError {
    constructor(cause: string, message: string) {
        super(cause, message, 400);

        this.name = "DataCollectionError";
    };
};

//erro al hacer algun proceso logico en los servicios
export class ServiceError extends AppError {
    constructor(cause: string, message: string) {
        super(cause, message, 500);

        this.name = "ServiceError";
    }
};

//error for ai model generation of adventure
export class GenerationError extends AppError {
    constructor(cause: string, message: string) {
        super(cause, message, 500);

        this.name = "GenerationError";
    }
}