export const RECIPE_ACTIONS = {
  // user actions
  GET_RECIPES_BY_NAME: 'GET_RECIPES_BY_NAME',

  // epic actions
  RECIPES_RECEIVED_SUCCESS: 'RECIPES_RECEIVED_SUCCESS',
  RECIPES_RECEIVED_ERROR: 'RECIPES_RECEIVED_ERROR',

  SEARCH_RECIPES: 'SEARCH_RECIPES',
  SELECT_RECIPE: 'SELECT_RECIPE',
};

export const getRecipeByName = recipeName => ({
  type: RECIPE_ACTIONS.GET_RECIPES_BY_NAME,
  payload: recipeName
});

export const searchRecipes = value => ({
  type: RECIPE_ACTIONS.SEARCH_RECIPES,
  payload: value,
});

export const selectRecipe = value => ({
  type: RECIPE_ACTIONS.SELECT_RECIPE,
  payload: value.recipe,
});


