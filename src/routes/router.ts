import { Router } from 'express';
import productRouter from './product.routes';
import userRouter from './user.routes';
import orderRouter from './order.routes';

const routers = Router();

routers.use(userRouter);
routers.use('/products', productRouter);
routers.use('/orders', orderRouter);

export default routers;
