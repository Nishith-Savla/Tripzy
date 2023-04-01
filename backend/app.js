const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const errorController = require("./controllers/error-controller");
const tripRouter = require("./routes/trip-route");
const AppError = require("./utils/app-error");

const app = express();

app.use(cors());
app.use(express.json());

app.options("*", cors());

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use("/auth", userRouter);
// routes
app.use("/api/trips", tripRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// global error handler
app.use(errorController);

module.exports = app;
