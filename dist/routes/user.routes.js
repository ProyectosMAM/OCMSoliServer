"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { TokenValidation } = require('../libs/verifyToken');
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.Router();
router.route('/')
    .get(TokenValidation, user_controller_1.getUsers)
    .post(user_controller_1.createUser)
    .put(TokenValidation, user_controller_1.updateUser);
// Las rutas que no tiene parametros :idUser deben ir antes.
// En Insomnia =>  auth-token   el token sin comillas.
router.get('/profile', TokenValidation, user_controller_1.profile);
router.route('/:idUser')
    .get(TokenValidation, user_controller_1.getUser)
    .delete(TokenValidation, user_controller_1.deleteUser);
router.route('/signIn')
    .post(user_controller_1.signIn);
// router.route('/update/:user')
// .put(updateUser);
router.route('/email/:email/:idUser')
    .get(TokenValidation, user_controller_1.getUserEmail);
router.route('/userName/:userName/:idUser')
    .get(TokenValidation, user_controller_1.getUserName);
exports.default = router;
//# sourceMappingURL=user.routes.js.map