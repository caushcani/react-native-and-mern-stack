import express from 'express'
import OrderController from '../controllers/OrderController';
import { protect } from '../middleware/protection';
const router = express.Router();

router.use(protect);
router.post('/create', OrderController.createOrder);
export default router