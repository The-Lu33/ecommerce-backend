import { Router } from "express";
import { getProducts, payment } from "../controllers/order.controller.js";

const router = Router();

router.get("/:id/all", getProducts);
router.post("/payment", payment)
export default router;
