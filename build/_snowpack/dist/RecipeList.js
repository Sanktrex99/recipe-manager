import React from "../_snowpack/pkg/react.js";
function RecipeList() {
  const recipes = [
    "Chicken gumbo",
    "Pork stir fry",
    "Roast turkey",
    "Baby back ribs"
  ];
  const recipeDisplay = recipes.map((recipe) => /* @__PURE__ */ React.createElement("li", null, recipe));
  return /* @__PURE__ */ React.createElement("ul", null, recipeDisplay);
}
export default RecipeList;
