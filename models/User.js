import mongoose from "mongoose"
import validator from "validator" // validator package
import jwt from "jsonwebtoken" // use jsonwebtoken
import bcrypt from "bcryptjs" // encrypt password


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Name is required"],
        minLength: 3,
        maxLength: 20,
        trim: true
    },
    lastName: {
        type: String,
        maxLength: 20,
        default: null,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: { // use validator package
            validator: validator.isEmail,
            message: "Please enter a valid email"
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: 6,
        select: false // don't allow select query on password
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// hash password before save
UserSchema.pre("save", async function(){ // async await no need to pass next
    const salt = await bcrypt.genSalt(10) // gen salt using bcrypt
    this.password = await bcrypt.hash(this.password, salt) // hash current user pass with salt
})

// jwt instance method: sign token on current user using model
UserSchema.methods.createJWT = function() {
    console.log(this) // log user
    return jwt.sign(
        {id: this._id}, // user id in model
        process.env.JWT_SECRET, // pass secret key in .env
        {expiresIn: process.env.JWT_EXPIRES_IN}    
    )
}




// set up model for db
export default mongoose.model("User", UserSchema)