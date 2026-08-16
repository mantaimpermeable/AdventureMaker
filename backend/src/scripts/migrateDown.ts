// src/scripts/migrate-down.ts
import { Migration } from 'ts-mysql-migrate';
import { pool } from '../database/Database.js';
import dotenv from 'dotenv';

dotenv.config();

const rollbackMigrations = async () => {
    console.log('Revirtiendo última migración...');
    
    const connection = pool as any;
    
    const migration = new Migration({
        conn: connection,
        tableName: 'migrations',
        dir: 'src/migrations/',
    });

    try {
        await migration.initialize();
        await migration.down(); 
        console.log('Migration down');
        process.exit(0);
    } catch (error) {
        console.error('Error during migration down:', error);
        process.exit(1);
    }
};

//instant call
rollbackMigrations();