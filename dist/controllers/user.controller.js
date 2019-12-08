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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const helpers = require('../libs/helpers');
// Controlar errores.
// https://www.codementor.io/zellliew/handling-errors-in-express-10oun71c6l?utm_swu=7100
// DB
const database_1 = require("../database");
// Interfaces
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield database_1.connect();
            const usersSelected = yield conn.query('SELECT * FROM user');
            // console.log(usersSelected[0]);
            return res.json(usersSelected[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getUsers = getUsers;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log('Function getUser');
        try {
            const idUser = req.params.idUser;
            // console.log('Function getUser');
            // console.log(req.params);
            const conn = yield database_1.connect();
            const userSelected = yield conn.query('SELECT * FROM user WHERE idUser = ?', [idUser]);
            console.log(userSelected[0]);
            res.json(userSelected[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getUser = getUser;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = req.body;
            console.log(newUser);
            newUser.password = yield helpers.encryptPassword(newUser.password);
            const conn = yield database_1.connect();
            yield conn.query('INSERT INTO user SET ?', [newUser]);
            res.json('user creado');
        }
        catch (e) {
            if (e.message.includes('email')) {
                res.json('El email ya existe');
            }
            if (e.message.includes('userName')) {
                res.json('El nombre de usuario ya existe');
            }
            else {
                console.log(e);
                res.json(e);
            }
        }
    });
}
exports.createUser = createUser;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // console.log(req.params);
            const updatedUser = req.body;
            // console.log(updatedUser);
            const conn = yield database_1.connect();
            // await conn.query('UPDATE user set ? WHERE idUser = ?', [updatedUser, updatedUser.idUser]);
            const sql = conn.format('UPDATE user set ? WHERE idUser = ?', [updatedUser, updatedUser.idUser]);
            // console.log(sql);
            yield conn.query(sql);
            res.json({
                message: 'User ' + updatedUser.idUser + ' updated'
            });
        }
        catch (e) {
            console.log('error encontrado');
            console.log(e);
            res.json({ e });
        }
    });
}
exports.updateUser = updateUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Uso de Asignación por destructuring.
            // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
            const { idUser } = req.params;
            // console.log(req.params.idUser);
            // console.log(req.params);
            console.log(idUser);
            const conn = yield database_1.connect();
            const sql = 'DELETE FROM user WHERE idUser = ' + [idUser];
            yield conn.query(sql, function (err, result) {
                if (err)
                    throw err;
                // console.log(result.affectedRows + " record(s) affected");
                if (result.affectedRows > 0) {
                    // console.log(" record(s) deleted");
                    // res.json es lo que mostrara como respuesta Postman o Insomnia.
                    // La respuesta se puede enviar como json.
                    // Pero solo de una forma u otra.
                    res.send({ 'message': 'User ' + idUser + ' deleted ' });
                    //    res.json({
                    //        message: 'User ' + idUser + ' deleted '
                    //    });
                }
                else {
                    //    res.json({
                    //        message: '¡No hay registro para borrar! '
                    //    });
                    // res.send('¡No hay registro para borrar!');
                    res.status(500).json(err);
                    // console.log("No hay registro que borrar");
                }
                res.end();
            });
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.deleteUser = deleteUser;
function signIn(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const rows = yield conn.query("SELECT * FROM user WHERE userName =? ", [req.body.userName]);
        // rows[] trae mucha información, selecciono unicamente rows[0] que son los datos de user.
        const row = rows[0];
        if (row != '') {
            const user = rows[0];
            const validatePass = yield helpers.matchPassword(req.body.password, user[0].password);
            if (validatePass) {
                var tokenData = {
                    username: req.body.userName
                };
                const token = jsonwebtoken_1.default.sign(tokenData, process.env.TOKEN_SECRET || 'siNoExisteEnv', {
                    expiresIn: 60 * 60 * 24
                });
                console.log(row);
                res.send({ 'token': token, 'idUser': row[0].idUser });
            }
            else {
                return res.json('password incorrecto');
            }
        }
        else {
            return res.json('usuario incorrecto');
        }
    });
}
exports.signIn = signIn;
exports.profile = (req, res) => {
    res.send({ profile: 'profile' });
};
function getUserEmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const email = req.params.email;
            const idUser = req.params.idUser;
            const conn = yield database_1.connect();
            const userSelected = yield conn.query('SELECT * FROM user WHERE email = ? and idUser <> ?', [email, idUser]);
            // console.log(userSelected[0]);
            res.json(userSelected[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getUserEmail = getUserEmail;
function getUserName(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(req.params);
            const userName = req.params.userName;
            const idUser = req.params.idUser;
            const conn = yield database_1.connect();
            console.log(`SELECT * FROM user WHERE userName = ${userName} and idUser <> ${idUser}`);
            const userSelected = yield conn.query('SELECT * FROM user WHERE userName = ? and idUser <> ?', [userName, idUser]);
            console.log(userSelected[0]);
            res.json(userSelected[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getUserName = getUserName;
//# sourceMappingURL=user.controller.js.map