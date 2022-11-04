import { Router } from 'express';
import { OrderController } from '../controllers';

const router = Router();

const orderController = new OrderController();

router.get('/orders', orderController.getAll.bind(orderController));

export default router;
