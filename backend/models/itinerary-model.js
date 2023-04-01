const mongoose = require("mongoose");
const { ActivitySchema } = require("./activity-model");

const itinerarySchema = new mongoose.Schema({
  activities: {
    type: [ActivitySchema],
    required: [true, "Please provide list of activities."],
  },
  startDate: {
    type: Date,
    required: [true, "Please provide start date for the trip!"],
  },
  endDate: {
    type: Date,
    required: [true, "Please provide end date for the trip!"],
  },
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary;
