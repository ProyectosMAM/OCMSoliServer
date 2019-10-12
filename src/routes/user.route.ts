import { Router } from 'express'
import { getUsers, createUser, getUser, deleteUser, updateUser, signIn } from '../controllers/user.controller'

const router = Router();

router.route('/')
    .get(getUsers)
    .post(createUser);
    // .post(signIn);

router.route('/:UserId')
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser);

export default router;