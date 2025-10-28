import React, { useState } from 'react';
import { toggleFavorite } from '../api/recipes';
import { useAuth } from '../state/authContext';
import { showToast } from './Toast';

// PUBLIC_INTERFACE
export function FavoriteButton({ recipeId, initial = false }) {
  /** Toggle favorite state; requires auth. */
  const { isAuthenticated } = useAuth();
  const [fav, setFav] = useState(initial);

  const onClick = async () => {
    if (!isAuthenticated) {
      showToast('Sign in to favorite recipes');
      return;
    }
    try {
      await toggleFavorite(recipeId);
      setFav((v) => !v);
    } catch (e) {
      showToast('Failed to update favorite');
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  return (
    <button className="btn btn-secondary" onClick={onClick} aria-pressed={fav}>
      {fav ? '★ Favorited' : '☆ Favorite'}
    </button>
  );
}
