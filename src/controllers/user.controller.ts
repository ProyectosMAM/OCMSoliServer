import { Request, Response } from 'express'

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
        console.log(newUser);
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

export async function deleteUser(req: Request, res: Response) {
    try {
        console.log(req.params.UserId);
        console.log(req.params);
    const id = req.params.UserId;
    const conn = await connect();
    await conn.query('DELETE FROM user WHERE idUser = ?', [id]);
    res.json({
        message: 'User deleted '+ id
    });
}
    catch (e) {
        console.log(e)
    }
}

export async function updateUser(req: Request, res: Response) {
    const id = req.params.UserId;
    const updateUser: user = req.body;
    const conn = await connect();
    await conn.query('UPDATE user set ? WHERE idUser = ?', [updateUser, id]);
    res.json({
        message: 'user Updated'
    });
}