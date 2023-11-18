const mongoose = require("mongoose");
const mongourl = "mongodb://localhost:27017/login_signup";

const connection = mongoose.connect(mongourl);
const newSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);
module.exports = {
  connection,
  collection,
};
