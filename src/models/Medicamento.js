import mongoose from "mongoose";

const medicamentoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  dosis: { type: String },
}, { timestamps: true });

export default mongoose.model("Medicamento", medicamentoSchema);
