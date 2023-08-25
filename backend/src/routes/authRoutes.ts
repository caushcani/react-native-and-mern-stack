import express from "express";
import UserController from "../controllers/UserController";
import validateRequest from "../middleware/protection/validateRequest";
import { loginSchema, registerSchema} from "../validators/userValidator";
const router = express.Router();

router.post("/login", validateRequest(loginSchema), UserController.login);
router.post(
  "/register",
  validateRequest(registerSchema),
  UserController.register
);
router.post("/refresh-token", UserController.refreshToken);

export default router;
