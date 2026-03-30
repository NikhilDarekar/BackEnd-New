import mongoose from "mongoose"
import {DB_NAME} from "./constants"



















/*
import express from "express"

const app = express()

// function connectDB(){}

// connectDB()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERRRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.error("Error", error)
        throw error
        
    }
})()
*/