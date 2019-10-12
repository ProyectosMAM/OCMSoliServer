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



// const pool = mysql.createPool(database);

// pool.getConnection((err, connection) => {
//   if (err) {
//     if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//       console.error('Database connection was closed.');
//     }
//     if (err.code === 'ER_CON_COUNT_ERROR') {
//       console.error('Database has to many connections');
//     }
//     if (err.code === 'ECONNREFUSED') {
//       console.error('Database connection was refused');
//     }
//   }

//   if (connection) connection.release();
//   console.log('DB is Connected');

//   return;
// });
