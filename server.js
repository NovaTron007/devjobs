import dotenv  from "dotenv"
import express from "express"
import connectDb from "./config/dbConnect.js" // mongoose connection

// path to specify .env if not at root
dotenv.config({path: "./config/config.env"})

// create express server
const app = express()

// load env var
const port = process.env.PORT
 
// basic route
app.get('/', (req, res) => {
  res.send(`Hello World! ${port}`)
  console.log("port: ", port)
})

// run server and connect to db
try {
    app.listen(port, () => {
        // run mongoose connection
        connectDb()
        console.log(`App running on http://localhost:${port}`)
    })
} catch(err) {
    console.log("Error connecting to db")
}


