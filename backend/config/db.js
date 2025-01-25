import mongoose from "mongoose";

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://Mahir:Mahir2005@cluster0.kdlpk.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};
connectDB();
module.exports = connectDB;
