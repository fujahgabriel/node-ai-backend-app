import { Router } from 'express';
import { handleAIRequest } from '../controllers/aiController';

const router = Router();

router.post('/generate', handleAIRequest);

export default router;
