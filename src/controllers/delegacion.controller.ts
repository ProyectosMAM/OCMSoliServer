import { Request, Response } from 'express'

// DB
import { connect } from '../database'

// Clases importadas de models.
import { Delegacion } from '../models/delegacion.model';

const table = 'delegacion';
const ID = 'idDelegacion';

export async function getDelegaciones(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const rolsSelected = await conn.query('SELECT * FROM delegacion');
        return res.json(rolsSelected[0]);
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function getDelegacion(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const conn = await connect();
        const userRolSelected = await conn.query('SELECT * FROM delegacion WHERE idDelegacion = ?', [id]);
        res.json(userRolSelected[0]);
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function createDelegacion(req: Request, res: Response) {
    try {
        const newDelegacion: Delegacion = req.body;
        const conn = await connect();
        await conn.query('INSERT INTO delegacion SET ?', [newDelegacion]);
        // await conn.pool.query('INSERT INTO userRol SET ?', [newUserRol]);
        // Connection is automatically released once query resolves
        res.json('Delegacion creada');
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function updateDelegacion(req: Request, res: Response) {
    try {
        const updatedDelegacion: Delegacion = req.body;
        const { id } = req.params;
        const conn = await connect();
        const sql = conn.format('UPDATE delegacion set ? WHERE idDelegacion = ?', [updatedDelegacion, id]);
        await conn.query(sql);
        res.json({
            message: 'Delegacion ' + id + ' updated'
        });
    } 
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function deleteDelegacion(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const conn = await connect();
        const sql = `DELETE FROM ${table} WHERE ${ID} = ${id}`;
        // console.log(sql1);
        await conn.query(sql, function (err: any, result: any) {
            if (err) throw err;
            if (result.affectedRows > 0) {
                res.send({ 'message': `${table} ${id} deleted ` });
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

