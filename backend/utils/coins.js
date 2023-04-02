const User = require("../models/user-model");

exports.addCoins = async (user, delta) => {
	try {
		if (user.coins) {
			user.coins += delta ? delta : user.coins;
		} else {
			user.coins = delta ? delta : user.coins;
		}

		await user.save();
		return { coins: user.coins };
	} catch (error) {
		console.log(error);
		return { error: error };
	}
};
