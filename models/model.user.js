import mongoose from "../db/database.js";

const imageScheme = new mongoose.Schema({
  filename: String,
  originalname: String,
  mimetype: String,
  path: String,
  size: Number,
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  image: [imageScheme],
});

const User = mongoose.model("User", userSchema);

export default User;
