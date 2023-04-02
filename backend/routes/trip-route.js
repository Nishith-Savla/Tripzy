const router = require("express").Router();
const tripController = require("../controllers/trip-controller");
const userController = require("../controllers/user-controller");

router.route("/myTrips").get(userController.protect, tripController.myTrips);

router
	.route("/")
	.post(userController.protect, tripController.createTrip)
	.get(tripController.getAllTrips);

router.route("/search").get(tripController.getTripsByName);

router
	.route("/:id")
	.get(tripController.getTripById)
	.patch(userController.protect, tripController.updateTrip)
	.delete(userController.protect, tripController.deleteTrip);

module.exports = router;
