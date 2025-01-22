// Challenge model


const mongoose = require("mongoose");

const ChallengeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], required: true },
    assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    assignedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Challenge", ChallengeSchema);
