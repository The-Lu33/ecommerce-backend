import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";

const router = Router();

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     sumary: created a new user into app
 *     tags: [Auth]
 *     requestBody:
 *       decription: requiered fields to create a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user created
 *       400:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 * /api/auth/login:
 *   post:
 *     sumary: login of user
 *     tags: [Auth]
 *     requestBody:
 *       decription: login of user in app
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'
 *     responses:
 *       200:
 *         description: login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user login
 *       400:
 *         description: invalid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: credential invalid
 */
router.post("/register", register);
router.post('/login', login)
export default router;
