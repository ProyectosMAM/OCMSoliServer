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
function getUserRols(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield database_1.connect();
            const rolsSelected = yield conn.query('SELECT * FROM userRol');
            return res.json(rolsSelected[0]);
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.getUserRols = getUserRols;
function getUserRol(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { idUserRol } = req.params;
            const conn = yield database_1.connect();
            const userRolSelected = yield conn.query('SELECT * FROM userRol WHERE idUserRol = ?', [idUserRol]);
            res.json(userRolSelected[0]);
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.getUserRol = getUserRol;
function getUserRoles(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { user_idUser } = req.params;
            const conn = yield database_1.connect();
            const userRolSelected = yield conn.query('SELECT r.descripcion FROM userRol ur, rol r  WHERE ur.rol_idRol = r.idRol AND ur.user_idUser = ?', [user_idUser]);
            res.json(userRolSelected[0]);
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.getUserRoles = getUserRoles;
function createUserRol(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUserRol = req.body;
            const conn = yield database_1.connect();
            yield conn.query('INSERT INTO userRol SET ?', [newUserRol]);
            // await conn.pool.query('INSERT INTO userRol SET ?', [newUserRol]);
            // Connection is automatically released once query resolves
            res.json('rol creado');
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.createUserRol = createUserRol;
function updateUserRol(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedUserRol = req.body;
            const { idUserRol } = req.params;
            const conn = yield database_1.connect();
            const sql = conn.format('UPDATE userRol set ? WHERE idUserRol = ?', [updatedUserRol, idUserRol]);
            yield conn.query(sql);
            res.json({
                message: 'Rol ' + idUserRol + ' updated'
            });
        }
        catch (error) {
            console.log(error);
            res.json(error);
        }
    });
}
exports.updateUserRol = updateUserRol;
function deleteUserRol(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { idUserRol } = req.params;
            console.log(idUserRol);
            const conn = yield database_1.connect();
            const sql = 'DELETE FROM userRol WHERE idUserRol = ' + [idUserRol];
            yield conn.query(sql, function (err, result) {
                if (err)
                    throw err;
                if (result.affectedRows > 0) {
                    res.send({ 'message': 'Rol ' + idUserRol + ' deleted ' });
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
exports.deleteUserRol = deleteUserRol;
//# sourceMappingURL=userRol.controller.js.map