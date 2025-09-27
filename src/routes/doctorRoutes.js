import { Router } from "express";
import { getDoctores, createDoctor, getDoctor, updateDoctor, deleteDoctor } from "../controllers/doctorController.js";

const router = Router();

router.get("/", getDoctores);
router.post("/", createDoctor);
router.get("/:id", getDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;
