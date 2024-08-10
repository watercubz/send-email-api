import bcrypt from "bcrypt";
import User from "../models/model.user.js";
import sendWelcomeEmail from "../email/send-email.js";


export const getAllusers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "users not found" });
    }
    res.send(users);
  } catch (error) {
    res.status(500).json({ message: "Internal error Server" });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successfuly" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const Register = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return existingUser.status(400).json({ message: "User already exits" });
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
      name,
      email,
    });

    res
      .status(200)
      .send({ message: "User registered successfully and email sent!" });
  } catch (error) {
    res.status(500).json({ message: "Error server" });
    s;
  }
};


export const getUserById = async (req, res) => {
  const user = req.params.userId;
  try {
    const getId = await User.findById(user);
    if (!getId) {
      return res.status(404).json({ message: "User ID not found" });
    }
    res.status(200).json(getId);
  } catch (error) {
    res.status(500).json({ message: "Internal Server error", error });
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const userId = req.params.id;
    const removeUser = await User.findOneAndDelete(userId);

    if (removeUser) {
      return res.status(200).json({ message: "User delete successfuly" });
    } else {
      return res.status(404).json({ message: "User Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "error when deleting the user" });
  }
};
