import {
  Login,
  Register,
  getAllusers,
  uploadImg,
  getUserById,
} from "../controller/user.controller.js";
import { Router } from "express";
import upload from "../config/multer.js";

const router = Router();

router.get("/users", getAllusers);
router.get("/users/:userId", getUserById);
router.post("/login", Login);
router.post("/register", Register);
router.post("/upload/:userId", upload.single("image"), uploadImg);

export default router;
