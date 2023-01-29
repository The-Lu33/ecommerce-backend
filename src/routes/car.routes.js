import { Router } from "express";
import { addProduct } from "../controllers/cart.controller.js";

const router = Router();

router.post('/add', addProduct)


export default router;
