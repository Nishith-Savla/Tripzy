const User = require("../models/user-model");
const catchAsync = require("../utils/catch-async");
const AppError = require("../utils/app-error");
const { addCoins } = require("../utils/coins");

exports.addCoins = catchAsync(async (req, res, next) => {
	try {
		const { delta } = req.body;
		const { user } = req;
		console.log(user.coins);
		const result = await addCoins(user, delta);

		if (!result.error) {
			res.status(200).json({
				status: "success",
				data: {
					coins: user.coins,
				},
			});
		} else {
			return next(new AppError(`Can't add coins`, 400));
		}
	} catch (error) {
		console.log(error);
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
