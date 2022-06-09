const origin_country = require("./originCountry");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LambRecipe = new Schema({
  title: { type: String, required: true },
  origin_country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Origin Country",
  },
  ingredients: { type: String, required: true },
  picture: { type: String, required: true },
});

module.exports = mongoose.model("Lamb Recipes", LambRecipe);
