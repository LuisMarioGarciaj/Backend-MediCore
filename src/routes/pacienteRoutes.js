import { Router } from "express";
import { getPacientes, createPaciente, getPaciente, updatePaciente, deletePaciente } from "../controllers/pacienteController.js";

const router = Router();

router.get("/", getPacientes);
router.post("/", createPaciente);
router.get("/:id", getPaciente);
router.put("/:id", updatePaciente);
router.delete("/:id", deletePaciente);

export default router;
