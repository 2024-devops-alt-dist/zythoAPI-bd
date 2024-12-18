import { Request, Response } from "express";
import { pool } from "../db/config";

export const breweriesController = {
    getAllBreweries: async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await pool.query("SELECT * FROM breweries");
            res.status(200).json({ breweries: result.rows });
        } catch (error) {
            console.error("Error retrieving breweries", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    getOneBrewery: async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        try {
            const result = await pool.query(
                "SELECT * FROM breweries WHERE id = $1",
                [id]
            );
            if (result.rows.length === 0) {
                res.status(404).json({ message: "Brewery not found" });
                return;
            }
            res.status(200).json({
                brewery: result.rows[0],
            });
        } catch (error) {
            console.error("Error retrieving brewery details", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    createBrewery: async (req: Request, res: Response): Promise<void> => {
        const { name, country } = req.body;

        // Validate required fields
        if (!name || !country) {
            res.status(400).json({
                error: "Missing required fields. Please provide name and country"
            });
            return;
        }

        try {
            const result = await pool.query(
                `INSERT INTO breweries (name, country) 
                 VALUES ($1, $2) 
                 RETURNING *`,
                [name, country]
            );

            res.status(201).json({
                message: "Brewery created successfully",
                brewery: result.rows[0]
            });
        } catch (error) {
            console.error("Error creating brewery", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    updateBrewery: async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { name, country } = req.body;

        try {
            // Check if brewery exists
            const checkBrewery = await pool.query(
                "SELECT * FROM breweries WHERE id = $1",
                [id]
            );

            if (checkBrewery.rows.length === 0) {
                res.status(404).json({ message: "Brewery not found" });
                return;
            }

            const result = await pool.query(
                `UPDATE breweries 
                SET name = COALESCE($1, name),
                    country = COALESCE($2, country)
                WHERE id = $3
                RETURNING *`,
                [name, country, id]
            );

            res.status(200).json({
                message: "Brewery updated successfully",
                brewery: result.rows[0]
            });
        } catch (error) {
            console.error("Error updating brewery", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    deleteBrewery: async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;

        try {
            // Check if brewery exists
            const checkBrewery = await pool.query(
                "SELECT * FROM breweries WHERE id = $1",
                [id]
            );

            if (checkBrewery.rows.length === 0) {
                res.status(404).json({ message: "Brewery not found" });
                return;
            }

            // Check if brewery has associated beers
            const checkBeers = await pool.query(
                "SELECT * FROM beers WHERE brewery_id = $1",
                [id]
            );

            if (checkBeers.rows.length > 0) {
                res.status(400).json({ 
                    message: "Cannot delete brewery with associated beers. Please delete the beers first." 
                });
                return;
            }

            await pool.query(
                "DELETE FROM breweries WHERE id = $1",
                [id]
            );

            res.status(200).json({
                message: "Brewery deleted successfully"
            });
        } catch (error) {
            console.error("Error deleting brewery", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
};
