import { Router } from 'express'
import {
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser,
    signIn
} from '../controllers/user.controller'

const router = Router();

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:idUser')
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser);

    router.route('/signIn')
    .post(signIn);
    
    export default router;