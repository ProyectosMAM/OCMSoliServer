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
const promise_1 = require("mysql2/promise");
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield promise_1.createPool({
                host: process.env['HOST'],
                user: process.env['USER'],
                password: process.env['PASSWORD'],
                database: process.env['DATABASE'],
                connectionLimit: 10
            });
            return connection;
        }
        catch (error) {
            if (error.code === 'PROTOCOL_CONNECTION_LOST') {
                console.error('Database connection was closed.');
            }
            if (error.code === 'ER_CON_COUNT_ERROR') {
                console.error('Database has to many connections');
            }
            if (error.code === 'ECONNREFUSED') {
                console.error('Database connection was refused');
            }
        }
    });
}
exports.connect = connect;
//# sourceMappingURL=database.js.map