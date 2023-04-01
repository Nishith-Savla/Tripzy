const router = require("express").Router();

const activityController = require("../controllers/activity-controller");
const userController = require("../controllers/user-controller");

router.use(userController.protect);

router
  .route("/:itineraryId")
  .post(activityController.createActivity)
  .get(activityController.getAllActivities);

router
  .route("/:itineraryId/:activityId")
  .get(activityController.getActivityById)
  .patch(activityController.updateActivityById)
  .delete(activityController.deleteActivityById);

module.exports = router;
