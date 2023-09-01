const mongooose = require("mongoose");

mongooose.connect("mongodb://localhost:27017/company");

const express = require("express");

const app = express();

app.set("view engine ", "ejs");
app.set("views", "./views");

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.listen(3000, () => {
  console.log("server is running ");
});
