import { Router } from "express";
import { beersController } from "../controllers/beersController";

const router = Router();

router.get("/", beersController.getAllBeers);
router.get("/:id", beersController.getOneBeer);
router.post("/", beersController.createBeer);
router.put("/:id", beersController.updateBeer);
router.delete("/:id", beersController.deleteBeer);

export default router;
