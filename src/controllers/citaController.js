import Cita from "../models/Cita.js";

export const getCitas = async (req, res) => {
  const citas = await Cita.find().populate("paciente doctor");
  res.json(citas);
};

export const createCita = async (req, res) => {
  const nuevaCita = new Cita(req.body);
  await nuevaCita.save();
  res.status(201).json(nuevaCita);
};

export const getCita = async (req, res) => {
  const cita = await Cita.findById(req.params.id).populate("paciente doctor");
  res.json(cita);
};

export const updateCita = async (req, res) => {
  const cita = await Cita.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(cita);
};

export const deleteCita = async (req, res) => {
  await Cita.findByIdAndDelete(req.params.id);
  res.json({ message: "Cita eliminada" });
};
