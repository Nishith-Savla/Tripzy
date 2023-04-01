const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please provide title for the trip."],
    maxlength: [40, "A trip must have less or equal then 40 characters"],
  },
  description: {
    type: String,
    required: [true, "A tour must have a description"],
    trim: true,
  },
  coverImage: {
    type: String,
    required: [true, "A tour must have a cover image"],
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Please provide the userId to create trip."],
  },
  startDate: {
    type: Date,
    required: [true, "Please provide start date for the trip!"],
  },
  endDate: {
    type: Date,
    required: [true, "Please provide end date for the trip!"],
  },
  mapUrl: {
    type: String,
    required: [true, "Please provide the trip map url."],
  },
  itinerary: {
    type: mongoose.Schema.ObjectId,
    ref: "Itinerary",
  },
  price: {
    type: Number,
    required: [true, "Please provide the trip price."],
  },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
