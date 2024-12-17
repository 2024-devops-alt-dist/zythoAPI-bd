// app.ts
import express, { Application } from "express";
import { usersController } from "./controllers/users";
import { beersController } from "./controllers/beers";

const app: Application = express();

// test route
app.get("/", (req, res) => {
	res.send("Hello Server!");
});

// user route test
app.get("/users", usersController.get);

// beers routes
app.get("/beers", beersController.getAll);
app.get("/beers/:id", beersController.getDetails);
// app.delete("/beers/:id", beersController.deleteOne)

export default app;
