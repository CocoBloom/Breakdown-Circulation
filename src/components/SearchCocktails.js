import React, { useState, useContext } from 'react';
import ResultContainer from './ResultContainer';
import { AllCocktailsContext } from './AllCocktailsContext';

export const SearchCocktails = () => {
  const [allCocktails] = useContext(AllCocktailsContext);
  const [resultsByName, setResultsByName] = useState([]);
  const [resultByIngredient, setResultByIngredient] = useState([]);

  const hasIngredient = (cocktail, searchedIngredient) => {
    return false;
  };

  const searchCocktailsByName = (event) => {
    const keyword = event.target.value;
    let currentResult = [];
    for (let cocktail of allCocktails) {
      if (
        cocktail.strDrink.toLowerCase().startsWith(keyword.toLowerCase()) &&
        keyword !== ''
      ) {
        currentResult.push(cocktail);
      }
    }
    setResultsByName(currentResult);
    console.log(resultsByName);
  };

  const searchCocktailsByIngredient = (event) => {
    const keyword = event.target.value;
    let currentResult = [];
    for (let cocktail of allCocktails) {
      if (hasIngredient(cocktail, keyword)) {
        currentResult.push(cocktail);
      }
    }
    setResultsByName(currentResult);
    console.log(resultsByName);
  };

  const searchCocktails = () => {
    searchCocktailsByName();
    searchCocktailsByIngredient();
  };

  return (
    <React.Fragment>
      <h1>Search Cocktails</h1>
      <input type='text' onChange={searchCocktailsByName}></input>
      {resultsByName.length > 0 ? (
        <ResultContainer cocktails={resultsByName} />
      ) : (
        ``
      )}
    </React.Fragment>
  );
};
