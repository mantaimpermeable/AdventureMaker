import { DataCollectionError, ServiceError, ExistingDataError } from '../types/errors.types.js';
import { User, UserData } from '../types/object.types.js';
import { Database } from '../database/Database.js';
import bcrypt from 'bcrypt'

export default class registerUserService {
    //inyect a database 
    constructor( private db: Database) {}

    //username checks in lower case to avoid two users with same name but different capital leters  Maria != MaRiA
    async registerUser(userData: UserData): Promise<User> {

        //client request checks
        if(!userData) throw new DataCollectionError("NO_DATA", "No data provided by client side");
        const username: string = userData.username;
        const password: string = userData.password;
        if(!username) throw new DataCollectionError("NO_USERNAME", "Client must provide a username with request");
        if(!password) throw new DataCollectionError("NO_PASSWORD", "Client must provide a password with request");
        if(password.length < 8) throw new DataCollectionError("PASSWORD_SHORT", "Password must have a minimun of 8 caracters");
        if(password === password.toLocaleLowerCase()) throw new DataCollectionError("NO_CAPITAL_LETTER", "Password must contain at least a capital letter");
        if(password.includes(" ") || password !== password.trim()) throw new DataCollectionError("NO_SPACES", "Password must not contain blanc spaces");

        //Database checks
        const existingUser =  await this.db.findByUsername(username.toLocaleLowerCase());
        if(existingUser) throw new ExistingDataError("USERNAME_ON_USE", "This username is already in use");
        
        const hashedPasswd = await bcrypt.hash(password, 10);
        if(!hashedPasswd) throw new ServiceError("ENCYPTION_ERROR", "An error has ocurred while encripting the password");

        const userID = await this.db.createUser(username, hashedPasswd);
        if(!userID) throw new ServiceError("DB_ERROR", `Error has ocurred while trying to create the user: ${username}`);

        //TODO token generation
        
        //we return the user with hardcoded values until databse implementation
        return {
            id:1,
            username: username,
            role: "user",
            createdAt: new Date(),
            lastLogin: new Date()

        };
}
}