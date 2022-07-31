import { StatusCodes } from "http-status-codes";
import CustomErrorMessage from "../classes/CustomErrorMessage.js"; // one default export no need braces
import User from "../models/User.js"


// @desc    Register User
// @route   POST /api/v1/auth/register/
// @access  Public
export const register = async (req, res, next) => {
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

    // create jwt from model method
    const token = await user.createJWT()

    // response obj
    res.status(StatusCodes.CREATED).json({
        success: true,
        user: {firstName: user.firstName, lastName: user.lastName, password: user.password, email: user.email },
        token
    })

}