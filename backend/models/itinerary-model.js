const mongoose = require("mongoose");
const Activity = require("./activity-model");

const itinerarySchema = new mongoose.Schema({
  activities: {
    type: [Activity],
    required: [true, "Please provide list of activities."],
  },
  startDate: {
    type: Date,
    required: [true, "Please provide start date for the trip!"],
  },
  endDate: {
    type: Date,
    required,
  },
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary;
