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
        const id = req.params.UserId;
        console.log(req.params);
        const conn = await connect();
        const user = await conn.query('SELECT * FROM user WHERE idUser = ?', [id]);
        // console.log(user);
        res.json(user[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createUser(req: Request, res: Response) {
    try {
        const newUser: user = req.body;
        newUser.password = await helpers.encryptPassword( newUser.password);
        console.log(newUser);
        console.log('Logitud password: ' + newUser.password.length);
         const conn = await connect();
         await conn.query('INSERT INTO user SET ?', [newUser]);
         res.json({
             message: 'New User Created'
         });
     }
     catch (e) {
         console.log(e)
         res.json({
             message: 'Error User Created'
         });
     }
}

/**
 * Metodo para buscar un usuario existente mediante el user_name y password
 * encriptar passs
 * se debe encriptar el pasword que viene como parametro y enviar a la consulta.
 * select * from usuaers where username = 'username adr password = :password encriptado
 */
export async function signIn(username: string, password: string) {
   
        // const newUser: user = req.body;
        // newUser.password = await helpers.encryptPassword( newUser.password);
        // console.log(newUser);
        const conn = await connect();
        //cambiar por SELECT ***** WHERE USERNAME AND PASSWORD
        const rows = await conn.query('SELECT * FROM users WHERE username = ?', [username]);
        if (rows.length > 0) {
          const user = rows[0];
          const validPassword = await helpers.matchPassword(password, password)  // tendria que ser use.password
          if (validPassword) {
              console.log('Usuario logeado correctamente');
            // done(null, user, req.flash('success', 'Welcome ' + user.username));
          } else {
            console.log('Password incorrecto');
            // done(null, false, req.flash('message', 'Incorrect Password'));
          }
        } else {
            console.log('Nombre de usuario incorrecto');
        //   return done(null, false, req.flash('message', 'The Username does not exists.'));
                
      }
    }

export async function updateUser(req: Request, res: Response) {
    const { UserId } = req.params;
    const updateUser: user = req.body;
    const conn = await connect();
    await conn.query('UPDATE user set ? WHERE idUser = ?', [updateUser, UserId]);
    res.json({
        message: 'user Updated'
    });
}

/**
 *
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 */
export async function deleteUser(req: Request, res: Response) {
    try {
        // Uso de Asignación por destructuring.
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
        const { UserId } = req.params;
        console.log(req.params.UserId);
        console.log(req.params);
        console.log(UserId);
    const conn = await connect();
    await conn.query('DELETE FROM user WHERE idUser = ?', [UserId]);
    res.json({
        message: 'User ' + UserId  + ' deleted '
    });
}
    catch (e) {
        console.log(e)
    }
}


