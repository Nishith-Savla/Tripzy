const express = require("express");
const EnrolledTripsController = require("../controllers/enrolled-trips-controller");

const router = express.Router();

router
	.route("/")
	.get(EnrolledTripsController.get_all_enrolled_trips)
	.post(EnrolledTripsController.store_enrolled_trip);

module.exports = router;
