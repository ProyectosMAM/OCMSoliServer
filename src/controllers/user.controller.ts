import { Request, Response } from 'express'


const helpers = require('../libs/helpers');

// DB
import { connect } from '../database'

// Interfaces
import { user } from '../interfaces/user.interface'

export async function getUsers(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const user = await conn.query('SELECT * FROM user');
        console.log(user[0]);
        return res.json(user[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function getUser(req: Request, res: Response) {
    try {
        const idUser = req.params.idUser;
        console.log('Function getUser');
        console.log(req.params);
        const conn = await connect();
        const user = await conn.query('SELECT * FROM user WHERE idUser = ?', [idUser]);
        // console.log(user);
        res.json(user[0]);
    }
    catch (e) {
        console.log(e)
    
    }
}

export async function createUser(req: Request, res: Response) {
    // console.log(new Date());
    // console.log(req.body);
      try {
        const newUser: user = req.body;
        newUser.password = await helpers.encryptPassword(newUser.password);
        const conn = await connect();
        await conn.query('INSERT INTO user SET ?', [newUser]);
        res.json('user creado');
        console.log('user creado');
    }
    catch (e) {
        console.log(e.errno);
        console.log(e);
        res.json(e.errno);
    }
}

export async function updateUser(req: Request, res: Response) {
    const { idUser } = req.params;
    const updateUser: user = req.body;
    const conn = await connect();
    await conn.query('UPDATE user set ? WHERE idUser = ?', [updateUser, idUser]);
    res.json({
        message: 'User ' + idUser  + ' updated'
    });
}

/**
 * Metodo delete un usuario por su idUser.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 */
// export async function deleteUser(req: Request, res: Response) {
//     try {
//         // Uso de Asignación por destructuring.
//         // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
//         const { idUser } = req.params;
//         // console.log(req.params.idUser);
//         // console.log(req.params);
//         // console.log(idUser);
//     const conn = await connect();
//     const rowsDeleted = await conn.query('DELETE FROM user WHERE idUser = ?', [idUser]);
//     console.log(' Rows deleted: ' + rowsDeleted.length );
//     if (rowsDeleted.length > 0) {
//     res.json({
//         message: 'User ' + idUser  + ' deleted '
//     });
// } else {
//     res.json({
//         message: '¡No hay registro para borrar! '
//     });

// }
// }
//     catch (e) {
//         console.log(e)
//     }
// }


export async function deleteUser(req: Request, res: Response) {
    try {
        // Uso de Asignación por destructuring.
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
        const { idUser } = req.params;
        // console.log(req.params.idUser);
        // console.log(req.params);
        // console.log(idUser);
    const conn = await connect();
    const sql = 'DELETE FROM user WHERE idUser = ' + [idUser];
   await conn.query(sql, function (err: any, result:any) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) affected");

       if (result.affectedRows > 0) {
           console.log(" record(s) deleted");
           // res.json es lo que mostrara como respuesta Postman o Insomnia.
           // La respuesta se puede enviar como json.
           // Pero solo de una forma u otra.
           res.send('User ' + idUser + ' deleted ');
        //    res.json({
        //        message: 'User ' + idUser + ' deleted '
        //    });
                  } else {
        //    res.json({
        //        message: '¡No hay registro para borrar! '
        //    });
           res.send('¡No hay registro para borrar!');
           console.log("No hay registro que borrar");
       }
   res.end();
  });
}
    catch (e) {
        console.log(e)
    }
}

/**
 * Metodo para buscar un usuario existente mediante el user_name y password.
*/
export async function signIn(req: Request, res: Response) {
     const conn = await connect();
    const rows = await conn.query("SELECT * FROM user WHERE user_name =? ", [req.body.user_name]);
    // rows[] trae mucha información, selecciono unicamente rows[0] que son los datos de user.
    const row: any = rows[0];
    if (row != '') {
        const user: any = rows[0];
        const validatePass = await helpers.matchPassword(req.body.password, user[0].password);
        if (validatePass) {
            return res.json(user);
        } else {
            return res.json('password incorrecto');
        }
    } else {
        return res.json('usuario incorrecto');
    }
}

// #region  <form action="auth" method="POST">
    // https://codeshack.io/basic-login-system-nodejs-express-mysql/

//     <div class="login-form">
//     <h1>Login Form</h1>
//     <form action="auth" method="POST">
//         <input type="text" name="username" placeholder="Username" required>
//         <input type="password" name="password" placeholder="Password" required>
//         <input type="submit">
//     </form>
// </div>


 // El codigo javascript se ejecuta al pulsar el botón submit 
 //  <form action="auth" method="POST"> = app.post('/auth', function(request, response) {......
 

    // app.post('/auth', function(request, response) {
    //     var username = request.body.username;
    //     var password = request.body.password;
    //     if (username && password) {
    //         connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
    //             if (results.length > 0) {
    //                 request.session.loggedin = true;
    //                 request.session.username = username;
    //                 response.redirect('/home');
    //             } else {
    //                 response.send('Incorrect Username and/or Password!');
    //             }			
    //             response.end();
    //         });
    //     } else {
    //         response.send('Please enter Username and Password!');
    //         response.end();
    //     }
    // });
    //#endregion