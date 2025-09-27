import { Router } from "express";
import { getRecetas, createReceta, getReceta, updateReceta, deleteReceta } from "../controllers/recetaController.js";

const router = Router();

router.get("/", getRecetas);
router.post("/", createReceta);
router.get("/:id", getReceta);
router.put("/:id", updateReceta);
router.delete("/:id", deleteReceta);

export default router;
