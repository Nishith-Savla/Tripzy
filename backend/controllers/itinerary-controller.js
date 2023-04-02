const Itinerary = require("../models/itinerary-model");
const Trip = require("../models/trip-model");
const AppError = require("../utils/app-error");
const catchAsync = require("../utils/catch-async");

exports.createItinerary = catchAsync(async (req, res, next) => {
  const { tripId } = req.params;
  const itinerary = await Itinerary.create(req.body);
  const trip = await Trip.findOneAndUpdate(
    { _id: tripId },
    { itinerary: itinerary._id },
    { new: true, runValidators: true }
  );

  if (!trip || !itinerary) {
    return next(new AppError("No trip OR itinerary found with this Id.", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      itinerary,
      trip,
    },
  });
});

exports.getItinerary = catchAsync(async (req, res, next) => {
  const { tripId } = req.params;
  const trip = await Trip.findOne({ _id: tripId });

  if (!trip) {
    return next(new AppError("No trip found with this Id.", 404));
  }

  if (!trip.itinerary) {
    return next(new AppError("No itinerary found with this Id.", 404));
  }

  const itinerary = await Itinerary.findOne({ _id: trip.itinerary });

  res.status(200).json({
    status: "success",
    data: itinerary,
  });
});

exports.updateItinerary = catchAsync(async (req, res, next) => {
  const { tripId } = req.params;
  const trip = await Trip.findOne({ _id: tripId });

  if (!trip) {
    return next(new AppError("No trip found with this Id.", 404));
  }

  if (!trip.itinerary) {
    return next(new AppError("No itinerary found with this Id.", 404));
  }

  const itinerary = await Itinerary.findOneAndUpdate(
    { _id: trip.itinerary },
    req.body,
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: "success",
    data: itinerary,
  });
});

exports.deleteItinerary = catchAsync(async (req, res, next) => {
  const { tripId } = req.params;
  const trip = await Trip.findOne({ _id: tripId });

  if (!trip) {
    return next(new AppError("No trip found with this Id.", 404));
  }

  if (!trip.itinerary) {
    return next(new AppError("No itinerary found with this Id.", 404));
  }

  await Itinerary.findOneAndDelete({ _id: trip.itinerary });

  res.status(204).json({
    status: "success",
  });
});
