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
const table = 'documento';
const ID = 'idDocumento';
function getAll(req, res) {
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
exports.getAll = getAll;
function getAllFase(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // console.log(req);
            const { idSolicitud } = req.params;
            const { fase } = req.params;
            const conn = yield database_1.connect();
            const rolsSelected = yield conn.query(`SELECT * FROM ${table} WHERE idSolicitudes = ${idSolicitud} and fase = ${fase} `);
            console.log(conn.query);
            return res.json(rolsSelected[0]);
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.getAllFase = getAllFase;
function get(req, res) {
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
exports.get = get;
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newRow = req.body;
            const conn = yield database_1.connect();
            yield conn.query(`INSERT INTO ${table} SET ?`, [newRow]);
            res.json('Creada');
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.create = create;
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedRow = req.body;
            const { id } = req.params;
            const conn = yield database_1.connect();
            const sql = conn.format(`UPDATE ${table} set ? WHERE ${ID} = ${id}`, [updatedRow]);
            console.log(sql);
            yield conn.query(sql);
            res.json({
                message: '' + id + ' updated'
            });
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.update = update;
function deleter(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const conn = yield database_1.connect();
            const sql = `DELETE FROM ${table} WHERE ${ID} = ${id}`;
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
exports.deleter = deleter;
//# sourceMappingURL=documento.controller.js.map