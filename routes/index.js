const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("Home"));
router.get("/lamb_recipes", controllers.getAllLambRecipes);
router.get("/lamb_recipe/:id", controllers.getSingleLambRecipe);

router.post("/create_new_lamb_recipe", controllers.createLambRecipe);

router.put("/lamb_recipes/:id", controllers.updateLambRecipe);

router.delete("/delete_lamb_recipe", controllers.deleteLambRecipe);

module.exports = router;
