import React, { useEffect, useState } from 'react';
import { listFavorites } from '../api/recipes';
import { RecipeList } from '../components/RecipeList';

// PUBLIC_INTERFACE
export function Favorites() {
  /** List user's favorite recipes. */
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await listFavorites();
        setRecipes(Array.isArray(data) ? data : (data?.items || []));
      } catch (e) {
        setRecipes([]);
      }
    })();
  }, []);

  return (
    <section style={{ display: 'grid', gap: 16 }}>
      <h1>Favorites</h1>
      <RecipeList recipes={recipes} />
    </section>
  );
}
