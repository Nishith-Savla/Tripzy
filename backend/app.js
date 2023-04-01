const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const errorController = require("./controllers/error-controller.js");
const AppError = require("./utils/app-error");

const userRouter = require("./routes/user-router");

const app = express();

app.use(cors());
app.use(express.json());

app.options("*", cors());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use("/auth", userRouter);
app.all("*", (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// global error handler
app.use(errorController);

module.exports = app;
