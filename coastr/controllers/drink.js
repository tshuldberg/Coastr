const User = require("../models/user");
const Drink = require("../models/drink");
const request = require("request");

module.exports = {
  new: newdrink,
  showAll,
  update,
  delete: deldrink,
};

function showAll(req, res) {
  Drink.find({});
  res.render("drinks/show", { title: "My drinks", user });
}

function update(req, res) {
  drink.findByIdAndUpdate(
    req.params.drinkId,
    req.body,
    { new: true },
    function (err, drink) {
      if (err) console.log("WHY DID YOU BREAK", err);
      res.redirect(`/users/${req.params.id}/drinks`);
    }
  );
}

function newdrink(req, res) {
  User.findById(req.params.id, function (err, user) {
    request(options, function (err, response, body) {
      const countries = JSON.parse(body);
      res.render("drinks/new", {
        title: "Create A New drink",
        user,
        countries,
      });
    });
  });
}

function deldrink(req, res, next) {}
