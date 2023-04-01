const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a title for activity."],
  },
  description: {
    type: String,
    required: [true, "Please enter a description for activity."],
  },
  imageUrl: {
    type: String,
    required: [true, "Please enter a image url for activity."],
  },
  startTime: {
    type: Date,
    required: [true, "Please enter a start time for activity."],
  },
  endTime: {
    type: Date,
    required: [true, "Please enter a end time for activity."],
  },
  mapLink: {
    type: String,
    required: [true, "Please enter a map link for activity."],
  },
  itineraryId: {
    type: mongoose.Schema.ObjectId,
    ref: "Itinerary",
    required: [true, "Please provide the itineraryId to create activity."],
  },
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
