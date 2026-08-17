import mysql from 'mysql2/promise'
import dotenv from 'dotenv';

dotenv.config();

//async function to initiate the database schema if doeasnt exist
const initiateDB = async () => {
    try {
        const dbName = process.env.DB_NAME;
        //create a connection instead of accesing database
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        });
        //Caracter set utf8mb4 == caracters of 1-4 bytes (emojis)
        //Collate--rules of text compariSON, utf8mb4 (1-4 bytes caracters); unicode--Unicode standar; ci--Case insensitive
        await connection.query(`CREATE DATABASE IF NOT EXISTS ??
                         CHARACTER SET utf8mb4 
                         COLLATE utf8mb4_unicode_ci`, [dbName]);
        
        console.log(`Base de datos ${dbName} lista`);
        //use the database
        await connection.query(`USE ??`, [dbName]);
        console.log(`Using ${dbName} schema`);

        //process exit to kill the process, return would only exit the function but let the process
        //active, consuming server resourcess
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

initiateDB();