const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "This is a required field",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
