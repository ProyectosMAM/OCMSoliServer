"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { TokenValidation } = require('../libs/verifyToken');
const delegacion_controller_1 = require("../controllers/delegacion.controller");
const router = express_1.Router();
router.route('/')
    .get(delegacion_controller_1.getDelegaciones)
    .post(delegacion_controller_1.createDelegacion);
router.route('/:id')
    .get(delegacion_controller_1.getDelegacion)
    .delete(delegacion_controller_1.deleteDelegacion)
    .put(delegacion_controller_1.updateDelegacion);
exports.default = router;
//# sourceMappingURL=delegacion.routes.js.map