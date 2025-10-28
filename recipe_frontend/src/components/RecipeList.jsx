import React from 'react';
import { RecipeCard } from './RecipeCard';

// PUBLIC_INTERFACE
export function RecipeList({ recipes = [] }) {
  /** Grid of recipe cards. */
  if (!recipes?.length) {
    return <p style={{ color: 'var(--muted)' }}>No recipes found.</p>;
  }
  return (
    <div className="grid grid-3">
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}
    </div>
  );
}
