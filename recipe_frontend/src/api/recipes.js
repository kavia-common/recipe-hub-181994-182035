import { apiGet, apiPost, apiPut, apiDelete } from './client';

// PUBLIC_INTERFACE
export async function listRecipes(query = '') {
  /** List public recipes with optional search. */
  const q = query ? `?q=${encodeURIComponent(query)}` : '';
  return apiGet(`/recipes${q}`);
}

// PUBLIC_INTERFACE
export async function getRecipe(id) {
  /** Get single recipe by id. */
  return apiGet(`/recipes/${id}`);
}

// PUBLIC_INTERFACE
export async function createRecipe(data) {
  /** Create a new recipe. */
  return apiPost('/recipes', data);
}

// PUBLIC_INTERFACE
export async function updateRecipe(id, data) {
  /** Update a recipe by id. */
  return apiPut(`/recipes/${id}`, data);
}

// PUBLIC_INTERFACE
export async function deleteRecipe(id) {
  /** Delete a recipe by id. */
  return apiDelete(`/recipes/${id}`);
}

// PUBLIC_INTERFACE
export async function listMyRecipes() {
  /** List recipes created by current user. */
  return apiGet('/me/recipes');
}

// PUBLIC_INTERFACE
export async function listFavorites() {
  /** List favorite recipes for current user. */
  return apiGet('/me/favorites');
}

// PUBLIC_INTERFACE
export async function toggleFavorite(id) {
  /** Toggle favorite status for a recipe. */
  return apiPost(`/recipes/${id}/favorite`, {});
}
