const router = require("express").Router();
const suggessionController = require("../controllers/suggession-controller");
const userController = require("../controllers/user-controller");

router.use(userController.protect);

router
  .route("/:tourId")
  .get(suggessionController.getAllSuggessions)
  .post(suggessionController.createSuggession);

module.exports = router;
