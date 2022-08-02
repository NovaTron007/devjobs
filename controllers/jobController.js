import { StatusCodes } from "http-status-codes"
import Job from "../models/Job.js"


// @desc    Get all Jobs
// @route   POST /api/v1/auth/jobs
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

   // jobs with result
   const jobs = await result

   // response
   res.status(StatusCodes.OK).json({
      success: true,
      totalJobs,
      jobs
   })
}


// @desc    Create Job
// @route   POST /api/v1/auth/jobs
// @access  Private
export const createJob = async (req, res) => {
    // append req.user from req obj to req.body
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
// @route   PUT /api/v1/auth/jobs/:id
// @access  Private

