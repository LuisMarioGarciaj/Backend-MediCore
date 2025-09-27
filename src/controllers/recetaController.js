import Receta from "../models/Receta.js";

export const getRecetas = async (req, res) => {
  const recetas = await Receta.find().populate("paciente doctor medicamentos.medicamento");
  res.json(recetas);
};

export const createReceta = async (req, res) => {
  const nuevaReceta = new Receta(req.body);
  await nuevaReceta.save();
  res.status(201).json(nuevaReceta);
};

export const getReceta = async (req, res) => {
  const receta = await Receta.findById(req.params.id).populate("paciente doctor medicamentos.medicamento");
  res.json(receta);
};

export const updateReceta = async (req, res) => {
  const receta = await Receta.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(receta);
};

export const deleteReceta = async (req, res) => {
  await Receta.findByIdAndDelete(req.params.id);
  res.json({ message: "Receta eliminada" });
};
