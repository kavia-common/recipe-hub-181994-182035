import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../api/recipes';
import { RecipeDetail } from '../components/RecipeDetail';

// PUBLIC_INTERFACE
export function RecipeView() {
  /** Show a single recipe by id. */
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getRecipe(id);
        setRecipe(data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    })();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;
  return <RecipeDetail recipe={recipe} />;
}
