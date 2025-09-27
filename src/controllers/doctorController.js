import Doctor from "../models/Doctor.js";

export const getDoctores = async (req, res) => {
  const doctores = await Doctor.find().populate("especialidad");
  res.json(doctores);
};

export const createDoctor = async (req, res) => {
  const nuevoDoctor = new Doctor(req.body);
  await nuevoDoctor.save();
  res.status(201).json(nuevoDoctor);
};

export const getDoctor = async (req, res) => {
  const doctor = await Doctor.findById(req.params.id).populate("especialidad");
  res.json(doctor);
};

export const updateDoctor = async (req, res) => {
  const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(doctor);
};

export const deleteDoctor = async (req, res) => {
  await Doctor.findByIdAndDelete(req.params.id);
  res.json({ message: "Doctor eliminado" });
};
