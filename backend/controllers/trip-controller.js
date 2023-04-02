const Trip = require("../models/trip-model");
const EnrolledTripsModel = require("../models/enrolled-trips-model");
const catchAsync = require("../utils/catch-async");
const AppError = require("../utils/app-error");
const APIFeatures = require("../utils/api-features");
const { addCoins } = require("../utils/coins");
const schedule = require("node-schedule");
const User = require("../models/user-model");

exports.createTrip = catchAsync(async (req, res, next) => {
	console.log(req.body);
	try {
		req.body.createdBy = req.user._id;
		const trip = await Trip.create(req.body);
		addCoins(req.user, 50);

		const endDate = new Date(trip.enddate);

		const job = schedule.scheduleJob(endDate, function () {
			EnrolledTripsModel.find({ tripId: trip._id })
				.populate("UserId")
				.then((enrolledUsers) => {
					enrolledUsers.forEach(async (obj) => {
						let user = obj.userId;
						user = await User.findById(user._id);
						console.log("Updating coins for user: " + user.email);
						console.log("Previoud coins: " + user.coins);
						addCoins(user, 10);
					});
				});
		});

		res.status(201).json({
			status: "success",
			data: trip,
		});
	} catch (error) {
		console.log(error);
		return next(new AppError(`Can't create trip`, 400));
	}
});

exports.getTripsByName = catchAsync(async (req, res, next) => {
	const { text } = req.query;
	const regexTitle = new RegExp(text, "i");
	console.log(regexTitle);

	const features = new APIFeatures(Trip.find({ title: regexTitle }), req.query);

	const trips = await features.query;

	res.status(200).json({
		status: "success",
		results: trips.length,
		data: trips,
	});
});

exports.getTripById = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const trip = await Trip.findById(id);

	if (!trip) {
		return next(new AppError("No trip found with this Id.", 404));
	}

	res.status(200).json({
		status: "success",
		data: trip,
	});
});

exports.getAllTrips = catchAsync(async (req, res, next) => {
	// const features = new APIFeatures(Trip.find(), req.query)
	// 	.filter()
	// 	.sort()
	// 	.fieldLimit()
	// 	.pagination();
	// const trips = await features.query;
	const trips = await Trip.find().populate("createdBy");

	res.status(200).json({
		status: "success",
		results: trips.length,
		data: trips,
	});
});

exports.updateTrip = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const updatedTrip = await Trip.findByIdAndUpdate(id, req.body, {
		new: true,
		runValidators: true,
	});

	if (!updatedTrip) {
		return next(new AppError("No tour found with this Id.", 404));
	}

	res.status(200).json({
		status: "success",
		data: updatedTrip,
	});
});

exports.deleteTrip = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const trip = await Trip.findByIdAndDelete(id);

	if (!trip) {
		return next(new AppError("No trip found with that Id", 404));
	}

	res.status(204).json({
		status: "success",
	});
});

exports.myTrips = catchAsync(async (req, res, next) => {
	const trips = await Trip.find({ createdBy: req.user._id }).populate(
		"createdBy"
	);

	res.status(200).json({
		status: "success",
		results: trips.length,
		data: trips,
	});
});
