import React, { useEffect, useState } from 'react';

// PUBLIC_INTERFACE
export function RecipeFormModal({ open, onClose, initial = null, onSubmit }) {
  /** Modal for creating or editing a recipe (basic fields). */
  const [title, setTitle] = useState(initial?.title || '');
  const [description, setDescription] = useState(initial?.description || '');
  const [ingredients, setIngredients] = useState((initial?.ingredients || []).join('\n'));
  const [instructions, setInstructions] = useState(initial?.instructions || '');

  useEffect(() => {
    setTitle(initial?.title || '');
    setDescription(initial?.description || '');
    setIngredients((initial?.ingredients || []).join('\n'));
    setInstructions(initial?.instructions || '');
  }, [initial, open]);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    onSubmit?.({
      title,
      description,
      ingredients: ingredients.split('\n').map(s => s.trim()).filter(Boolean),
      instructions
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
        display: 'grid', placeItems: 'center', padding: 16
      }}
      onClick={onClose}
    >
      <div className="card" style={{ width: 'min(700px, 100%)', padding: 16 }} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ marginTop: 0 }}>{initial ? 'Edit Recipe' : 'Create Recipe'}</h2>
        <form onSubmit={submit} style={{ display: 'grid', gap: 10 }}>
          <label>
            <div>Title</div>
            <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </label>
          <label>
            <div>Description</div>
            <input className="input" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <label>
            <div>Ingredients (one per line)</div>
            <textarea className="textarea" rows={5} value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
          </label>
          <label>
            <div>Instructions</div>
            <textarea className="textarea" rows={6} value={instructions} onChange={(e) => setInstructions(e.target.value)} />
          </label>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">{initial ? 'Save' : 'Create'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
