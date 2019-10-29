import { createPool, Pool } from 'mysql2/promise'
import { Http2SecureServer } from 'http2';

export async function connect(): Promise<Pool | any> {
try {
const connection = await createPool({
        host: process.env['HOST'],
        user: process.env['USER'],
        password: process.env['PASSWORD'],
        database: process.env['DATABASE'],
        connectionLimit: 10
    });
return connection;
} catch (error) {
    if (error.code === 'PROTOCOL_CONNECTION_LOST') {
              console.error('Database connection was closed.');
            }
            if (error.code === 'ER_CON_COUNT_ERROR') {
              console.error('Database has to many connections');
            }
            if (error.code === 'ECONNREFUSED') {
              console.error('Database connection was refused');
            }
           
}
}

