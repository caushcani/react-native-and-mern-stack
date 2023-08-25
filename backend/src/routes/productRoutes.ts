import express from "express";
import ProductController from "../controllers/ProductController";
import { protect } from "../middleware/protection";
import validateRequest from "../middleware/protection/validateRequest";
import { productSchema, getAllSchema} from "../validators/productValidator";
const router = express.Router();

router.use(protect);
router.post(
  "/create",
  validateRequest(productSchema),
  ProductController.createProduct
);
router.post("/get-all", validateRequest(getAllSchema), ProductController.getAllProducts);
export default router;
