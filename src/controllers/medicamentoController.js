import Medicamento from "../models/Medicamento.js";

export const getMedicamentos = async (req, res) => {
  const medicamentos = await Medicamento.find();
  res.json(medicamentos);
};

export const createMedicamento = async (req, res) => {
  const nuevoMedicamento = new Medicamento(req.body);
  await nuevoMedicamento.save();
  res.status(201).json(nuevoMedicamento);
};

export const getMedicamento = async (req, res) => {
  const medicamento = await Medicamento.findById(req.params.id);
  res.json(medicamento);
};

export const updateMedicamento = async (req, res) => {
  const medicamento = await Medicamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(medicamento);
};

export const deleteMedicamento = async (req, res) => {
  await Medicamento.findByIdAndDelete(req.params.id);
  res.json({ message: "Medicamento eliminado" });
};
