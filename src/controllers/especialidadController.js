import Especialidad from "../models/Especialidad.js";

// Listar todas
export const getEspecialidades = async (req, res) => {
  const items = await Especialidad.find();
  res.json(items);
};

// Crear
export const createEspecialidad = async (req, res) => {
  const nuevo = new Especialidad(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

// Actualizar
export const updateEspecialidad = async (req, res) => {
  const { id } = req.params;
  const updated = await Especialidad.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

// Eliminar
export const deleteEspecialidad = async (req, res) => {
  const { id } = req.params;
  await Especialidad.findByIdAndDelete(id);
  res.status(204).send();
};
