import express from 'express'
import ProductController from '../controllers/ProductController';
const router = express.Router();

router.post('/create', ProductController.createProduct);
router.get('/get-all', ProductController.getAllProducts);
export default router