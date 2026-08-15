import { Request } from 'express';
import { DataCollectionError, ServiceError } from '../types/errors.types.js';
import { User } from '../types/object.types.js'

export default class registerUserService {

    //todo constructor with the database connection and the user model

    async registerUser(userData: Request['user']): Promise<User> {
        if(!userData) throw new DataCollectionError("NO_DATA", "The user data is empty or undefined");
        if(!userData.username) throw new DataCollectionError("NO_USERNAME", "Client must provide a username with request");
        const password = userData.password;
        if(!password) throw new DataCollectionError("NO_PASSWORD", "Client must provide a password with request");
        if(password.length < 8) throw new DataCollectionError("PASSWORD_SHORT", "Password must have a minimun of 8 caracters");
        if(password === password.toLocaleLowerCase()) throw new DataCollectionError("NO_CAPITAL_LETTER", "Password must contain at least a capital letter");
        if(password.includes(" ") || password !== password.trim()) throw new DataCollectionError("NO_SPACES", "Password must not contain blanc spaces");

        //Database checks

        //we return the user with hardcoded values until databse implementation
        return {
            id:1,
            username: userData.username,
            password: password,
            role: "user",
            createdAt: new Date(),
            lastLogin: new Date()

        };
}
}