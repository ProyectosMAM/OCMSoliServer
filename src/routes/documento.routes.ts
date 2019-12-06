import { Router } from 'express'
const { TokenValidation } = require('../libs/verifyToken');

import {
    getAll,
    getAllFase,
    create,
    get,
    deleter,
    update,
   } from '../controllers/documento.controller'

const router = Router();

router.route('/')
    .get(getAll)
    .post(create)
  
router.route('/:id')
    .get(get)
    .delete(deleter)
    .put(update)

    router.route('/:idSolicitud/:fase')
    .get(getAllFase)
  
export default router;