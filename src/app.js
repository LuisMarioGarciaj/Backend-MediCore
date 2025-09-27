import express from "express";
import cors from "cors";
import morgan from "morgan";

import pacienteRoutes from "./routes/pacienteRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import citaRoutes from "./routes/citaRoutes.js";
import recetaRoutes from "./routes/recetaRoutes.js";
import medicamentoRoutes from "./routes/medicamentoRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import especialidadRoutes from "./routes/especialidadRoutes.js"

const app = express();

// Middlewares
// app.use(cors());
app.use(cors({
  origin: [
    "http://localhost:5173",                    // Desarrollo local
    "https://medicore-frontend.vercel.app",     // Futuro dominio en Vercel
    "https://*.vercel.app"                      // Subdominios de Vercel
  ],
  credentials: true
}));
app.use(express.json());
app.use(morgan("dev"));
// Ruta de health check para Render
app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    message: "Backend MediCore funcionando",
    timestamp: new Date().toISOString()
  });
});
// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/pacientes", pacienteRoutes);
app.use("/api/doctores", doctorRoutes);
app.use("/api/citas", citaRoutes);
app.use("/api/recetas", recetaRoutes);
app.use("/api/medicamentos", medicamentoRoutes);
app.use("/api/especialidades", especialidadRoutes);

export default app;
