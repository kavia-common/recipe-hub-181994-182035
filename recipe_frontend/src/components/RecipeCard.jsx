import React from 'react';
import { Link } from 'react-router-dom';
import { FavoriteButton } from './FavoriteButton';

// PUBLIC_INTERFACE
export function RecipeCard({ recipe }) {
  /** Card displaying recipe summary. */
  return (
    <div className="card" style={{ padding: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 12 }}>
        <div>
          <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none' }}>
            <h3 style={{ margin: '0 0 4px' }}>{recipe.title || 'Untitled recipe'}</h3>
          </Link>
          <p style={{ margin: 0, color: 'var(--muted)' }}>
            {recipe.description || 'No description provided.'}
          </p>
        </div>
        <FavoriteButton recipeId={recipe.id} initial={Boolean(recipe.favorited)} />
      </div>
      {recipe.tags?.length ? (
        <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {recipe.tags.map((t) => <span key={t} className="badge">{t}</span>)}
        </div>
      ) : null}
    </div>
  );
}
