const express = require("express");
const EnrolledTripsController = require("../controllers/enrolled-trips-controller");
const userController = require("../controllers/user-controller");

const router = express.Router();

router
	.route("/")
	.get(userController.protect, EnrolledTripsController.get_all_enrolled_trips)
	.post(userController.protect, EnrolledTripsController.store_enrolled_trip);

router
	.route("/getEnrolledUsers/:tripId")
	.get(EnrolledTripsController.get_enrolled_users);

module.exports = router;
