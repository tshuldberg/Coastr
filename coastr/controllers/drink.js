const Drink = require("../models/drink");

module.exports = {
  index,
  create,
  delete: deleteDrink,
};

async function create(req, res) {
  const drink = await Drink.create(req.body);
  drink.save((err) => {
    if (err) console.log(err);
  });
  res.status(201).json(drink);
}
async function index(req, res) {
  const drinks = await Drink.find({});
  res.status(200).json(drinks);
}

async function deleteDrink(req, res) {
  const deletedDrink = await Drink.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedDrink);
}
