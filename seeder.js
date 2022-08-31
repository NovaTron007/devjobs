import { readFile } from "fs/promises" // modules way to read files
import dotenv from "dotenv"  // use env vars
dotenv.config({ path: "./config/config.env"}) // load env before other files that use vars
import connectDb from "./config/dbConnect.js" // db connector
import Job from "./models/Job.js" // Job model
import User from "./models/User.js" // User model

// to run: node seeder
const start = async () => {
    try {
        // use connect function to connect
        await connectDb()
        // delete all data there
        await Job.deleteMany()
        await User.deleteMany()
        // parse and destruct jobsData: file to use, meta url syntax for upload json (data file createdBy: add user id)
        const { jobsData } = JSON.parse(await readFile(new URL("./config/data.json", import.meta.url)))
        const { usersData } = JSON.parse(await readFile(new URL("./config/users_data.json", import.meta.url)))

        // add json file using create
        await Job.create(jobsData)
        await User.create(usersData)
        // log and exit
        console.log("Data seeded!")
        process.exit(0)
    } catch (err) {
        console.log("Error seeding data: ", err)
        process.exit(1)
    }
}

// call function
start()