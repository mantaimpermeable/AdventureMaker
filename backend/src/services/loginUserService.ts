import { Database } from "../database/Database.js";
import { DataCollectionError } from "../types/errors.types.js";
import { UserData, User } from "../types/object.types.js";





export default class loginService{

    constructor(private db: Database){}

    async execute(userData : UserData): Promise<User> {
        
        //userData comprobation
        if(!userData) throw new DataCollectionError("NO_DATA","User didnt provide any data to login");
        const username: string = userData.username;
        if(!username) throw new DataCollectionError("NO_USERNAME", "User didnt provide a username to login");
        const passwd = userData.password;
        if(!passwd) throw new DataCollectionError("NO_PASSWORD", "User didnt provide a password to login");

        
    }
}