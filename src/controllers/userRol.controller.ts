import { Request, Response } from 'express'

// DB
import { connect } from '../database'

// Clases importadas de models.
import { UserRol } from '../models/userRol.model';

export async function getUserRols(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const rolsSelected = await conn.query('SELECT * FROM userRol');
        return res.json(rolsSelected[0]);
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function getUserRol(req: Request, res: Response) {
    try {
        const { idUserRol } = req.params;
        const conn = await connect();
        const userRolSelected = await conn.query('SELECT * FROM userRol WHERE idUserRol = ?', [idUserRol]);
        res.json(userRolSelected[0]);
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function createUserRol(req: Request, res: Response) {
    try {
        const newUserRol: UserRol = req.body;
        const conn = await connect();
        await conn.query('INSERT INTO userRol SET ?', [newUserRol]);
        // await conn.pool.query('INSERT INTO userRol SET ?', [newUserRol]);
        // Connection is automatically released once query resolves
        res.json('rol creado');
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function updateUserRol(req: Request, res: Response) {
    try {
        const updatedUserRol: UserRol = req.body;
        const { idUserRol } = req.params;
        const conn = await connect();
        const sql = conn.format('UPDATE userRol set ? WHERE idUserRol = ?', [updatedUserRol, idUserRol]);
        await conn.query(sql);
        res.json({
            message: 'Rol ' + idUserRol + ' updated'
        });
    } 
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function deleteUserRol(req: Request, res: Response) {
    try {
        const { idUserRol } = req.params;
        console.log(idUserRol);
        const conn = await connect();
        const sql = 'DELETE FROM userRol WHERE idUserRol = ' + [idUserRol];
        await conn.query(sql, function (err: any, result: any) {
            if (err) throw err;
            if (result.affectedRows > 0) {
                res.send({ 'message': 'Rol ' + idUserRol + ' deleted ' });
            } else {
                res.status(500).json(err);
            }
            res.end();
        });
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

