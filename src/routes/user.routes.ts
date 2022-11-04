import { Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

const userController = new UserController();

router.post('/users', userController.create.bind(userController));
router.post('/login', userController.login.bind(userController));

export default router;
