const express = require("express");
const { Todo } = require("./models");
const todoRoutes = require("./routes/todo");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/todos", todoRoutes);
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));
app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.listen(3000, () => {
  console.log("listening ....");
});
