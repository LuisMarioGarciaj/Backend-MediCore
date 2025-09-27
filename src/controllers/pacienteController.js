import Paciente from "../models/Paciente.js";

// Obtener todos los pacientes
export const getPacientes = async (req, res) => {
  const pacientes = await Paciente.find();
  res.json(pacientes);
};

// Crear paciente
export const createPaciente = async (req, res) => {
  const nuevoPaciente = new Paciente(req.body);
  await nuevoPaciente.save();
  res.status(201).json(nuevoPaciente);
};

// Obtener un paciente
export const getPaciente = async (req, res) => {
  const paciente = await Paciente.findById(req.params.id);
  res.json(paciente);
};

// Actualizar paciente
export const updatePaciente = async (req, res) => {
  const paciente = await Paciente.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(paciente);
};

// Eliminar paciente
export const deletePaciente = async (req, res) => {
  await Paciente.findByIdAndDelete(req.params.id);
  res.json({ message: "Paciente eliminado" });
};
