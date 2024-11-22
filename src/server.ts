// server.ts
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { pool } from "./db/config";

const PORT = 3000;

app.get("/test", (req, res) => {
	res.send("Hello server from test route");
});

const testDBConnection = async () => {
	try {
		await pool.connect();
		console.log("Database connection successful!");
	} catch (err) {
		// Narrow down the type of the error to ensure proper error handling
		if (err instanceof Error) {
			console.error("Database connection failed:", err.message);
		} else {
			console.error(
				"An unknown error occurred during database connection."
			);
		}
	}
};

app.listen(PORT, async () => {
	console.log(`Server is running on http://localhost:${PORT}`);
	await testDBConnection();
});
