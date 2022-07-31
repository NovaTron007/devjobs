import express from "express"
import { register } from "../controllers/authController.js" // load controller methods
const router = express.Router() // use express router

// call controller methods
router.route("/register").post(register)

export default router