const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema(
  {
    title: String,
    ingredients: [
      {
        name: String,
        quantity: String,
      },
    ],
  },
  { timestamp: true }
);

module.exports = mongoose.model("Drink", drinkSchema);
