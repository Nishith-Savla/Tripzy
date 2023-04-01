const User = require("../models/user-model");
const AppError = require("../utils/app-error");
const admin = require("../config/firebase-config");

exports.store_user_in_mongodb = async (req, res, next) => {
	try {
		const { token } = req.body;

		const decodeValue = await admin.auth().verifyIdToken(token);

		if (decodeValue) {
			const prev_user = User.findOne({ email: decodeValue.email });
			// console.log(prev_user);
			if (prev_user) {
				return next(new AppError("User already exists", 400));
			}

			const user_obj = await User.create({
				name: decodeValue.name,
				email: decodeValue.email,
				phoneNumber: null,
				photo: decodeValue.picture,
				totalRatings: 0,
				ratingsCount: 0,
			});

			return res.status(200).json({
				status: "success",
				data: {
					user: user_obj,
					id: user_obj.inserted_id,
				},
			});
		}

		res.send("User created successfully");
	} catch (error) {
		console.log(error);
		res.status(400).send("Some error occured");
	}
};
