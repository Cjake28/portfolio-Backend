import { Router } from 'express';
import { chat } from '../controller/chatController';

const router = Router();

router.post('/', chat);

export default router;
