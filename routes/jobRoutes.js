import express from "express"
const router = express.Router() // use express router
import { createJob, getJobs } from "../controllers/jobController.js" // load controller methods
import authUserMiddleware from "../middleware/authUserMiddleware.js"

// call controller methods
router.route("/").post(authUserMiddleware, createJob) // auth user first
                 .get(getJobs)
export default router