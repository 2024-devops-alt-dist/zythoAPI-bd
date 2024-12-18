import { Router } from "express";
import { beersController } from "../controllers/beersController";

const router = Router();

router.get("/", beersController.getAll);
router.get("/:id", beersController.getDetails);
router.post("/", beersController.createBeer);
// router.put("/:id", beersController.update)
// router.delete("/:id", beersController.delete)

export default router;
