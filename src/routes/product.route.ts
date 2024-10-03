import { Router } from 'express';
import { createProductController, getProductsController } from '../controllers/product.controller';

const router = Router();

router.post('/products', createProductController);
router.get('/products', getProductsController);

export default router;
