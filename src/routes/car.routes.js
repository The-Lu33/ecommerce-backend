import { Router } from "express";
import { addProduct, carProducts, carPurchase } from "../controllers/cart.controller.js";

const router = Router();

router.post('/add', addProduct)
router.get('/:id/products', carProducts)
router.post('/order/:id', carPurchase)

export default router;
