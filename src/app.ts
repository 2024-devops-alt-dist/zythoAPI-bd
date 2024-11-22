// app.ts
import express, { Application } from "express";

const app: Application = express();

// test route
app.get("/", (req, res) => {
	res.send("Hello Server!");
});

export default app;
