const MongoClient = require("mongodb").MongoClient;
let url = "abc";

MongoClient.connect(url, (err, db) => {
  if (err) {
    return err.message;
  } else {
  }
});
