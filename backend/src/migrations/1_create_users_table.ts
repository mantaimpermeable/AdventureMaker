
//function to create table of users if it doesnt exist
export async function upgrade(queryFn: (query: string, values?: any[]) => Promise<Array<any>>) {
    console.log(' Creando tabla users...');
    await queryFn(`
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            password VARCHAR(50) NOT NULL,
            role ENUM('admin', 'user', 'guest') DEFAULT 'user',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
    `);
    
    console.log('Tabla users creada');
};

//function to drop the table
export async function downgrade(queryFn: (query: string, values?: any[]) => Promise<Array<any>>) {
    console.log('Eliminando tabla users...');
    await queryFn(`DROP TABLE IF EXISTS users;`);
    console.log('Tabla users eliminada');
}