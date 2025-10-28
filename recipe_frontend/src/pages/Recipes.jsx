import React, { useEffect, useState } from 'react';
import { listRecipes, createRecipe } from '../api/recipes';
import { RecipeList } from '../components/RecipeList';
import { SearchBar } from '../components/SearchBar';
import { RecipeFormModal } from '../components/RecipeFormModal';
import { useAuth } from '../state/authContext';
import { showToast } from '../components/Toast';

// PUBLIC_INTERFACE
export function Recipes() {
  /** Displays public recipes with search and create (if authenticated). */
  const [recipes, setRecipes] = useState([]);
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const load = async (q = '') => {
    try {
      const data = await listRecipes(q);
      setRecipes(Array.isArray(data) ? data : (data?.items || []));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      setRecipes([]);
    }
  };

  useEffect(() => { load(); }, []);

  const onCreate = async (data) => {
    try {
      await createRecipe(data);
      setOpen(false);
      showToast('Recipe created');
      load();
    } catch (e) {
      showToast('Failed to create recipe');
    }
  };

  return (
    <section style={{ display: 'grid', gap: 16 }}>
      <div className="card" style={{ padding: 16, display: 'flex', gap: 12, justifyContent: 'space-between', alignItems: 'center' }}>
        <SearchBar onSearch={load} />
        {isAuthenticated && (
          <button className="btn btn-primary" onClick={() => setOpen(true)}>+ New</button>
        )}
      </div>
      <RecipeList recipes={recipes} />
      <RecipeFormModal open={open} onClose={() => setOpen(false)} onSubmit={onCreate} />
    </section>
  );
}
