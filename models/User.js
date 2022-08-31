import mongoose from "mongoose"
import validator from "validator" // validator package
import jwt from "jsonwebtoken" // use jsonwebtoken
import bcrypt from "bcryptjs" // encrypt password


const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "User name is required"],
        minLength:2,
        maxLength: 20,
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
    photo: {
        type: String,
        default: "no-photo.jpg"
    },
    color: {
        type: String,
        default: "navy"
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


// methods when we want to operate on single doc, statics when we want to operate on entire collection.
// statics called on model itself ie. uppercase Called on model itself ie:
// const user = await User.create({ name,  email, role, password}) Getting data from user using model with create
// now auth model can use it from user var after model call

// match entered pass against hashed pass in db
UserSchema.methods.matchPassword = function(password){
    // will return true or false
    return bcrypt.compare(password, this.password)
}

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