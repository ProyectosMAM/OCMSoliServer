import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'mamtrucha0121',
        database: 'solicitudes',
        connectionLimit: 10
    });
    return connection;
}