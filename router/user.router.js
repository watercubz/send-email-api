import { Login, Register } from "../controller/user.controller.js";
import express, { Router } from "express";

const router = Router();

router.post("/login", Login);
router.post("/register", Register);

export default router;
