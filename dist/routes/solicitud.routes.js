"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { TokenValidation } = require('../libs/verifyToken');
const solicitud_controller_1 = require("../controllers/solicitud.controller");
const router = express_1.Router();
router.route('/')
    .get(solicitud_controller_1.getSolicitudes)
    .post(solicitud_controller_1.createSolicitud);
router.route('/:id')
    .get(solicitud_controller_1.getSolicitud)
    .delete(solicitud_controller_1.deleteSolicitud)
    .put(solicitud_controller_1.updateSolicitud);
exports.default = router;
//# sourceMappingURL=solicitud.routes.js.map