// #TODO check if user controller working - yes continue others like that
// controllers/users.ts
import { Request, Response } from "express";
import { pool } from "../db/config";

export const usersController = {
	get: async (req: Request, res: Response) => {
		try {
			console.log("Attempting to retrieve users from the database");
			const result = await pool.query("SELECT * FROM users");
			res.status(200).json({ users: result.rows });
		} catch (error) {
			console.log("Attempting to retrieve users from the database");
			console.error("Error retrieving users", error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},
};