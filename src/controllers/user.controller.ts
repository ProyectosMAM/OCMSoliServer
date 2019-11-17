import { Request, Response } from 'express'
import jwt from 'jsonwebtoken';
const helpers = require('../libs/helpers');

// Controlar errores.
// https://www.codementor.io/zellliew/handling-errors-in-express-10oun71c6l?utm_swu=7100

// DB
import { connect } from '../database'

// Clases importadas de models.
import { User } from '../models/user.model';

// Interfaces

export async function getUsers(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const usersSelected = await conn.query('SELECT * FROM user');
        // console.log(usersSelected[0]);
        return res.json(usersSelected[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function getUser(req: Request, res: Response) {
    // console.log('Function getUser');
    try {
        const idUser = req.params.idUser;
        // console.log('Function getUser');
        // console.log(req.params);
        const conn = await connect();
        const userSelected = await conn.query('SELECT * FROM user WHERE idUser = ?', [idUser]);
        console.log(userSelected[0]);
        res.json(userSelected[0]);
    }
    catch (e) {
        console.log(e);
    }
}

export async function createUser(req: Request, res: Response) {
    try {
        const newUser: User = req.body;
        console.log(newUser);
        newUser.password = await helpers.encryptPassword(newUser.password);
        const conn = await connect();
        await conn.query('INSERT INTO user SET ?', [newUser]);
        res.json('user creado');
    }
    catch (e) {
        if (e.message.includes('email')) {
            res.json('El email ya existe');
        }
        if (e.message.includes('userName')) {
            res.json('El nombre de usuario ya existe');
        } else {
            console.log(e);
            res.json(e)
        }
    }
}

export async function updateUser(req: Request, res: Response) {
    try {
        // console.log(req.params);
        const updatedUser: User = req.body;
        // console.log(updatedUser);
        const conn = await connect();
        // await conn.query('UPDATE user set ? WHERE idUser = ?', [updatedUser, updatedUser.idUser]);
        const sql = conn.format('UPDATE user set ? WHERE idUser = ?', [updatedUser, updatedUser.idUser]);
        // console.log(sql);
        await conn.query(sql);
        res.json({
            message: 'User ' + updatedUser.idUser + ' updated'
        });
    } catch (e) {
        console.log('error encontrado');///{'message': 'error email existente}´subscribe(response => {}, error =>{ alert.warning(error.message)})
        console.log(e);
        res.json({e});
    }
}

export async function deleteUser(req: Request, res: Response) {
    try {
        // Uso de Asignación por destructuring.
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
        const { idUser } = req.params;
        // console.log(req.params.idUser);
        // console.log(req.params);
        console.log(idUser);
        const conn = await connect();
        const sql = 'DELETE FROM user WHERE idUser = ' + [idUser];
        await conn.query(sql, function (err: any, result: any) {
            if (err) throw err;
            // console.log(result.affectedRows + " record(s) affected");

            if (result.affectedRows > 0) {
                // console.log(" record(s) deleted");
                // res.json es lo que mostrara como respuesta Postman o Insomnia.
                // La respuesta se puede enviar como json.
                // Pero solo de una forma u otra.
                res.send({ 'message': 'User ' + idUser + ' deleted ' });
                //    res.json({
                //        message: 'User ' + idUser + ' deleted '
                //    });
            } else {
                //    res.json({
                //        message: '¡No hay registro para borrar! '
                //    });
                // res.send('¡No hay registro para borrar!');
                res.status(500).json(err);
                // console.log("No hay registro que borrar");
            }
            res.end();

        });
    }
    catch (e) {
        console.log(e)
    }
}

export async function signIn(req: Request, res: Response) {
    const conn = await connect();
    const rows = await conn.query("SELECT * FROM user WHERE userName =? ", [req.body.userName]);
    // rows[] trae mucha información, selecciono unicamente rows[0] que son los datos de user.
    const row: any = rows[0];
    if (row != '') {
        const user: any = rows[0];
        const validatePass = await helpers.matchPassword(req.body.password, user[0].password);
        if (validatePass) {
            var tokenData = {
                username: req.body.userName
            }
            const token: string = jwt.sign(tokenData, process.env.TOKEN_SECRET || 'siNoExisteEnv', {
                expiresIn: 60 * 60 * 24
            });
            // console.log(token);
            res.send({ token })
        } else {
            return res.json('password incorrecto');
        }
    } else {
        return res.json('usuario incorrecto');
    }
}

export const profile = (req: Request, res: Response) => {
    res.send({ profile: 'profile' });
}

export async function getUserEmail(req: Request, res: Response) {
    try {
        const email = req.params.email;
        const idUser = req.params.idUser;
        const conn = await connect();
        const userSelected = await conn.query('SELECT * FROM user WHERE email = ? and idUser <> ?', [email, idUser]);
        // console.log(userSelected[0]);
        res.json(userSelected[0]);
    }
    catch (e) {
        console.log(e);
    }
}

    export async function getUserName(req: Request, res: Response) {
        try {
            console.log(req.params);
            const userName = req.params.userName;
            const idUser = req.params.idUser;
            const conn = await connect();
            console.log(`SELECT * FROM user WHERE userName = ${userName} and idUser <> ${idUser}`);
            const userSelected = await conn.query('SELECT * FROM user WHERE userName = ? and idUser <> ?', [userName, idUser]);
            console.log(userSelected[0]);
            res.json(userSelected[0]);
        }
        catch (e) {
            console.log(e);
        }
}