import { Router } from "express";
import { register, login } from "../controllers/authController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = Router();

// Registro y login
router.post("/register", register);
router.post("/login", login);

// Ejemplo de ruta protegida
router.get("/perfil", protect, (req, res) => {
  res.json({ message: "Bienvenido", usuario: req.user });
});

// Ejemplo de ruta solo para Admin
router.get("/admin", protect, authorize("Admin"), (req, res) => {
  res.json({ message: "Ruta solo para Admin" });
});

export default router;
