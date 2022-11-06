import express from 'express';
import 'express-async-errors';
import routes from './routes/router';
import httpErrorMiddleware from './middlewares/http.error.middleware';

const app = express();

app.use(express.json());

app.use(routes);

app.use(httpErrorMiddleware);

export default app;
