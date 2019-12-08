import { Router } from 'express'
const { TokenValidation } = require('../libs/verifyToken');

import {
    getUserRols,
    createUserRol,
    getUserRol,
    deleteUserRol,
    updateUserRol,
    getUserRoles
   } from '../controllers/userRol.controller'

const router = Router();

router.route('/')
    .get(getUserRols)
    .post(createUserRol)
  
router.route('/:idUserRol')
    .get(getUserRol)
    .delete(deleteUserRol)
    .put(updateUserRol)

router.route('/user/:user_idUser')
    .get(getUserRoles)
export default router;