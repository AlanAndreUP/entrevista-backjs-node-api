import { Router } from 'express';
import { createCustomerController, getCustomersController } from '../controllers/client.controller';
const router = Router();

router.post('/customers', createCustomerController);
router.get('/customers', getCustomersController);

export default router;
