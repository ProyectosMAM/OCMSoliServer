import { Router } from 'express'
const { TokenValidation } = require('../libs/verifyToken');

import {
    getSolicitudes,
    createSolicitud,
    getSolicitud,
    deleteSolicitud,
    updateSolicitud,
   } from '../controllers/solicitud.controller'

const router = Router();

router.route('/')
    .get(getSolicitudes)
    .post(createSolicitud)
  
router.route('/:idSolicitudes')
    .get(getSolicitud)
    .delete(deleteSolicitud)
    .put(updateSolicitud)
  
export default router;