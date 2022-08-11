import dotenv  from "dotenv"
import "express-async-errors" // allow output of js errors to postman/client, w/o using next in controllers
import express from "express"
import colors from "colors"
import fileupload from "express-fileupload" // allow upload of files
import cookieParser from "cookie-parser" // create cookies
import connectDb from "./config/dbConnect.js" // mongoose connection
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js" // use to output js errors
// es6 way to use __dirname (= current directory where this file resides)
import path from "path" // node util to access file system
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// import route files to call controllers
import { authRouter, jobRouter, userRouter } from "./routes/index.js" 

// create express server
const app = express()

// path to specify .env if not at root
dotenv.config({path: "./config/config.env"})

// parse json from body (use before routes,body parser now included)
app.use(express.json())
// upload files (import before route calls controller!!!)
app.use(fileupload())

// create cookie and store stuff in it
app.use(cookieParser())
// express static folder for file upload allow access in url (exclude "public" ie: localhost:5000/uploads/image.jpg
app.use(express.static(path.join(__dirname, "public")))

// Routes: prefix router then use router file for endpoint
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/jobs", jobRouter)
app.use("/api/v1/users", userRouter)

// error middleware after routes
app.use(errorHandlerMiddleware) // show js error messages

// PORT constant env var
const PORT = process.env.PORT 

// run server and connect to db
try {
    app.listen(PORT, () => {
        // run mongoose connection
        connectDb()
        console.log(`App running on http://localhost:${PORT}`.cyan.underline.bold)
    })
} catch(err) {
    console.log(`Error connecting to db:${err} `.red.underline.bold)
}


