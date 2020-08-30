/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { searchRecipe } from "../../services/elasticSearch";
import useAsyncError from "../../utils/useAsyncError";
import Recipe from "../../components/recipe/Recipe";
import { scrollTop } from "../../utils/scroll";
import { removeUselessElement } from "../../utils/arrayUtils";

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

      const terms = removeUselessElement(value.toLowerCase().split(" "));
      searchRecipe(terms)
        .then(res => {
          const newRecipes = { recipesTitle: [], recipesContent: [] };
          res.data.hits.forEach(r => {
            const { recipesTitle, recipesContent } = r._source.recipes;
            const valueSplit = removeUselessElement(
              value.split(" ").map(curr => curr.toLowerCase())
            );

            recipesTitle.forEach((title, j) => {
              const titleSplit = removeUselessElement(
                title.split(" ").map(curr => curr.toLowerCase())
              );

              const isIncluded = valueSplit.some(val =>
                titleSplit.includes(val)
              );

              if (isIncluded && !newRecipes.recipesTitle.includes(title)) {
                newRecipes.recipesTitle.push(title);
                newRecipes.recipesContent.push(recipesContent[j]);
              }
            });
          });
          setRecipes(newRecipes);
        })
        .catch(() => {
          throwError(new Error("An error occured while search recipe"));
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

  const onResetInput = () => {
    setValue("");
    setRecipes(null);
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
          placeholder="indiquer le symptome et valider ..."
          onChange={onValueChange}
          onKeyDown={onKeyDown}
          value={value}
        />
        <button type="button" onClick={onSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {value && (
          <button type="button" className="reset-btn" onClick={onResetInput}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        )}
      </div>

      {recipes && recipes.recipesTitle.length > 0 && (
        <Recipe
          name=""
          recipes={recipes}
          activeTabs={activeTabs}
          onToggle={handleToggle}
        />
      )}

      {recipes && recipes.recipesTitle.length === 0 && (
        <p className="no-result">Aucun résultat trouvé</p>
      )}
    </div>
  );
};

export default RecipeSearch;
