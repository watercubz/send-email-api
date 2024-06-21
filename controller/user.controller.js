import bcrypt from "bcrypt";
import User from "../models/model.user.js";
import sendWelcomeEmail from "../email/send-email.js";
import path from "path";

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

export const uploadImg = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const newImage = {
      filename: req.file.filename,
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      path: req.file.path,
      size: req.file.size,
    };
    user.image.push(newImage);
    await user.save();
    res.status(200).json(newImage);
  } catch (error) {
    res.status(500).json({ meessage: "Error uploading image", error });
  }
};

export const getUserById = async (req, res) => {
  const user = req.params.userId;
  try {
    const _id = await User.findById(user);
    if (!_id) {
      return res.status(404).json({ message: "User ID not found" });
    }
    res.status(200).json(_id);
  } catch (error) {
    res.status(500).json({ message: "Innterla Server error", error });
  }
};
