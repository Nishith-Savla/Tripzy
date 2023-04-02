const Suggession = require("../models/suggession-model");
const catchAsync = require("../utils/catch-async");
const AppError = require("../utils/app-error");

exports.createSuggession = catchAsync(async (req, res, next) => {
  const { tripId } = req.params;
  const suggession = await Suggession.create(req.body);

  if (!suggession) {
    return next(new AppError("No suggession found with this Id.", 404));
  }

  res.status(201).json({
    status: "success",
    data: suggession,
  });
});

exports.getAllSuggessions = catchAsync(async (req, res, next) => {
  const { tripId } = req.params;
  const suggessions = await Suggession.find({ trip: tripId });

  res.status(200).json({
    status: "success",
    results: suggessions.length,
    data: suggessions,
  });
});
