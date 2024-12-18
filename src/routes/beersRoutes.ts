import { Router } from "express";
import { beersController } from "../controllers/beersController";

const router = Router();

/**
 * @swagger
 * /beers:
 *   get:
 *     summary: Get all beers
 *     tags: [Beers]
 *     responses:
 *       200:
 *         description: List of all beers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 beers:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Beer'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/", beersController.getAllBeers);

/**
 * @swagger
 * /beers/{id}:
 *   get:
 *     summary: Get a beer by ID
 *     tags: [Beers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The beer ID
 *     responses:
 *       200:
 *         description: Beer details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 beer:
 *                   $ref: '#/components/schemas/Beer'
 *       404:
 *         description: Beer not found
 *       500:
 *         description: Server error
 */
router.get("/:id", beersController.getOneBeer);

/**
 * @swagger
 * /beers:
 *   post:
 *     summary: Create a new beer
 *     tags: [Beers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - abv
 *               - brewery_id
 *               - category_id
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               abv:
 *                 type: number
 *               brewery_id:
 *                 type: integer
 *               category_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Beer created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 beer:
 *                   $ref: '#/components/schemas/Beer'
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */
router.post("/", beersController.createBeer);

/**
 * @swagger
 * /beers/{id}:
 *   put:
 *     summary: Update a beer
 *     tags: [Beers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The beer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               abv:
 *                 type: number
 *               brewery_id:
 *                 type: integer
 *               category_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Beer updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 beer:
 *                   $ref: '#/components/schemas/Beer'
 *       404:
 *         description: Beer not found
 *       500:
 *         description: Server error
 */
router.put("/:id", beersController.updateBeer);

/**
 * @swagger
 * /beers/{id}:
 *   delete:
 *     summary: Delete a beer
 *     tags: [Beers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The beer ID
 *     responses:
 *       200:
 *         description: Beer deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Beer not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", beersController.deleteBeer);

export default router;
