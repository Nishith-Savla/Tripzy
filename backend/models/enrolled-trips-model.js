const mongoose = require("mongoose");

const EnrolledTripsSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	trip_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Trip",
		required: true,
	},
	date: {
		type: Date,
		default: () => new Date(),
	},
});

module.exports = mongoose.model("EnrolledTrips", EnrolledTripsSchema);
