
import express from 'express';
import {createUser, login, deleteUser} from '../controller/userController.js'

const router = express.Router();

router.route('/').post(createUser);
router.route('/login').post(login);
// router.route('/logout').post(logout)
router.route('/delete').delete(deleteUser);

export default router;