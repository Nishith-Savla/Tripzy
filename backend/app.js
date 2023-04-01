const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const errorController = require("./controllers/error-controller");
const tripRouter = require("./routes/trip-route");
const userRouter = require("./routes/user-route");
const enrolledTripsRouter = require("./routes/enrolled-trips-route");
const activityRouter = require("./routes/activity-route");

const AppError = require("./utils/app-error");

const app = express();

app.use(cors());
app.options("*", cors());

app.use(express.json());

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// routes
app.use("/api/auth", userRouter);
app.use("/api/trips", tripRouter);
app.use("/api/activities", activityRouter);
app.use("/api/enrolledTrips", enrolledTripsRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// global error handler
app.use(errorController);

module.exports = app;
