import express from "express";
import { Login } from "../controllers/user.js";
import { Register } from "../controllers/user.js";
import { Logout } from "../controllers/user.js";

const router = express.Router();

console.log(Register);
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);

export default router;