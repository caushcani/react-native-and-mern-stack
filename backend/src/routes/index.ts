import express from 'express';
import authRoutes from './authRoutes'
import productRoutes from './productRoutes';
import orderRoutes from './orderRoutes';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/orders', orderRoutes)
export default router;