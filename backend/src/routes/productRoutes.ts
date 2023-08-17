import express from 'express'
import ProductController from '../controllers/ProductController';
import { protect } from '../middleware/protection';
const router = express.Router();

router.use(protect);
router.post('/create', ProductController.createProduct);
router.post('/get-all', ProductController.getAllProducts);
export default router