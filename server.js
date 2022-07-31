import dotenv  from "dotenv"
import "express-async-errors" // allow output of js errors to postman/client, no need try/catch in controllers
import express from "express"
import colors from "colors"
import connectDb from "./config/dbConnect.js" // mongoose connection
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js" // use to output js errors
import authRouter from "./routes/authRoutes.js" // import route files to call controllers

// create express server
const app = express()

// path to specify .env if not at root
dotenv.config({path: "./config/config.env"})

// parse json from body (use before routes)
app.use(express.json())
// Routes: prefix router then use router file for endpoint
app.use("/api/v1/auth", authRouter)

// middleware
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


