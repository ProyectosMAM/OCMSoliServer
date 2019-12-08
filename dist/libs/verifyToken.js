"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.TokenValidation = (req, res, next) => {
    let token = req.headers['authorization'];
    console.log(token);
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }
    if (!token)
        return res.status(401).json('Access denied, No existe el token');
    const payload = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET || 'siNoHayEnv');
    console.log(payload);
    //   req.userId = payload._id;
    // continua con la siguiente ruta.  
    next();
};
//# sourceMappingURL=verifyToken.js.map