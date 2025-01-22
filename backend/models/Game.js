// Game model


const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], required: true },
    playerCount: { type: Number, default: 0 },
    popularity: { type: Number, default: 0 },
    imageURL: { type: String, default: "" },
});

module.exports = mongoose.model("Game", GameSchema);
