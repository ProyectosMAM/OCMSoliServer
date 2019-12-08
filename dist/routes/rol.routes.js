"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { TokenValidation } = require('../libs/verifyToken');
const rol_controller_1 = require("../controllers/rol.controller");
const router = express_1.Router();
router.route('/')
    .get(rol_controller_1.getRols)
    .post(rol_controller_1.createRol);
// Las rutas que no tiene parametros :idRol deben ir antes.
// En Insomnia =>  auth-token   el token sin comillas.
router.route('/:idRol')
    .get(rol_controller_1.getRol)
    .delete(rol_controller_1.deleteRol)
    .put(rol_controller_1.updateRol);
router.route('/:fromRow/:toRow')
    .get(rol_controller_1.getRolsFromTo);
exports.default = router;
//# sourceMappingURL=rol.routes.js.map