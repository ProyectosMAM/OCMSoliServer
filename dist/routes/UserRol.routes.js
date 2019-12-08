"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { TokenValidation } = require('../libs/verifyToken');
const userRol_controller_1 = require("../controllers/userRol.controller");
const router = express_1.Router();
router.route('/')
    .get(userRol_controller_1.getUserRols)
    .post(userRol_controller_1.createUserRol);
router.route('/:idUserRol')
    .get(userRol_controller_1.getUserRol)
    .delete(userRol_controller_1.deleteUserRol)
    .put(userRol_controller_1.updateUserRol);
router.route('/user/:user_idUser')
    .get(userRol_controller_1.getUserRoles);
exports.default = router;
//# sourceMappingURL=userRol.routes.js.map