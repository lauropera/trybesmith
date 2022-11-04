import { Router } from 'express';
import { ProductController } from '../controllers';

const router = Router();

const productController = new ProductController();

router.get('/products', productController.getAll.bind(productController));
router.post('/products', productController.create.bind(productController));

export default router;
