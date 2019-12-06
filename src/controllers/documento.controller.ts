import { Request, Response } from 'express'

// DB
import { connect } from '../database'

// Clases importadas de models.
import { Documento } from '../models/documento.model';

const table = 'documento';
const ID = 'idDocumento';

export async function getAll(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const rolsSelected = await conn.query(`SELECT * FROM ${table}`);
        return res.json(rolsSelected[0]);
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function getAllFase(req: Request, res: Response): Promise<Response | void> {
    try {
        // console.log(req);
        const { idSolicitud } = req.params;
        const { fase } = req.params;
        const conn = await connect();
        const rolsSelected = await conn.query(`SELECT * FROM ${table} WHERE idSolicitudes = ${idSolicitud} and fase = ${fase} `);
         console.log(conn.query);
        return res.json(rolsSelected[0]);
    }
    catch (error) {
      
        console.log(error)
        res.json(error);
    }
}

export async function get(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const conn = await connect();
        const userRolSelected = await conn.query(`SELECT * FROM ${table} WHERE ${ID} = ${id}`);
        res.json(userRolSelected[0]);
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function create(req: Request, res: Response) {
    try {
        const newRow: Documento = req.body;
        const conn = await connect();
        await conn.query(`INSERT INTO ${table} SET ?`, [newRow]);
        res.json('Creada');
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function update(req: Request, res: Response) {
    try {
        const updatedRow: Documento = req.body;
        const { id } = req.params;
        const conn = await connect();
        const sql = conn.format(`UPDATE ${table} set ? WHERE ${ID} = ${id}`, [updatedRow]);
        console.log(sql);
        await conn.query(sql);
        res.json({
            message: '' + id + ' updated'
        });
    } 
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function deleter(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const conn = await connect();
        const sql = `DELETE FROM ${table} WHERE ${ID} = ${id}`;
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

