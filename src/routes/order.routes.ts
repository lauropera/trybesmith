import { Router } from 'express';
import { OrderController } from '../controllers';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll.bind(orderController));
router.post('/', authMiddleware, orderController.create.bind(orderController));

export default router;
