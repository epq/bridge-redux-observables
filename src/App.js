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
                                          // onClick={() => console.log(recipe)}>
                                          onClick={() => props.selectRecipe({recipe})}>
        {recipe.label}
      </li>)}
      <RecipeInfo {...props} />
    </div>
  );

const Search = ({searchInput, searchRecipes}) =>
  (<input
      placeholder="Search by recipe name"
      value={searchInput}
      name="search"
      onChange={ev => searchRecipes(ev.target.value)}
  />);

const RecipeInfo = ({...props}) =>
{
  if (props.selectedRecipe) {
    {console.log("SELECTED RECIPE")}
    return (
      <div>
        <h1>TEST</h1>
        {props.selectedRecipe.recipe.label}
      </div>);
  }
  else {
    {console.log("DID NOT SELECT RECIPE")}
    return null;
  }
};

const connectConfig = connect(state => ({
  testReducer: 'foo', // how could I potentially apply the value of the reducer on line 6 of reducers/index.js?
  recipeList: state.recipe.list,
  searchInput: state.searchInput,
  selectedRecipe: state.selectedRecipe,
}), {
  getRecipeByName: getRecipeByName, // how can we simplify this, do we remember?
  searchRecipes,
  selectRecipe,
});


export default connectConfig(App);
