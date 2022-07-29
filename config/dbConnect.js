import mongoose from "mongoose"

// connect to db using mongo atlas creds: async as mongoose connect returns a promise
const connectDb = async () => {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        // mongoose conn obj returns host of app (mongo url)
        console.log(`MongoDB connected: ${conn.connection.host}`)
}

export default connectDb