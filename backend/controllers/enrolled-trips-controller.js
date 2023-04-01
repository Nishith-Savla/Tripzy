const EnrolledTripsModel = require("../models/enrolled-trips-model");
const AppError = require("../utils/app-error");
const catchAsync = require("../utils/catch-async");

exports.getAllEnrolledTrips = catchAsync(async (req, res, next) => {
  const enrolled_trips = await EnrolledTripsModel.find({
    userId: req.user.id,
  });

  res.status(200).json({
    status: "success",
    data: {
      enrolled_trips,
    },
  });
});

exports.storeEnrolledTrip = catchAsync(async (req, res, next) => {
  const { tripId } = req.body;
  const check = await EnrolledTripsModel.findOne({
    userId: req.user._id,
    tripId: tripId,
  });

  if (check) {
    return next(new AppError("You are already enrolled in this trip", 400));
  }
  const enrolledTrip = await EnrolledTripsModel.create({
    userId: req.user._id,
    tripId: tripId,
  });

  res.status(200).json({
    status: "success",
    data: enrolledTrip,
  });
});

exports.getEnrolledUsers = catchAsync(async (req, res, next) => {
  const enrolled_users = await EnrolledTripsModel.find({
    tripId: req.params.tripId,
  })
    .populate("userId")
    .populate("tripId");

  res.status(200).json({
    status: "success",
    data: {
      enrolled_users,
    },
  });
});
