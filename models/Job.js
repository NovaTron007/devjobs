import mongoose from "mongoose"

const JobSchema = new mongoose.Schema({
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
            maxLength: 100
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
    location: {
        city: {
            type: String,
            required: [true, "City is required"],
            trim: true
        },
        country: {
            type: String,
            required: [true, "Country is required"],
            trim: true
        }
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