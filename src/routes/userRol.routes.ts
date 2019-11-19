import { Router } from 'express'
const { TokenValidation } = require('../libs/verifyToken');

import {
    getUserRols,
    createUserRol,
    getUserRol,
    deleteUserRol,
    updateUserRol,
   } from '../controllers/UserRol.controller'

const router = Router();

router.route('/')
    .get(getUserRols)
    .post(createUserRol)
  
router.route('/:idUserRol')
    .get(getUserRol)
    .delete(deleteUserRol)
    .put(updateUserRol)
  
export default router;