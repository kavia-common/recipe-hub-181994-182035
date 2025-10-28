import React, { useEffect, useState } from 'react';
import { listMyRecipes } from '../api/recipes';
import { RecipeList } from '../components/RecipeList';

// PUBLIC_INTERFACE
export function MyRecipes() {
  /** List current user's recipes. */
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await listMyRecipes();
        setRecipes(Array.isArray(data) ? data : (data?.items || []));
      } catch (e) {
        setRecipes([]);
      }
    })();
  }, []);

  return (
    <section style={{ display: 'grid', gap: 16 }}>
      <h1>My Recipes</h1>
      <RecipeList recipes={recipes} />
    </section>
  );
}
