import { Router } from "express";
import { getMedicamentos, createMedicamento, getMedicamento, updateMedicamento, deleteMedicamento } from "../controllers/medicamentoController.js";

const router = Router();

router.get("/", getMedicamentos);
router.post("/", createMedicamento);
router.get("/:id", getMedicamento);
router.put("/:id", updateMedicamento);
router.delete("/:id", deleteMedicamento);

export default router;
