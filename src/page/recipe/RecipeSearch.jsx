/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { searchRecipe } from "../../services/elasticSearch";
import useAsyncError from "../../utils/useAsyncError";
import Recipe from "../../components/recipe/Recipe";
import { scrollTop } from "../../utils/scroll";

import "./recipe-search.scss";

const RecipeSearch = () => {
  const [value, setValue] = useState("");
  const [recipes, setRecipes] = useState(null);
  const throwError = useAsyncError();
  const [activeTabs, setActiveTabs] = useState([""]);

  useEffect(() => {
    scrollTop();
  }, []);

  const onSearch = () => {
    if (value) {
      scrollTop();

      searchRecipe(value.toLowerCase())
        .then(res => {
          const newRecipes = { recipesTitle: [], recipesContent: [] };
          res.data.hits.forEach(r => {
            const { recipesTitle, recipesContent } = r._source.recipes;
            recipesTitle.forEach((title, j) => {
              if (title.toLowerCase().includes(value.toLowerCase())) {
                newRecipes.recipesTitle.push(title);
                newRecipes.recipesContent.push(recipesContent[j]);
              }
            });
          });
          setRecipes(newRecipes);
        })
        .catch(() => {
          throwError(new Error("An error occured while search"));
        });
    }
  };

  const onValueChange = e => {
    const val = e.currentTarget.value;
    setValue(val);
    if (!val) {
      setRecipes(null);
    }
  };

  const onKeyDown = event => {
    if (event.keyCode === 13) {
      onSearch(value);
    }
  };

  const handleToggle = e => {
    const currentTab = e.currentTarget.id;
    if (!activeTabs.includes(currentTab)) {
      setActiveTabs([...activeTabs, currentTab]);
    } else {
      setActiveTabs(activeTabs.filter(f => f !== currentTab));
    }
  };

  return (
    <div className="recipe-search">
      <h2 className="recipe-search__title">Rechercher une recette </h2>
      <div className="recipe-search__bar">
        <input
          type="text"
          placeholder="Rechercher une recette en indiquant votre symptome ..."
          onChange={onValueChange}
          onKeyDown={onKeyDown}
        />
        <button type="button" onClick={onSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {recipes && recipes.recipesTitle.length > 0 && (
        <Recipe
          name=""
          recipes={recipes}
          activeTabs={activeTabs}
          onToggle={handleToggle}
        />
      )}
    </div>
  );
};

export default RecipeSearch;
