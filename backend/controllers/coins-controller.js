const User = require("../models/user-model");
const catchAsync = require("../utils/catch-async");
const AppError = require("../utils/app-error");

exports.addCoins = catchAsync(async (req, res, next) => {
	try {
		const { delta } = req.body;
		const { user } = req;
		console.log(user.coins);
		if (user.coins) {
			user.coins += delta ? delta : user.coins;
		} else {
			user.coins = delta ? delta : user.coins;
		}
		await user.save();

		res.status(200).json({
			status: "success",
			data: {
				coins: user.coins,
			},
		});
	} catch (error) {
		console.log(error);

		return next(new AppError(`Can't add coins`, 400));
	}
});

exports.getCoins = catchAsync(async (req, res, next) => {
	try {
		const { user } = req;
		res.status(200).json({
			status: "success",
			data: {
				coins: user.coins,
			},
		});
	} catch (error) {
		console.log(error);
		return next(new AppError(`Can't get coins`, 400));
	}
});
