import { Router } from 'express';
import { createSaleController, getSalesController } from '../controllers/sell.Model';

const router = Router();

router.post('/sales', createSaleController);
router.get('/sales', getSalesController);

export default router;
