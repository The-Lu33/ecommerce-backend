import { Router } from "express";
import {
  allProduct,
  createProduct,
} from "../controllers/prodcuct.controller.js";
const router = Router();

/**
 * @openapi
 * /api/product/create:
 *   post:
 *     sumary: Created a new product in the app
 *     tags: [Products]
 *     requestBody:
 *       description: requiered fields to create a new product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/created'
 *     responses:
 *       201:
 *         description: Created product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product created
 *       400:
 *         description: Created product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 * /api/product/all:
 *   get:
 *     sumary: all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: all products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/products'
 */

router.post("/create", createProduct);
router.get("/all", allProduct);

export default router;
