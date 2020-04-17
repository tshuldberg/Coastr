var express = require("express");
var router = express.Router();
var drinksCtrl = require("../../controllers/drinks");

/* GET /api/items */
router.post("/", drinksCtrl.create);
router.get("/", drinksCtrl.index);
router.delete("/:id", drniksCtrl.delete);

module.exports = router;
