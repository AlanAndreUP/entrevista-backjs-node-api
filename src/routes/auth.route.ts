import { Router } from 'express';
import { loginController } from '../controllers/auth.controller';

const router = Router();

router.post('/auth', loginController);

export default router;
