import { Router } from "express";
import { getProducts, payment } from "../controllers/order.controller.js";

const router = Router();
/**
 * @openapi
 * /api/order/{id}/all:
 *   get:
 *     sumary: view all orders
 *     tags: [order]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           minimun: 1
 *         description: user id
 *     responses:
 *       200:
 *         description: all product
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: ok
 *                data:
 *                  type: array
 *                  items: 
 *                    $ref: '#/components/schemas/orders'
 * /api/order/payment:
 *   post:
 *     sumary: payment order
 *     tags: [order]
 *     requestBody:
 *       description: required statusPay and orderID
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/payment'
 *     responses:
 *       200:
 *        description: payment succes
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: pay
 */
router.get("/:id/all", getProducts);
router.post("/payment", payment)
export default router;
