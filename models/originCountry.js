const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const origin_country = new Schema({
  name: { type: String, required: true },
  country_flag: { type: String, required: true },
  moto: { type: String, required: true },
});

module.exports = mongoose.model("Origin Country", origin_country);
