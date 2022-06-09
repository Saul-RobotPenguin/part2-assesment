const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Part2Database", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error("Error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
