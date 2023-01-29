import { Router } from "express";
import {
  allProduct,
  createProduct,
} from "../controllers/prodcuct.controller.js";
const router = Router();

router.get("/all", allProduct);
router.post("/create", createProduct);

export default router;
