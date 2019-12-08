"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// https://expressjs.com/en/api.html#res.json
// import jwt from 'jsonwebtoken';
// const helpers = require('../libs/helpers');
// DB
const database_1 = require("../database");
function getRols(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield database_1.connect();
            const rolsSelected = yield conn.query('SELECT * FROM rol');
            return res.json(rolsSelected[0]);
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.getRols = getRols;
function getRolsFromTo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // const { fromRow, toRow, from = +fromRow, to = +toRow } = req.params;
        const fromRow = +req.params.fromRow;
        const toRow = +req.params.toRow;
        try {
            const conn = yield database_1.connect();
            const rolsSelected = yield conn.query('SELECT * FROM rol LIMIT ?, ?', [fromRow, toRow]);
            return res.json(rolsSelected[0]);
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.getRolsFromTo = getRolsFromTo;
function getRol(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const idRol = req.params.idRol;
            const { idRol } = req.params;
            const conn = yield database_1.connect();
            const userSelected = yield conn.query('SELECT * FROM rol WHERE idRol = ?', [idRol]);
            // console.log(userSelected[0]);
            res.json(userSelected[0]);
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.getRol = getRol;
function createRol(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newRol = req.body;
            // console.log(newRol);
            const conn = yield database_1.connect();
            yield conn.query('INSERT INTO rol SET ?', [newRol]);
            res.json('rol creado');
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.createRol = createRol;
function updateRol(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // console.log(req.params);
            const updatedRol = req.body;
            // console.log(updatedRol);
            const { idRol } = req.params;
            const conn = yield database_1.connect();
            // await conn.query('UPDATE user set ? WHERE idUser = ?', [updatedUser, updatedUser.idUser]);
            const sql = conn.format('UPDATE rol set ? WHERE idRol = ?', [updatedRol, idRol]);
            // console.log(sql);
            yield conn.query(sql);
            res.json({
                message: 'Rol ' + idRol + ' updated'
            });
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.updateRol = updateRol;
function deleteRol(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { idRol } = req.params;
            console.log(idRol);
            const conn = yield database_1.connect();
            const sql = 'DELETE FROM rol WHERE idRol = ' + [idRol];
            yield conn.query(sql, function (err, result) {
                if (err)
                    throw err;
                if (result.affectedRows > 0) {
                    res.send({ 'message': 'Rol ' + idRol + ' deleted ' });
                }
                else {
                    res.status(500).json(err);
                }
                res.end();
            });
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.deleteRol = deleteRol;
function getRolDescripcion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(req.params);
            // const descripcion = req.params.descripcion;
            // const idRol = req.params.idRol;
            const { idRol } = req.params;
            const { descripcion } = req.params;
            const conn = yield database_1.connect();
            const rolSelected = yield conn.query('SELECT * FROM rol WHERE descripcion = ? and idRol <> ?', [descripcion, idRol]);
            console.log(rolSelected[0]);
            res.json(rolSelected[0]);
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.getRolDescripcion = getRolDescripcion;
//# sourceMappingURL=rol.controller.js.map