import {
  Login,
  Register,
  getAllusers,
  getUserById,
  deleteUsers,
} from "../controller/user.controller.js";
import { uploadImg } from "../controller/upload_file.controller.js";
import { Router } from "express";
import upload from "../config/multer.js";

const router = Router();

// GET method
router.get("/users", getAllusers);
router.get("/users/:userId", getUserById);

// POST method
router.post("/login", Login);
router.post("/register", Register);
router.post("/upload/:userId", upload.single("image"), uploadImg);

// DELETE method
router.delete("/users/:userId", deleteUsers);

export default router;
