import combineReducers from 'redux/es/combineReducers';
import recipeReducer from './recipe.reducer';
import { RECIPE_ACTIONS } from '../actions/recipe.actions';

const searchInput = (state = '', { type, payload }) => {
  if(type === RECIPE_ACTIONS.SEARCH_RECIPES) {
    return payload;
  }
  return state;
};

// heres an example of using combineReducers to make a larger reducer! the object it gets represents
// your final global state object, so you can structure this in a way that makes sense
// but keep it as flat as possible!
export default combineReducers({
  recipe: recipeReducer,
  searchInput,
  testReducer: (state = 'foobar', action) => state // a boring reducer just to illustrate combine reducer
});
