// app.ts
import express, { Application } from "express";
import { usersController } from "./controllers/users";

const app: Application = express();

// test route
app.get("/", (req, res) => {
	res.send("Hello Server!");
});

// user route
app.get("/users", usersController.get);

export default app;
