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
        {props.test}
        <h2>Search for Recipes</h2>
      </div>
      <p className="App-intro">
        <Search {...props} />
        <button onClick={() => props.getRecipeByName(props.searchInput)}>Search!</button>
      </p>
      {props.recipeList.map(recipe => <li key={recipe.uri}
                                          onClick={() => props.selectRecipe({recipe})}>
        {recipe.label}
      </li>)}
      <RecipeInfo recipe={props.selectedRecipe} />
    </div>
  );

const Search = ({searchInput, searchRecipes}) =>
  (<input
      placeholder="Search by recipe name"
      value={searchInput}
      name="search"
      onChange={ev => searchRecipes(ev.target.value)}
  />);

const RecipeInfo = ({recipe}) =>
{
  if (recipe) {
    return (
      <div>
        <h3>{recipe.label}</h3>
        <img src={recipe.image} />
        <p>
          <b>Ingredients</b>
          {recipe.ingredients.map(ingredients => <li key={ingredients.text}>{ingredients.text}</li>)}
        </p>
        <p>
          Source: <a href={recipe.url}>{recipe.source}</a>
        </p>
      </div>);
  }
  else {
    return null;
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
