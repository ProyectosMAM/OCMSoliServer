import { Router } from 'express'
const { TokenValidation } = require('../libs/verifyToken');

import {
    getDelegaciones,
    createDelegacion,
    getDelegacion,
    deleteDelegacion,
    updateDelegacion,
   } from '../controllers/delegacion.controller'

const router = Router();

router.route('/')
    .get(getDelegaciones)
    .post(createDelegacion)
  
router.route('/:id')
    .get(getDelegacion)
    .delete(deleteDelegacion)
    .put(updateDelegacion)
  
export default router;