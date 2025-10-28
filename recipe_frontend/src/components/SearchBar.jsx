import React, { useState } from 'react';

// PUBLIC_INTERFACE
export function SearchBar({ onSearch, placeholder = 'Search recipes...' }) {
  /** Search bar with debounce-less submit. */
  const [q, setQ] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(q);
  };

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: 8 }}>
      <input
        className="input"
        placeholder={placeholder}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Search recipes"
      />
      <button className="btn btn-primary" type="submit">Search</button>
    </form>
  );
}
