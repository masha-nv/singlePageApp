const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose
  .connect("mongodb://localhost:27017/todoV3", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function () {
    console.log("Connected to Db");
  })
  .catch((e) => console.log(e));

module.exports.Todo = require("./todo");
