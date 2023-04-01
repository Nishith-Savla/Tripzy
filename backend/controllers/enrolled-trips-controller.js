const EnrolledTripsModel = require("../models/enrolled-trips-model");
const AppError = require("../utils/app-error");

exports.get_all_enrolled_trips = async (req, res, next) => {
	try {
		const enrolled_trips = await EnrolledTripsModel.find({
			user_id: req.user.id,
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
		const { trip_id } = req.body;

		const enrolled_trip = await EnrolledTripsModel.create({
			user_id: req.user.id,
			trip_id,
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
