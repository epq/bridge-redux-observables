import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getRecipeByName, searchRecipes, selectRecipe } from './redux/actions/recipe.actions';


// remember, props should now have data coming in from redux state!
// because of this, we don't even need to make our 'top level' components stateful!
const App = props =>
  (
    <div className="App">
      <div className="App-header">
        <h2>Search for Recipes</h2>
      </div>
        <div className="search-bar">
          <Search {...props} />
        </div>
      <div className="container">
        <RecipeList {...props} />
        <RecipeInfo recipe={props.selectedRecipe} />
      </div>
    </div>
  );

const Search = ({searchInput, searchRecipes, getRecipeByName}) => {
  return (
    <div>
      <input
        placeholder="Search by recipe name"
        value={searchInput}
        name="search"
        onChange={ev => searchRecipes(ev.target.value)} />
      <button onClick={() => getRecipeByName(searchInput)}>Search!</button>
    </div>
  );
};

const RecipeList = ({recipeList, selectRecipe}) => {
    if (recipeList.length > 0) {
      return (
      <div className="recipe-info">
        <h3>Recipes</h3>
        {recipeList.map(recipe => <li key={recipe.uri}
                                      onClick={() => selectRecipe({recipe})}>
          {recipe.label}
        </li>)}
      </div>
      );
    }
    else {
      return null;
    }
};

const RecipeInfo = ({recipe}) => {
  if (recipe) {
    return (
      <div className="recipe-info">
        <h3>{recipe.label}</h3>
        <img src={recipe.image} />
        <p>
          <b>Ingredients:</b>
          {recipe.ingredients.map(ingredients => <li key={ingredients.text}>{ingredients.text}</li>)}
        </p>
        <p>
          Source: <a href={recipe.url}>{recipe.source}</a>
        </p>
      </div>);
  }
  else {
    return (
      <div className="recipe-info"></div>
    );
  }
};

const connectConfig = connect(state => ({
  recipeList: state.recipe.list,
  searchInput: state.searchInput,
  selectedRecipe: state.recipe.selectedRecipe,
}), {
  getRecipeByName,
  searchRecipes,
  selectRecipe,
});


export default connectConfig(App);
