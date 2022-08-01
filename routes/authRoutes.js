import express from "express"
import { register, login } from "../controllers/authController.js" // load controller methods
const router = express.Router() // use express router

// call controller methods
router.route("/register").post(register)
router.route("/login").post(login)

export default router