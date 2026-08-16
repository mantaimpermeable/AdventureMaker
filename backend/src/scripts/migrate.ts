import { Migration } from "ts-mysql-migrate";
import { pool } from "../database/Database.js";
import dotenv from 'dotenv';

dotenv.config();

const runMigrations = async () => {
    //Console logs to see the process is running
    console.log("Empezando migracion...");
    console.log(`Conectando a ${process.env.DB_NAME}`);

    const connection = pool as any;

    //table migrations to storage all the migration, with dir the folder with the actual migrations to run them
    const migration = new Migration({
        conn: connection,
        tableName: 'Migrations',
        dir: 'src/migrations'

    });

    try {
        
        await migration.initialize();
        console.log("Table migration initialized");
        
        await migration.up();
        console.log("All migrations aplied");

        process.exit(0);

    } catch (error) {
        console.log(`Error during migrations: ${error}`);
        process.exit(1);
        
    }
};
//execute it instally
runMigrations();