import mongoose from "mongoose"

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, "Company is required"],
        minLength: 1,
        maxLength: 50,
        trim: true
    },
    website: {
        type: String,
        required: [true, "Website is required"],
        minLength: 5,
        maxLength: 50,
        trim: true
    },
    title: {
        type: String,
        required: [true, "Job is required"],
        minLength: 3,
        maxLength: 100
    },
    type: {
        type: String,
        enum: ["full-time", "part-time", "remote"],
        default: "full-time"       
    },
    details: {
        description:{
            type: String,
            required: [true, "Description is required"],
            trim: true,
            minLength: 5,
            maxLength: 500
        },
        requirements:{
            type: String,
            required: [true, "Requirements is required"],
            trim: true,
            minLength: 5,
            maxLength: 100
        },
        tasks:[{
            type: String,
            trim: true
        }]
    },
    city: {
        type: String,
        required: [true, "City is required"],
        trim: true,
        minLength: 2,
        maxLength: 100
    },
    country: {
        type: String,
        required: [true, "Country is required"],
        trim: true,
        minLength: 2,
        maxLength: 100
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    // create relationship: job belongs to user
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User", // model to reference
        required: true // job needs a user
    }
})

export default mongoose.model("Job", JobSchema)