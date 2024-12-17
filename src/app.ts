// app.ts
import express, { Application } from "express";
import { usersController } from "./controllers/users";
// import { beersController } from "./controllers/beersController"; // moved to routes
import beersRoutes from "./routes/beersRoutes";

const app: Application = express();

// Middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
	res.send("Hello Server!");
});

// user route test
app.get("/users", usersController.get);

// beers routes
// app.get("/beers", beersController.getAll);
// app.get("/beers/:id", beersController.getDetails);
app.use("/beers", beersRoutes);

export default app;
