import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

// Cargar variables de entorno
dotenv.config();

// Conectar a MongoDB
connectDB();

// Puerto
const PORT = process.env.PORT || 4000;

// Levantar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
