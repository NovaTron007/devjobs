import express from "express"
const router = express.Router() // use express router
import { createJob, deleteJob, getJobs, updateJob } from "../controllers/jobController.js" // load controller methods
import authUserMiddleware from "../middleware/authUserMiddleware.js"

// call controller methods
router.route("/").post(authUserMiddleware, createJob) // run auth user first, req.user.userId set in authUserMiddleware
                 .get(getJobs)
router.route("/:id").patch(authUserMiddleware, updateJob) // run auth user first, req.user.userId set in authUserMiddleware
                    .delete(authUserMiddleware, deleteJob)



export default router