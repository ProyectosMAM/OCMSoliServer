import { Router } from 'express'
const { TokenValidation } = require('../libs/verifyToken');

import {
    getAll,
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
  
export default router;