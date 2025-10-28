import React from 'react';
import { FavoriteButton } from './FavoriteButton';

// PUBLIC_INTERFACE
export function RecipeDetail({ recipe }) {
  /** Detailed view of a recipe. */
  if (!recipe) return null;
  return (
    <article className="card" style={{ padding: 20 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: '0 0 6px' }}>{recipe.title}</h1>
          <p style={{ margin: 0, color: 'var(--muted)' }}>{recipe.description}</p>
        </div>
        <FavoriteButton recipeId={recipe.id} initial={Boolean(recipe.favorited)} />
      </header>

      {recipe.ingredients?.length ? (
        <>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
          </ul>
        </>
      ) : null}

      {recipe.instructions ? (
        <>
          <h3>Instructions</h3>
          <p style={{ whiteSpace: 'pre-wrap' }}>{recipe.instructions}</p>
        </>
      ) : null}
    </article>
  );
}
