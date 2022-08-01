// middleware file to handle error object and output response from mongoose errors
import { StatusCodes } from "http-status-codes"

const errorHandlerMiddleware = (err, req, res, next) => {
    // console.log("err.message: ", err.message) // access js error object: throw new Error("Please provide all values")

    // create object for default error and set js error object using StatusCodes
    const defaultErrorObj = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || "Server Error"
    }


    // set js error object to output the errors
    
    // validation error
    if(err.name === "ValidationError") {
        // loop js error obj messages
        const messages = Object.values(err.errors).map((item) => item.message).join(",")
        // set custom error object to err messasge
        defaultErrorObj.statusCode = StatusCodes.BAD_REQUEST
        defaultErrorObj.message = messages
    }

    // unique fields error: update custom err object with err.keyValue's key name
    if(err.code && err.code === 11000) {
        defaultErrorObj.statusCode = StatusCodes.BAD_REQUEST
        defaultErrorObj.message = `${Object.keys(err.keyValue)} must be unique` 
    }


    // response with errors: output response with js error to postman/client etc
    res.status(defaultErrorObj.statusCode).json({
        message: defaultErrorObj.message,
        statusCode: defaultErrorObj.statusCode
    })
}


export default errorHandlerMiddleware