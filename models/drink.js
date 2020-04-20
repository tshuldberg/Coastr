const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema(
  {
    cocktail: String,
    spirit: String,
    spiritquantity: String,
    mixer: String,
    mixerquantity: String,
    liqueur: String,
    liqueurquantity: String,
    user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamp: true }
);

module.exports = mongoose.model("Drink", drinkSchema);
