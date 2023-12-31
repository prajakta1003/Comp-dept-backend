const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema(
  {
    category: {
      type: String,
    },
    live: {
      type: Boolean,
    },
    attende: [
      {
        id: { type: String },
        name: { type: String },
        score: { type: Number },
        year: { type: String },
        email: { type: String },
        startedAt: { type: String },
        submittedAt: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Score", scoreSchema);
