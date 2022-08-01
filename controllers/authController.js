import { StatusCodes } from "http-status-codes";
import CustomErrorMessage from "../classes/CustomErrorMessage.js"; // one default export no need braces
import User from "../models/User.js"


// @desc    Register User
// @route   POST /api/v1/auth/register
// @access  Public
export const register = async (req, res) => {
    // get body
    const { firstName, lastName, email, password } = req.body
    
    // use custom error class: add message to js error object
    if(!firstName || !lastName || !email || !password) {
        throw new CustomErrorMessage("Please complete all fields ", StatusCodes.BAD_REQUEST)
    }

    // check if user exists
    const userAlreadyExists = await User.findOne({email})
    // use custom error class
    if(userAlreadyExists) {
        console.log("Email already exists".red.underline.bold)
        throw new CustomErrorMessage("Email already exists ", StatusCodes.BAD_REQUEST)
    }

    // create user
    const user = await User.create({firstName, lastName, email, password})

    // create jwt and create cookie and send response
    sendTokenResponse(user, StatusCodes.CREATED, res)
}


// @desc    Login User
// @route   POST /api/v1/auth/login
// @access  Public
export const login = async (req, res, next) => {
    // destructure fields from body 
    const { email, password } = req.body
    
    // validate email and password
    if(!email || !password) {
        return next(new CustomErrorMessage("Please enter email and password", StatusCodes.BAD_REQUEST))
    }
    // Get user by id: check all User in db equal to email in req.body
    const user = await User.findOne({ email: email }).select("+password") // allow password select
    // no user return
    if(!user) {
        throw new CustomErrorMessage("Invalid credentials", StatusCodes.UNAUTHORIZED)
    }
    // check password: check if pass matches using method matchPassword in model
    const isMatch = await user.matchPassword(password) // current user document (lowercase user)

    // if not matched return
    if(!isMatch){
        throw new CustomErrorMessage("Invalid credentials", StatusCodes.BAD_REQUEST)
    }
    
    // Sign jwt token, pass user details to set req.cookies for login details
    sendTokenResponse(user, 200, res)
}


// Get token from model, create cookie and send response
const sendTokenResponse = async (user, statusCode, res) => { // pass user, statusCode, res for setting response
    // create jwt from model method
    const token = await user.createJWT() 
    // set cookie options obj (cookie has options: name, value, domain, path, expires, httpOnly, secure)
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000), // todays date + env days
        httpOnly: true // accessible through client side script
    }
    // if production use https for cookie
    if(process.env.NODE_ENV === "production") {
        cookieOptions.secure = true
    }
    // response with cookie
    res.status(statusCode)
        .cookie("token", token, cookieOptions) // cookie using cookie parser
        .json({
            success: true,
            token,
            user
        })
}