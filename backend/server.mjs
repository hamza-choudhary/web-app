// handling uncaught Exception
process.on('uncaughtException' , (err)=>{
    console.log(`error: ${err.message}`)
    console.log('shutting down the server due to uncaught Exception')
    process.exit(1)
})


import app from "./app.mjs";
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config({path:'backend/src/Config/config.env'})


const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

// connecting with DB
mongoose.set('strictQuery', false)
mongoose.connect(DB_URL).then(()=>{
   console.log('DB Connected')
})
// starting server
const server = app.listen(PORT,()=>{
    console.log(`connect: http://localhost:${PORT}`)
})

// handling unhandled error rejection
process.on('unhandledRejection' , (err)=>{
    console.log(`error: ${err.message}`)
    console.log('shutting down the server due to unhandled error rejection')

    server.close(()=>{
        process.exit(1)
    })
})
