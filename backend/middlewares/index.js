const admin = require("../config/firebase-config");

const decodeToken = async (req, res, next) => {
	const token = req.headers.authorization.split(" ")[1];
	try {
		const decodeValue = await admin.auth().verifyIdToken(token);
		if (decodeValue) {
			console.log(decodeValue);
			req.decodeToken = decodeValue;
			return next();
		}
		return res.json({ message: "Unauthorized" });
	} catch (e) {
		console.log(e);
		return res.json({ message: "Internal Error" });
	}
};

module.exports = decodeToken;
