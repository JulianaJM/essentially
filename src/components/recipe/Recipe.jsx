/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";

import "./recipe.scss";

const Recipe = (/* { recipes } */) => {
  // sconst titles = recipes.recipesTitle;
  // const contents = recipes.recipesContent;

  // const newRecipes = titles.map(t =>
  //   contents.map(c => {
  //     return { title: t, recipe: c };
  //   })
  // );
  return (
    <div className="recipe">
      {/* {newRecipes.map((newRecipe, index) => (
        <div key={index}>
          <h3>{newRecipe.title}</h3>
          <p>{newRecipe.recipe}</p>
        </div>
      ))} */}
      todo
    </div>
  );
};

export default Recipe;

Recipe.propTypes = {
  recipes: PropTypes.object.isRequired,
};
