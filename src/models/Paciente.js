import mongoose from "mongoose";

const pacienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  genero: { type: String, enum: ["Masculino", "Femenino", "Otro"], required: true },
  direccion: { type: String },
  telefono: { type: String },
  email: { type: String, unique: true },
  historialMedico: { type: String },
}, { timestamps: true });

export default mongoose.model("Paciente", pacienteSchema);
