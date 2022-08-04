import { StatusCodes } from "http-status-codes"
import jsonwebtoken from "jsonwebtoken"
import CustomErrorMessage from "../classes/CustomErrorMessage.js"
import User from "../models/User.js"

// get token from auth in headers sent by client
const authUserMiddleware = async (req, res, next) => {
    // get token in header passed by client (cookie token created in register and login)
    const authHeader = req.headers.authorization
    
    // check token in auth header 
    if(!authHeader || !authHeader.startsWith("Bearer")) { // check header string: Bearer token
        console.log(`No auth header sent!`.red.underline.bold)
        throw new CustomErrorMessage("Authentication Invalid!", StatusCodes.BAD_REQUEST)
    }
    
    // get token: header string, convert to array and split at space
    const token = authHeader.split(" ")[1] // get token part i.e Bearer token

    // compare sent token  (server sent token to client which contains userid during login)
    const clientToken = jsonwebtoken.verify(token, process.env.JWT_SECRET) // userid, issue at, exp
    
    // get user by id of clientToken
    const user = await User.findById(clientToken.id)
    console.log("user: ", user)
    // compare user id with clientToken.id
    try {
        if(user.id === clientToken.id){
            // set req.user object with a userId
            req.user = { userId: clientToken.id }
        }
        // next middleware (controller)
        next()
    } catch (err) {
        throw new CustomErrorMessage("Unauthorised action!", StatusCodes.UNAUTHORIZED)
    }

    console.log(`req.user.userId: ${req.user.userId} `.yellow.underline.bold)
}

export default authUserMiddleware