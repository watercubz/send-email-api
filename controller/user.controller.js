import bcrypt, { hash } from "bcrypt";
import User from "../models/model.user.js";
import sendWelcomeEmail from "../email/send-email.js";

export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, email);

    if (!isMatch) {
      res.status(400).json({ message: "Invalid credencials" });
    }

    res.status(201).json({ message: "Login successfuly" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const Register = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(500).json({ message: "User already exits" });
    }

    //encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
      name,
    });

    await newUser.save();

    await sendWelcomeEmail({
      name: newUser.user.name,
      email: newUser.user.email,
    });

    res
      .status(201)
      .send({ message: "User registered successfully and email sent!" });
  } catch (error) {
    res.status(500).json({ message: "Error server" });
  }
};
