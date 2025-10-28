import React from 'react';

// PUBLIC_INTERFACE
export function Footer() {
  /** Simple footer. */
  return (
    <footer className="footer">
      <div className="container">
        <small>© {new Date().getFullYear()} Recipe Hub — Ocean Professional theme</small>
      </div>
    </footer>
  );
}
