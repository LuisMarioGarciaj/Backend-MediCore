import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, enum: ["Admin", "Doctor", "Paciente"], default: "Paciente" }
}, { timestamps: true });

// Encriptar password antes de guardar
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Comparar password en login
userSchema.methods.matchPassword = async function(passwordIngresada) {
  return await bcrypt.compare(passwordIngresada, this.password);
};

export default mongoose.model("User", userSchema);
