const Itinerary = require("../models/itinerary-model");
const catchAsync = require("../utils/catch-async");
const AppError = require("../utils/app-error");
const APIFeatures = require("../utils/api-features");

exports.createActivity = catchAsync(async (req, res, next) => {
  const { itineraryId } = req.params;
  const activity = await Itinerary.findOneAndUpdate(
    { _id: itineraryId },
    { $push: { activities: req.body } }
  );

  if (!activity) {
    return next(new AppError("No itinerary found with this Id.", 404));
  }

  res.status(200).json({
    status: "success",
    data: activity,
  });
});

exports.getAllActivities = catchAsync(async (req, res, next) => {
  const { itineraryId } = req.params;

  const features = new APIFeatures(
    Itinerary.find({ _id: itineraryId }),
    req.query
  );

  const activities = await features.query;

  if (!activities) {
    return next(new AppError("No itinerary found with this Id.", 404));
  }

  res.status(200).json({
    status: "success",
    results: activities.length,
    data: activities,
  });
});

exports.getActivityById = catchAsync(async (req, res, next) => {
  const { itineraryId, activityId } = req.params;
  const activity = await Itinerary.findOne({
    _id: itineraryId,
    "activities._id": activityId,
  });

  if (!activity) {
    return next(new AppError("No activity found with this Id.", 404));
  }

  res.status(200).json({
    status: "success",
    data: activity,
  });
});

exports.updateActivityById = catchAsync(async (req, res, next) => {
  const { itineraryId, activityId } = req.params;
  const activity = await Itinerary.findOneAndUpdate(
    {
      _id: itineraryId,
      "activities._id": activityId,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!activity) {
    return next(new AppError("No activity found with this Id.", 404));
  }

  res.status(200).json({
    status: "success",
    data: activity,
  });
});

exports.deleteActivityById = catchAsync(async (req, res, next) => {
  const { itineraryId, activityId } = req.params;
  const activity = await Itinerary.findOneAndDelete({
    _id: itineraryId,
    "activities._id": activityId,
  });

  if (!activity) {
    return next(new AppError("No activity found with this Id.", 404));
  }

  res.status(204).json({
    status: "success",
  });
});
