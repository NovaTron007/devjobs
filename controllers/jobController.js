import { StatusCodes } from "http-status-codes"
import CustomErrorMessage from "../classes/CustomErrorMessage.js"
import Job from "../models/Job.js"


// @desc    Get all Jobs
// @route   POST /api/v1/jobs
// @access  Public
export const getJobs = async (req, res) => {
   // Get query params: in url ie: /jobs?type=full-time&search=frontend)
   const { type, search, sort, country } = req.query

   // build up query obj document for model, for filtering/retrieving data from db
   const queryObj = {}

   // job type query filter: if job type in query param
   if(type) {
      queryObj.type = type
   }
   // search term filter: if search term in query param (search based on job title)
   if(search) {
      // mongodb regex: where the text exists in general (not exact match)
      queryObj.title = {$regex: search, $options: "i"} // term, case insensitive
   }
   if(country) {
      queryObj.country = {$regex: country, $options: "i" } // term, case insensitive
   }

   // no await: prepare result first with query object before request to db
   let result = Job.find(queryObj)
   
   // get total of all in db
   const totalJobs = await Job.countDocuments(queryObj)

   // sorting 
   if(sort === "latest") {
      result = result.sort("-createdAt")
   }
   if(sort === "oldest") {
      result = result.sort("createdAt")
   }
   if(sort === "a-z") {
      result = result.sort("title") 
   }
   if(sort === "z-a") {
      result = result.sort("-title")
   }

   // jobs with result, and populate createdBy (user relationship in job with specific info only)
   const jobs = await result.populate("user", "photo color")

   // response
   res.status(StatusCodes.OK).json({
      success: true,
      totalJobs,
      jobs
   })
}


// @desc    Get single job
// @route   GET /api/v1/jobs/:id
// @access  Public
export const getSingleJob = async (req, res) => {
   // get job id from url
   const job = await Job.findById(req.params.id).populate("user", "photo color")
   // if not exists
   if(!job) {
      throw new CustomErrorMessage(`Job with id: ${req.params.id} not found!`, StatusCodes.BAD_REQUEST)
   }
   // response: job exists
   res.status(StatusCodes.OK).json({
      success: true,
      job: job
   })

}

// @desc    Create Job
// @route   POST /api/v1/jobs
// @access  Private
export const createJob = async (req, res) => {
    // append req.user from req.user.userId set in authUserMiddleware to req.body (we need to add user to job)
    req.body.user = req.user.userId
    // create job
    const job = await Job.create(req.body)
    // response
     res.status(StatusCodes.CREATED).json({
        success: true,
        job: job
     })   
}

// @desc    Update Job
// @route   PUT /api/v1/jobs/:id
// @access  Private
export const updateJob = async(req, res) => {
   // get job from db by id (let as we will change)
   let job = await Job.findById(req.params.id)

   // check if job exists
   if(!job) {
      throw new CustomErrorMessage(`Job with id ${req.params.id} does not exist.`, StatusCodes.BAD_REQUEST)
   }
   
   // check if is owner of job: check user field (has id) with authHeader req.user.userId
   if(job.user.toString() !== req.user.userId) { // convert field user: new ObjectId("the user id") in job document
      throw new CustomErrorMessage("Not authorised to update this job!", StatusCodes.UNAUTHORIZED)
   }

   // update
   job = await Job.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true // run validators in model
   })
   // response
   res.status(StatusCodes.OK).json({
      success: true,
      job
   })
}

// @desc    Delete Job
// @route   DELETE /api/v1/jobs/:id
// @access  Private
export const deleteJob = async (req, res) => {
   // get job id
   const job = await Job.findById(req.params.id)
   // check if exists
   if(!job) {
      throw new CustomErrorMessage(`Job with id: ${req.params.id}`, StatusCodes.BAD_REQUEST)
   }
   // check if owner
   if(job.user.toString() !== req.user.userId) {
      throw new CustomErrorMessage("Not authorised!", StatusCodes.UNAUTHORIZED)
   }

   // delete job
   await job.remove()
   
   // response
   res.status(StatusCodes.OK).json({
      success: true, 
      message:`Job deleted, id: ${req.params.id}` 
   })
}