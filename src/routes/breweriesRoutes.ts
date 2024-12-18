import { Router } from "express";
import { breweriesController } from "../controllers/breweriesController";

const router = Router();

/**
 * @swagger
 * /breweries:
 *   get:
 *     summary: Get all breweries
 *     tags: [Breweries]
 *     responses:
 *       200:
 *         description: List of all breweries
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 breweries:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Brewery'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/", breweriesController.getAllBreweries);

/**
 * @swagger
 * /breweries/{id}:
 *   get:
 *     summary: Get a brewery by ID
 *     tags: [Breweries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The brewery ID
 *     responses:
 *       200:
 *         description: Brewery details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 brewery:
 *                   $ref: '#/components/schemas/Brewery'
 *       404:
 *         description: Brewery not found
 *       500:
 *         description: Server error
 */
router.get("/:id", breweriesController.getOneBrewery);

/**
 * @swagger
 * /breweries:
 *   post:
 *     summary: Create a new brewery
 *     tags: [Breweries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - country
 *             properties:
 *               name:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       201:
 *         description: Brewery created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 brewery:
 *                   $ref: '#/components/schemas/Brewery'
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */
router.post("/", breweriesController.createBrewery);

/**
 * @swagger
 * /breweries/{id}:
 *   put:
 *     summary: Update a brewery
 *     tags: [Breweries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The brewery ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       200:
 *         description: Brewery updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 brewery:
 *                   $ref: '#/components/schemas/Brewery'
 *       404:
 *         description: Brewery not found
 *       500:
 *         description: Server error
 */
router.put("/:id", breweriesController.updateBrewery);

/**
 * @swagger
 * /breweries/{id}:
 *   delete:
 *     summary: Delete a brewery
 *     tags: [Breweries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The brewery ID
 *     responses:
 *       200:
 *         description: Brewery deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Cannot delete brewery with associated beers
 *       404:
 *         description: Brewery not found
 *       500:
 *         description: Server error
 */
router.delete("/:id", breweriesController.deleteBrewery);

export default router;
