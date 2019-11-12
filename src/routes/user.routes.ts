import { Router } from 'express'
const { TokenValidation } = require('../libs/verifyToken');

import {
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser,
    signIn,
    profile,
    getUserEmail,
    getUserName
} from '../controllers/user.controller'

const router = Router();

router.route('/')
    .get(TokenValidation, getUsers)
    .post(createUser)
    .put(TokenValidation, updateUser);

// Las rutas que no tiene parametros :idUser deben ir antes.
// En Insomnia =>  auth-token   el token sin comillas.
router.get('/profile', TokenValidation, profile);

router.route('/:idUser')
    .get(TokenValidation, getUser)
    .delete(TokenValidation,deleteUser);


router.route('/signIn')
    .post(signIn);

    // router.route('/update/:user')
    // .put(updateUser);

router.route('/email/:email/:idUser')
    .get(TokenValidation, getUserEmail);

router.route('/userName/:userName/:idUser')
    .get(TokenValidation, getUserName);
    
export default router;