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
// DB
const database_1 = require("../database");
const table = 'delegacion';
const ID = 'idDelegacion';
function getDelegaciones(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield database_1.connect();
            const rolsSelected = yield conn.query(`SELECT * FROM ${table}`);
            return res.json(rolsSelected[0]);
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.getDelegaciones = getDelegaciones;
function getDelegacion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const conn = yield database_1.connect();
            const userRolSelected = yield conn.query(`SELECT * FROM ${table} WHERE ${ID} = ${id}`);
            res.json(userRolSelected[0]);
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.getDelegacion = getDelegacion;
function createDelegacion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newDelegacion = req.body;
            const conn = yield database_1.connect();
            yield conn.query(`INSERT INTO ${table} SET ?`, [newDelegacion]);
            // await conn.pool.query('INSERT INTO userRol SET ?', [newUserRol]);
            // Connection is automatically released once query resolves
            res.json('Delegacion creada');
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.createDelegacion = createDelegacion;
function updateDelegacion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedDelegacion = req.body;
            const { id } = req.params;
            const conn = yield database_1.connect();
            const sql = conn.format(`UPDATE ${table} set ? WHERE ${ID} = ${id}`, [updatedDelegacion]);
            console.log(sql);
            yield conn.query(sql);
            res.json({
                message: 'Delegacion ' + id + ' updated'
            });
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.updateDelegacion = updateDelegacion;
function deleteDelegacion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const conn = yield database_1.connect();
            const sql = `DELETE FROM ${table} WHERE ${ID} = ${id}`;
            // console.log(sql1);
            yield conn.query(sql, function (err, result) {
                if (err)
                    throw err;
                if (result.affectedRows > 0) {
                    res.send({ 'message': `${table} ${id} deleted ` });
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
exports.deleteDelegacion = deleteDelegacion;
//# sourceMappingURL=delegacion.controller.js.map