const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  title: String,
  ingredients: [String],
});

module.exports = mongoose.model("Drink", drinkSchema);
