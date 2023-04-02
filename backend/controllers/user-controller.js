const User = require("../models/user-model");
const AppError = require("../utils/app-error");
const catchAsync = require("../utils/catch-async");
const admin = require("../config/firebase-config");
const { log } = require("console");

exports.protect = catchAsync(async (req, res, next) => {
	try {
		if (!req.headers.authorization) {
			return next(new AppError("Please sign in to continue", 401));
		}

		const token = req.headers.authorization.split(" ")[1];

		const decodeValue = await admin.auth().verifyIdToken(token);
		if (!decodeValue) {
			res.status(403).json({
				status: "fail",
				message: "Access token invalid! Please login again.",
			});
		}

		const user = await User.findOne({ email: decodeValue.email });
		req.user = user;
		return next();
	} catch (error) {
		console.log(error);
		return next(new AppError("Internal Error", 500));
	}
});

exports.createUser = catchAsync(async (req, res, next) => {
	const { token } = req.body;

	const decodeValue = await admin.auth().verifyIdToken(token);
	console.log(decodeValue);

	if (decodeValue) {
		const user = await User.findOne({ email: decodeValue.email });

		if (user) {
			return res.status(200).json({
				status: "success",
				data: {
					id: user._id,
				},
			});
		}

		const newUser = await User.create({
			name: decodeValue.name,
			email: decodeValue.email,
			phoneNumber: null,
			photo: decodeValue.picture,
			totalRatings: 0,
			ratingsCount: 0,
		});

		res.status(200).json({
			status: "success",
			data: {
				id: newUser["_id"],
			},
		});
	}
});
