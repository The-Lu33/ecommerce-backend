import { Router } from "express";
import { addProduct, carProducts, carPurchase } from "../controllers/cart.controller.js";

const router = Router();
/**
 * @openapi
 * /api/car/add:
 *   post:
 *     sumary: add product in car
 *     tags: [Car]
 *     requestBody:
 *       descrption: required product_id, cart_id, quatity
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addproduct'
 *     responses:
 *       200:
 *         description: add product in to car
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: add product
 * /api/car/{id}/products:
 *   get:
 *     sumary: all product in car
 *     tags: [Car]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/products'
 * /api/car/order/{id}:
 *   post:
 *     sumary: created new oreder
 *     tags: [Car]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user id
 *     responses:
 *       201:
 *         description: new oreder succes
 *         content:
 *         application/json:
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               example: 1
 *             status:
 *               type: string
 *               example: pending
 *             user_id:
 *               type: integer
 *               example: 1
 *             total_price:
 *               type: integer
 *               example: 800
 */


router.post('/add', addProduct)
router.get('/:id/products', carProducts)
router.post('/order/:id', carPurchase)

export default router;
