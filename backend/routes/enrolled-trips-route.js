const express = require("express");
const EnrolledTripsController = require("../controllers/enrolled-trips-controller");
const userController = require("../controllers/user-controller");

const router = express.Router();

router
  .route("/")
  .get(userController.protect, EnrolledTripsController.getAllEnrolledTrips)
  .post(userController.protect, EnrolledTripsController.storeEnrolledTrip);

router
  .route("/getEnrolledUsers/:tripId")
  .get(EnrolledTripsController.getEnrolledUsers);

module.exports = router;
