import { Router } from 'express'
const { TokenValidation } = require('../libs/verifyToken');

import {
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser,
    signIn,
    profile
} from '../controllers/user.controller'

const router = Router();

router.route('/')
    .get(getUsers)
    .post(createUser);

// las rutas que no tiene parametros :idUser deben ir antes.
router.get('/profile', TokenValidation, profile);


router.route('/:idUser')
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser);

router.route('/signIn')
    .post(signIn);

export default router;