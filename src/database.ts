import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: process.env['HOST'],
        user: process.env['USER'],
        password: process.env['PASSWORD'],
        database: process.env['DATABASE'],
        connectionLimit: 10
    });
    return connection;
}
