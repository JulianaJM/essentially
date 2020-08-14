/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import { replaceUnderscorebySpace } from "../../utils/replace";
import Collapse from "../common/collapse/Collapse";
import "./recipe.scss";

const Recipe = ({ name, recipes, activeTabs, onToggle }) => {
  const newName = replaceUnderscorebySpace(name);
  const titles = recipes.recipesTitle;
  const contents = recipes.recipesContent.map(content => {
    return content.split("/");
  });
  const newRecipes = titles.map((title, index) => ({
    title,
    steps: contents[index],
  }));

  const total = newRecipes.length;
  return (
    <div className="recipe">
      <h2 className="oil-title">{newName}</h2>
      <h3 className="recipe__total">
        {total > 1 ? `${total} recettes` : `${total} recette`}
      </h3>
      <div className="recipe__collapse">
        {newRecipes.map((newRecipe, index) => (
          <button
            id={`recipe_${index}`}
            className="recipe__line"
            onClick={onToggle}
            type="button"
            key={index}
          >
            <Collapse
              title={newRecipe.title}
              content={
                <div className="recipe__content">
                  {newRecipe.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </div>
              }
              isOpen={activeTabs.includes(`recipe_${index}`)}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Recipe);

Recipe.propTypes = {
  recipes: PropTypes.object.isRequired,
  activeTabs: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
