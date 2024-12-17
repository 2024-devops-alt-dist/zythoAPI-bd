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
};
