const router = require("express").Router();
const tripController = require("../controllers/trip-controller");

router
  .route("/")
  .post(tripController.createTrip)
  .get(tripController.getAllTrips);

router.route("/search").get(tripController.getTripsByName);

router
  .route("/:id")
  .get(tripController.getTripById)
  .patch(tripController.updateTrip)
  .delete(tripController.deleteTrip);

module.exports = router;
