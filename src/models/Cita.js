import mongoose from "mongoose";

const citaSchema = new mongoose.Schema({
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Paciente", required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  fecha: { type: Date, required: true },
  motivo: { type: String },
  estado: { type: String, enum: ["Pendiente", "Confirmada", "Cancelada"], default: "Pendiente" }
}, { timestamps: true });

export default mongoose.model("Cita", citaSchema);
