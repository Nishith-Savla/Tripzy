const EnrolledTripsModel = require("../models/enrolled-trips-model");
const AppError = require("../utils/app-error");

exports.get_all_enrolled_trips = async (req, res, next) => {
	try {
		const enrolled_trips = await EnrolledTripsModel.find({
			userId: req.user.id,
		});
		res.status(200).json({
			status: "success",
			data: {
				enrolled_trips,
			},
		});
	} catch (error) {
		next(new AppError(error.message, 400));
	}
};

exports.store_enrolled_trip = async (req, res, next) => {
	try {
		const { tripId } = req.body;
		// Checking if user is already enrolled in the trip
		const check = await EnrolledTripsModel.findOne({
			userId: req.user._id,
			tripId: tripId,
		});

		if (check) {
			return next(new AppError("You are already enrolled in this trip", 400));
		}
		const enrolled_trip = await EnrolledTripsModel.create({
			userId: req.user._id,
			tripId: tripId,
		});

		res.status(200).json({
			status: "success",
			data: {
				enrolled_trip,
			},
		});
	} catch (error) {
		next(new AppError(error.message, 400));
	}
};

exports.get_enrolled_users = async (req, res, next) => {
	try {
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
	} catch (error) {
		next(new AppError(error.message, 400));
	}
};
