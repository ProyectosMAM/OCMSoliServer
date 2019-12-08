"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { TokenValidation } = require('../libs/verifyToken');
const documento_controller_1 = require("../controllers/documento.controller");
const router = express_1.Router();
router.route('/')
    .get(documento_controller_1.getAll)
    .post(documento_controller_1.create);
router.route('/:id')
    .get(documento_controller_1.get)
    .delete(documento_controller_1.deleter)
    .put(documento_controller_1.update);
router.route('/:idSolicitud/:fase')
    .get(documento_controller_1.getAllFase);
exports.default = router;
//# sourceMappingURL=documento.routes.js.map