import { Request, Response } from "express";
import { pool } from "../db/config";

export const beersController = {
	getAll: async (req: Request, res: Response) => {
		try {
			const result = await pool.query("SELECT * FROM beers");
			res.status(200).json({ beers: result.rows });
		} catch (error) {
			console.error("Error retrieving beers", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},
	getDetails: async (req: Request, res: Response): Promise<void> => {
		const { id } = req.params;
		try {
			const result = await pool.query(
				"SELECT * FROM beers WHERE id = $1",
				[id]
			);
			if (result.rows.length === 0) {
				res.status(404).json({ message: "Beer not found" });
			}
			res.status(200).json({
				beer: result.rows[0],
			});
		} catch (error) {
			console.error("Error retrieving beer details", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},
	createBeer: async (req: Request, res: Response): Promise<void> => {
		const { name, description, abv, brewery_id, category_id } =
			req.body;

		// Validate required fields
		if (
			!name ||
			!description ||
			!abv ||
			!brewery_id ||
			!category_id
		) {
			res.status(400).json({
				error:
					"Missing required fields. Please provide name, description, abv, brewery_id, and category_id",
			});
			return;
		}

		try {
			const result = await pool.query(
				`INSERT INTO beers (name, description, abv, brewery_id, category_id) 
				 VALUES ($1, $2, $3, $4, $5) 
				 RETURNING *`,
				[name, description, abv, brewery_id, category_id]
			);

			res.status(201).json({
				message: "Beer created successfully",
				beer: result.rows[0],
			});
		} catch (error) {
			console.error("Error creating beer", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},
};
