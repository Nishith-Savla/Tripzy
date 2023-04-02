const mongoose = require("mongoose");

const SuggessionSchema = new mongoose.Schema({
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip",
    required: [true, "Please provide trip id"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user id"],
  },
  suggession: {
    type: String,
    required: [true, "Please provide suggession"],
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
});

const Suggession = mongoose.model("Suggession", SuggessionSchema);
module.exports = Suggession;
