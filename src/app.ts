// app.ts
import express, { Application } from "express";
import { usersController } from "./controllers/users";
import beersRoutes from "./routes/beersRoutes";
import breweriesRoutes from "./routes/breweriesRoutes";
import swaggerUi from 'swagger-ui-express';
import { specs } from './swagger/swagger';

const app: Application = express();

// Middleware
app.use(express.json());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// test route
app.get("/", (req, res) => {
    res.send("Hello Server!");
});

// user route test
app.get("/users", usersController.get);

// beers routes
app.use("/beers", beersRoutes);

// breweries routes
app.use("/breweries", breweriesRoutes);

export default app;
