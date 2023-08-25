import express from "express";
import OrderController from "../controllers/OrderController";
import { protect } from "../middleware/protection";
import validateRequest from "../middleware/protection/validateRequest";
import { orderSchema } from "../validators/orderValidator";
const router = express.Router();

router.use(protect);
router.post(
  "/create",
  validateRequest(orderSchema),
  OrderController.createOrder
);
export default router;
