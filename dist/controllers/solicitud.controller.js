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
function getSolicitudes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield database_1.connect();
            const solicitudesSelected = yield conn.query('SELECT * FROM solicitud');
            return res.json(solicitudesSelected[0]);
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.getSolicitudes = getSolicitudes;
function getSolicitud(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const idRol = req.params.idRol;
            const { id } = req.params;
            const conn = yield database_1.connect();
            const userSelected = yield conn.query('SELECT * FROM solicitud WHERE idSolicitudes = ?', [id]);
            // console.log(userSelected[0]);
            res.json(userSelected[0]);
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.getSolicitud = getSolicitud;
function createSolicitud(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newSolicitud = req.body;
            // console.log(newRol);
            const conn = yield database_1.connect();
            yield conn.query('INSERT INTO solicitud SET ?', [newSolicitud]);
            res.json('solicitud creado');
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.createSolicitud = createSolicitud;
function updateSolicitud(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // console.log(req.params);
            const updatedSolicitud = req.body;
            // console.log(updatedRol);
            const { id } = req.params;
            const conn = yield database_1.connect();
            // await conn.query('UPDATE user set ? WHERE idUser = ?', [updatedUser, updatedUser.idUser]);
            const sql = conn.format('UPDATE solicitud set ? WHERE idSolicitudes = ?', [updatedSolicitud, id]);
            // console.log(sql);
            yield conn.query(sql);
            res.json({
                message: 'Solicitud ' + id + ' updated'
            });
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.updateSolicitud = updateSolicitud;
function deleteSolicitud(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(req.params);
            const { id } = req.params;
            console.log(id);
            const conn = yield database_1.connect();
            const sql = 'DELETE FROM solicitud WHERE idSolicitudes = ' + [id];
            console.log(sql);
            yield conn.query(sql, function (err, result) {
                if (err)
                    throw err;
                if (result.affectedRows > 0) {
                    res.send({ 'message': 'Solicitud ' + id + ' deleted ' });
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
exports.deleteSolicitud = deleteSolicitud;
//# sourceMappingURL=solicitud.controller.js.map