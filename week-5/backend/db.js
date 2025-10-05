const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nachiketapahari00:pahari%406246@stuff.nfbwskc.mongodb.net/cards");

const cardSchema = mongoose.Schema({
    name: String,
    description: String,
    interests: [String],
    social: [String]
})

const card = mongoose.model('cards', cardSchema);

module.exports = card;