// import mongoose from "mongoose";

// const doctorSchema = new mongoose.Schema({
//   nombre: { type: String, required: true },
//   especialidad: { type: mongoose.Schema.Types.ObjectId, ref: "Especialidad", required: true },
//   telefono: { type: String },
//   email: { type: String, unique: true },
//   horarios: [{ dia: String, horaInicio: String, horaFin: String }],
// }, { timestamps: true });

// export default mongoose.model("Doctor", doctorSchema);

import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  especialidad: { type: mongoose.Schema.Types.ObjectId, ref: "Especialidad" }
});

export default mongoose.model("Doctor", doctorSchema);
