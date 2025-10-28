import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export function Home() {
  /** Simple landing page. */
  return (
    <section className="card" style={{ padding: 24 }}>
      <h1 style={{ marginTop: 0 }}>Welcome to Recipe Hub</h1>
      <p style={{ color: 'var(--muted)' }}>
        Discover, save, and manage your favorite recipes with a clean and modern interface.
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        <Link to="/recipes" className="btn btn-primary">Browse Recipes</Link>
        <Link to="/auth" className="btn btn-secondary">Sign in</Link>
      </div>
    </section>
  );
}
