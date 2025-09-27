import mongoose from "mongoose";

const recetaSchema = new mongoose.Schema({
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "Paciente", required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  medicamentos: [{
    medicamento: { type: mongoose.Schema.Types.ObjectId, ref: "Medicamento" },
    indicaciones: String
  }],
  fecha: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model("Receta", recetaSchema);
