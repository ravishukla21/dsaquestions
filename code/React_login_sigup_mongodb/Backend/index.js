const express = require("express");
const cors = require("cors");
const { connection, collection } = require("./db");
const app = express();

app.use(express.json());

app.use(cors());
app.get("/", cors(), (req, res) => {
  res.send("hello world123");
});
app.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await collection.findOne({ email });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (err) {
    // console.log(err);
    res.json("notexist");
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const data = {
    name,
    email,
    password,
  };
  try {
    const check = await collection.findOne({ email });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (err) {
    res.json("notexist");
  }
});

app.listen(4500, async (req, res) => {
  try {
    await connection;
    console.log("connected to the db");
    console.log("server is running on port4500");
  } catch (err) {
    console.log(err);
    console.log("something went wrong");
  }
});
