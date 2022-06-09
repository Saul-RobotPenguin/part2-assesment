const LambRecipe = require("../models/lambRecipes");
const OriginCountry = require("../models/originCountry");

const createLambRecipe = async (req, res) => {
  try {
    const lamb_recipe = await new LambRecipe(req.body);
    await lamb_recipe.save();
    return res.status(201).json({
      data: lamb_recipe,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getSingleLambRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const lamb_recipe = await LambRecipe.findById(id);
    if (lamb_recipe) {
      return res.status(200).json({ SingleLambRecipe: lamb_recipe });
    }
    return res.status(404).send("Lamb Recipe Not Found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllLambRecipes = async (req, res) => {
  try {
    const lamb_recipes = await LambRecipe.find();
    return res.status(200).json({ data: lamb_recipes });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateLambRecipe = (req, res) => {
  try {
    const { id } = req.params;
    LambRecipe.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (error, lamb_recipe) => {
        if (error) {
          res.status(500).send(error);
        }
        if (!lamb_recipe) {
          res.status(500).send("Lamb Recipe Could Not Be Found!");
        }
        return res.status(200).json({ updatedLambRecipe: lamb_recipe });
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteLambRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await LambRecipe.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Lamb Recipe has been deleted");
    }
    throw new Error("Lamb Recipe not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createLambRecipe,
  getSingleLambRecipe,
  getAllLambRecipes,
  updateLambRecipe,
  deleteLambRecipe,
};
