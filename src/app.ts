import express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';
import orderRoutes from './routes/order.routes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

app.use(httpErrorMiddleware);

export default app;
