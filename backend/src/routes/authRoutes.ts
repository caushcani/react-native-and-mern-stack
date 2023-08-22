import express from 'express'
import UserController from '../controllers/UserController';
const router = express.Router();

router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.post('/refresh-token', UserController.refreshToken)

export default router