import { Router } from "express";
import { breweriesController } from "../controllers/breweriesController";

const router = Router();

router.get("/", breweriesController.getAllBreweries);
router.get("/:id", breweriesController.getOneBrewery);
router.post("/", breweriesController.createBrewery);
router.put("/:id", breweriesController.updateBrewery);
router.delete("/:id", breweriesController.deleteBrewery);

export default router;
