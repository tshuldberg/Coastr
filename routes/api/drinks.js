var express = require("express");
var router = express.Router();
var drinksCtrl = require("../../controllers/drink");

/* GET /api/drinks */
router.post("/", drinksCtrl.create);
router.get("/", drinksCtrl.index);
router.delete("/:id", drinksCtrl.delete);

module.exports = router;
