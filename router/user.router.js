import { Login, Register, getAllusers } from "../controller/user.controller.js";
import { Router } from "express";

const router = Router();

router.get("/getAllusers", getAllusers);
router.post("/login", Login);
router.post("/register", Register);

export default router;
