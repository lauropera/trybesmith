import { Router } from 'express';
import { OrderController } from '../controllers';
import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

const orderController = new OrderController();

router.get('/orders', orderController.getAll.bind(orderController));
router.post(
  '/orders',
  authMiddleware,
  orderController.create.bind(orderController),
);

export default router;
