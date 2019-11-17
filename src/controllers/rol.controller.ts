import { Request, Response } from 'express'
// https://expressjs.com/en/api.html#res.json
// import jwt from 'jsonwebtoken';
// const helpers = require('../libs/helpers');

// DB
import { connect } from '../database'

// Clases importadas de models.
import { Rol } from '../models/rol.model';

export async function getRols(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const rolsSelected = await conn.query('SELECT * FROM rol');
        return res.json(rolsSelected[0]);
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function getRolsFromTo(req: Request, res: Response): Promise<Response | void> {
    // const { fromRow, toRow, from = +fromRow, to = +toRow } = req.params;
    const fromRow = +req.params.fromRow;
    const toRow = +req.params.toRow;
    try {
        const conn = await connect();
        const rolsSelected = await conn.query('SELECT * FROM rol LIMIT ?, ?', [fromRow, toRow]);
        return res.json(rolsSelected[0]);
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function getRol(req: Request, res: Response) {
    try {
        // const idRol = req.params.idRol;
        const { idRol } = req.params;
        const conn = await connect();
        const userSelected = await conn.query('SELECT * FROM rol WHERE idRol = ?', [idRol]);
        // console.log(userSelected[0]);
        res.json(userSelected[0]);
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function createRol(req: Request, res: Response) {
    try {
        const newRol: Rol = req.body;
        // console.log(newRol);
        const conn = await connect();
        await conn.query('INSERT INTO rol SET ?', [newRol]);
        res.json('rol creado');
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function updateRol(req: Request, res: Response) {
    try {
        // console.log(req.params);
        const updatedRol: Rol = req.body;
        // console.log(updatedRol);
        const { idRol } = req.params;
        const conn = await connect();
        // await conn.query('UPDATE user set ? WHERE idUser = ?', [updatedUser, updatedUser.idUser]);
        const sql = conn.format('UPDATE rol set ? WHERE idRol = ?', [updatedRol, idRol]);
        // console.log(sql);
        await conn.query(sql);
        res.json({
            message: 'Rol ' + idRol + ' updated'
        });
    } 
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function deleteRol(req: Request, res: Response) {
    try {
        const { idRol } = req.params;
        console.log(idRol);
        const conn = await connect();
        const sql = 'DELETE FROM rol WHERE idRol = ' + [idRol];
        await conn.query(sql, function (err: any, result: any) {
            if (err) throw err;
            if (result.affectedRows > 0) {
                res.send({ 'message': 'Rol ' + idRol + ' deleted ' });
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

export async function getRolDescripcion(req: Request, res: Response) {
    try {
        console.log(req.params);
        // const descripcion = req.params.descripcion;
        // const idRol = req.params.idRol;
        const { idRol } = req.params;
        const { descripcion } = req.params;
        const conn = await connect();
        const rolSelected = await conn.query('SELECT * FROM rol WHERE descripcion = ? and idRol <> ?', [descripcion, idRol]);
        console.log(rolSelected[0]);
        res.json(rolSelected[0]);
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}