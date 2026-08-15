import mysql, { RowDataPacket, ResultSetHeader } from 'mysql2';

import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
}).promise();

//use interface to extend an existing data type
interface userRow extends RowDataPacket {
    id: number,
    username: string,
    password: string,
};

//class with basic CRUD operations in the database
export class Database {

    //function to find a user by its username
    //we use the ?? operator to convert undefined to null so it matches the promise type 
    async findByUsername( username: string ): Promise<userRow | null> {
        const [row] = await pool.query<userRow[]>(
          `SELECT * FROM users WHERE username = ?`, [username]
        );
        return row[0] ?? null ;
    };

    //function to fnind a user by its id
    // ?? = nullish coalescing
    async findById( id: number): Promise<userRow | null> {
        const [row] = await pool.query<userRow[]>(
        `SELECT * FROM users WHERE id = ?`, [id]
        );
        return row[0] ?? null;
    };

    //function to create a user with username and password
    //ResultSetHeader allow us to access the data of the recently added row
    async createUser ( username: string, password: string ): Promise<number | null> {
        const [result] = await pool.query<ResultSetHeader>(
        `INSERT INTO users (username, password) VALUES (?,?)`, [username, password]
        );
        return result.affectedRows < 1 ? null : result.insertId;
    };

    //function to delete a user by its id
    async deleteUser ( id: number): Promise<boolean> {
        const [result] = await pool.query<ResultSetHeader>(
        `DELETE FROM users WHERE id = ?`, [id]
        );
        return result.affectedRows > 0;
    }

}