const router = require("express").Router();
const itineraryController = require("../controllers/itinerary-controller");
const userController = require("../controllers/user-controller");

router.use(userController.protect);

router
  .route("/:tripId")
  .post(itineraryController.createItinerary)
  .get(itineraryController.getItinerary)
  .patch(itineraryController.updateItinerary)
  .delete(itineraryController.deleteItinerary);

module.exports = router;
