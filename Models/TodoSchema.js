const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("todo", TodoSchema);
