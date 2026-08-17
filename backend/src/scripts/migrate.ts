import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises' //filesystem para manipular archivos de nuestro servidor
import { pool } from "../database/Database.js";
import dotenv from 'dotenv';

dotenv.config();

//we have to save in const our actual path to use absolute paths in dir propery of migration
const __filename: string = fileURLToPath(import.meta.url); //fileURLToPath converts to a path like string of our OS
const __dirname: string = path.dirname(__filename); //now we store our directory location instead of our actual file

const runMigrations = async () => {
    
    const migrationDir: string = path.join(__dirname, "../migrations/sql");//Now we save the direction of the migrations directory
    
    
    try {
        
        console.log("Empezando migracion...");
        console.log(`Conectando a ${process.env.DB_NAME}`);

        await pool.query(`
            CREATE TABLE IF NOT EXISTS migrations (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        console.log("Tabla de migraciones operativa");

        const files: string[] = await fs.readdir(migrationDir)
        
        //if there isnt any migration files
        if(files.length === 0){
            console.log("No hay ninguna migracion que aplicar");
            process.exit(0)
        };

        //recorremos la tabla de migraciones para comprobar cuales tenemos ya, guardando el primer elemento del array
         for (const file of files) {
            const [existing] = await pool.query(
                'SELECT * FROM migrations WHERE name = ?',
                [file]
            );

            //if existing is an array and has any element we skip this migration
             if (Array.isArray(existing) && existing.length > 0) {
                console.log(` ${file} ya aplicada, saltando...`);
                continue;
            };

            console.log(`Aplicando: ${file}`);
            //read the file inside the migration directory
            const sql = await fs.readFile(path.join(migrationDir, file), 'utf8');
            
            //execute the migration
            await pool.query(sql);

            //save into the migration table
            await pool.query(
                'INSERT INTO migrations (name) VALUES (?)',
                [file]
            );
            console.log(`${file} aplicado`);
        };

        //once finished, log it and close connections
        console.log("Todas las migraciones aplicadas");
        await pool.end();
        process.exit(0);

    }catch (error) {
        console.log(`Error during migrations: ${error}`);
        process.exit(1);
        
    }
}
//execute it instally
runMigrations();