import express from 'express';

import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger.json';

import loginRouter from './login.routes';
import userRouter from './user.routes';
import orderRouter from './order.routes';
import productRouter from './product.routes';

const routers = express.Router();

routers.use('/login', loginRouter);
routers.use('/users', userRouter);
routers.use('/orders', orderRouter);
routers.use('/products', productRouter);
routers.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default routers;
