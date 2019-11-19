import { Request, Response } from 'express'
// https://expressjs.com/en/api.html#res.json
// import jwt from 'jsonwebtoken';
// const helpers = require('../libs/helpers');

// DB
import { connect } from '../database'

// Clases importadas de models.
import { Solicitud } from '../models/solicitud.model';

export async function getSolicitudes(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const solicitudesSelected = await conn.query('SELECT * FROM solicitud');
        return res.json(solicitudesSelected[0]);
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function getSolicitud(req: Request, res: Response) {
    try {
        // const idRol = req.params.idRol;
        const { idSolicitudes } = req.params;
        const conn = await connect();
        const userSelected = await conn.query('SELECT * FROM solicitud WHERE idSolicitudes = ?', [idSolicitudes]);
        // console.log(userSelected[0]);
        res.json(userSelected[0]);
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function createSolicitud(req: Request, res: Response) {
    try {
        const newSolicitud: Solicitud = req.body;
        // console.log(newRol);
        const conn = await connect();
        await conn.query('INSERT INTO solicitud SET ?', [newSolicitud]);
        res.json('solicitud creado');
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function updateSolicitud(req: Request, res: Response) {
    try {
        // console.log(req.params);
        const updatedSolicitud: Solicitud = req.body;
        // console.log(updatedRol);
        const { idSolicitudes } = req.params;
        const conn = await connect();
        // await conn.query('UPDATE user set ? WHERE idUser = ?', [updatedUser, updatedUser.idUser]);
        const sql = conn.format('UPDATE solicitud set ? WHERE idSolicitudes = ?', [updatedSolicitud, idSolicitudes]);
        // console.log(sql);
        await conn.query(sql);
        res.json({
            message: 'Solicitud ' + idSolicitudes + ' updated'
        });
    } 
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

export async function deleteSolicitud(req: Request, res: Response) {
    try {
        const { idSolicitudes } = req.params;
        console.log(idSolicitudes);
        const conn = await connect();
        const sql = 'DELETE FROM solicitud WHERE idSolicitudes = ' + [idSolicitudes];
        await conn.query(sql, function (err: any, result: any) {
            if (err) throw err;
            if (result.affectedRows > 0) {
                res.send({ 'message': 'Solicitud ' + idSolicitudes + ' deleted ' });
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

