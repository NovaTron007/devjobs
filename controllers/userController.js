import { StatusCodes } from "http-status-codes"
import User from "../models/User.js"
import CustomErrorMessage from "../classes/CustomErrorMessage.js"
import path from "path" // node util to access file system


// @desc    Upload Photo
// @route   GET /api/v1/users
// @access  Private
export const getUsers = async (res) => {
    // get all users
    const users = await User.find()
    // response
    res.status(StatusCodes.OK).json({
        users
    })
}


// @desc    Upload Photo
// @route   PUT /api/v1/users/:id/photo
// @access  Private
export const uploadPhoto = async ( req, res) => {
    // find user: get user to upload photo for 
    const user = await User.findById(req.params.id)

    // if no user
    if(!user) {
        throw new CustomErrorMessage(`User not found with id ${req.params.id}`, StatusCodes.BAD_REQUEST)
    }
    // if no file submitted
    if(!req.files) {
        throw new CustomErrorMessage("Please upload a file", StatusCodes.BAD_REQUEST)
    }

    // use file obj from req.files
    const file = req.files.file
    console.log("Photo file: ", file)

    // validate file obj: check files.file.mimetype  is image
    if(!file.mimetype.startsWith("image")) {
        throw new CustomErrorMessage("File must be image", StatusCodes.BAD_REQUEST)
    }
    // check file size
    if(file.size > process.env.FILE_UPLOAD_MAX) {
        throw new CustomErrorMessage(`File must be less than ${process.env.FILE_UPLOAD_MAX}`, StatusCodes.BAD_REQUEST)
    }

    // create filename: custom name, to avoid duplicates, path.parse get orig filename
    file.name = `photo_${user._id}_${path.parse(file.name).ext}` // extension of file
    
    // move file: to public/uploads folder set in env file
    file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
        
        if(err) {
            console.log("Error uploading file: ", err)
            throw new CustomErrorMessage("Error uploading image", StatusCodes.INTERNAL_SERVER_ERROR)
        }
        
        // update user with photo
        await User.findByIdAndUpdate(req.params.id, { photo: file.name})
        
        // response
        res.status(StatusCodes.CREATED).json({
            success: true,
            photo: file.name
        })
    })
}