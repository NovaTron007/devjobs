import express from "express"
const router = express.Router() // use express router
import { uploadPhoto, getUsers } from "../controllers/userController.js" // load controller methods
import authUserMiddleware from "../middleware/authUserMiddleware.js"

// call controller methods
router.route("/:id/photo").put(authUserMiddleware, uploadPhoto) // auth user first
router.route("/").get(getUsers) // get all users

export default router