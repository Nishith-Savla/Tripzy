const admin = require("../config/firebase-config");
const User = require("../models/user-model");
const decodeToken = async (req, res, next) => {
	const token = req.headers.authorization.split(" ")[1];

	try {
		const decodeValue = await admin.auth().verifyIdToken(token);
		console.log(decodeValue);
		if (decodeValue) {
			const user = await User.findOne({ email: decodeToken.email });
			console.log(user);
			req.user = user;
			return next();
		}
		return res.json({ message: "Unauthorized" });
	} catch (e) {
		console.log(e);
		return res.json({ message: "Internal Error" });
	}
};

module.exports = decodeToken;
