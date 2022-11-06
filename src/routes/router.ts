import { Router } from 'express';
import loginRouter from './login.routes';
import userRouter from './user.routes';
import orderRouter from './order.routes';
import productRouter from './product.routes';

const routers = Router();

routers.use('/login', loginRouter);
routers.use('/users', userRouter);
routers.use('/orders', orderRouter);
routers.use('/products', productRouter);

export default routers;
