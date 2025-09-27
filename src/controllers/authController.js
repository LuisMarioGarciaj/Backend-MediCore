import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Generar token
const generarToken = (id, rol) => {
  return jwt.sign({ id, rol }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Registro
export const register = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;
    const existeUsuario = await User.findOne({ email });
    if (existeUsuario) return res.status(400).json({ message: "El usuario ya existe" });

    const nuevoUser = new User({ nombre, email, password, rol });
    await nuevoUser.save();

    res.status(201).json({
      _id: nuevoUser._id,
      nombre: nuevoUser.nombre,
      email: nuevoUser.email,
      rol: nuevoUser.rol,
      token: generarToken(nuevoUser._id, nuevoUser.rol)
    });
  } catch (error) {
    res.status(500).json({ message: "Error en el registro", error });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await User.findOne({ email });
    if (!usuario) return res.status(400).json({ message: "Usuario no encontrado" });

    const match = await usuario.matchPassword(password);
    if (!match) return res.status(400).json({ message: "Credenciales incorrectas" });

    res.json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
      token: generarToken(usuario._id, usuario.rol)
    });
  } catch (error) {
    res.status(500).json({ message: "Error en login", error });
  }
};
