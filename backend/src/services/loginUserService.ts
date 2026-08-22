import { Database } from "../database/Database.js";
import { DataCollectionError, ExistingDataError } from "../types/errors.types.js";
import { UserData, User } from "../types/object.types.js";
import bcrypt from 'bcrypt';





export default class loginService{

    constructor(private db: Database){}

    async execute(userData : UserData): Promise<User> {
        
        //userData comprobation
        if(!userData) throw new DataCollectionError("NO_DATA","User didnt provide any data to login");
        const username: string = userData.username.toLocaleLowerCase().trim();
        if(!username) throw new DataCollectionError("NO_USERNAME", "User didnt provide a username to login");
        const passwd = userData.password.trim();
        if(!passwd) throw new DataCollectionError("NO_PASSWORD", "User didnt provide a password to login");

        //db checks for correct login information
        const existingU = await this.db.findByUsername(username.toLowerCase());
        if(!existingU) throw new ExistingDataError('NO_USERNAME_FOUND','There is no username with this username');

        const isValid = await bcrypt.compare(passwd, existingU.password);
        if(!isValid) throw new DataCollectionError('INVALID_PASSWORD', 'Invalid password provided by the user');

        return {
            id: existingU.id,
            username: username,
            role: "user",
            lastLogin: new Date()   
        }

    }
}