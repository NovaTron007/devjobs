import { StatusCodes } from "http-status-codes"
import CustomErrorMessage from "../classes/CustomErrorMessage.js"
import Job from "../models/Job.js"

// @desc    Create Job
// @route   POST /api/v1/auth/job
// @access  Private
export const createJob = async (req, res) => {
    // append req.user from req obj to req.body
    req.body.user = req.user
    // create job
    const job = await Job.create(req.body)
    // response
     res.status(StatusCodes.CREATED).json({
        success: true,
        job: job
     })   
}