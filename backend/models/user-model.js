const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please tell us your name"],
		trim: true,
		maxlength: [30, "Name must have less or equal then 30 characters"],
		validate: {
			validator: function (value) {
				return /[A-Za-z]/.test(value);
			},
			message: "Please enter a valid name",
		},
	},
	email: {
		type: String,
		required: [true, "Please tell us your email address"],
		trim: true,
		unique: true,
		lowercase: true,
		validate: {
			validator: function (value) {
				return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(value);
			},
			message: "Please enter a valid email address",
		},
	},
	phoneNumber: {
		type: Number,
		unique: true,
		required: false,
		maxlength: [10, "Name must have less or equal then 10 characters"],
		minlength: [10, "Name must have less or equal then 10 characters"],
	},
	photo: {
		type: String,
		default: "default.jpg",
		trim: true,
	},
	totalRatings: {
		type: Number,
		default: 0,
	},
	ratingsCount: {
		type: Number,
		default: 0,
	},
});

const User = mongoose.model("User", userSchema);
module.exports = User;
