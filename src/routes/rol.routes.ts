import { Router } from 'express'
const { TokenValidation } = require('../libs/verifyToken');

import {
    getRols,
    getRolsFromTo,
    createRol,
    getRol,
    deleteRol,
    updateRol,
   } from '../controllers/rol.controller'

const router = Router();

router.route('/')
    .get(getRols)
    .post(createRol)
   

// Las rutas que no tiene parametros :idRol deben ir antes.
// En Insomnia =>  auth-token   el token sin comillas.

router.route('/:idRol')
    .get(getRol)
    .delete(deleteRol)
    .put(updateRol)

router.route('/:fromRow/:toRow')
    .get(getRolsFromTo)
    
export default router;