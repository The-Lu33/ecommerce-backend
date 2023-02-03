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
 *     tags: [products]
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
 *     tags: [products]
 *     requestBody:
 *       description: view all products of the app
 *       require: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/created'
 *     responses:
 *       200:
 *         descroption: all products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                 type: string
 *                 example: example
 */

router.post("/create", createProduct);
router.get("/all", allProduct);

export default router;
