const express = require("express");
const CoinsController = require("../controllers/coins-controller");
const userController = require("../controllers/user-controller");
const router = express.Router();

router
	.route("/addCoins")
	.patch(userController.protect, CoinsController.addCoins);

router.route("/getCoins").get(userController.protect, CoinsController.getCoins);
module.exports = router;
