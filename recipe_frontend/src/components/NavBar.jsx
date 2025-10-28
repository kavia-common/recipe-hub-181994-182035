import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../state/authContext';

const linkClass = ({ isActive }) => 'nav-link' + (isActive ? ' active' : '');

// PUBLIC_INTERFACE
export function NavBar() {
  /** Top navigation bar with sections and auth controls. */
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="badge">Recipe Hub</span>
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/recipes" className={linkClass}>Recipes</NavLink>
          {isAuthenticated && (
            <>
              <NavLink to="/my" className={linkClass}>My Recipes</NavLink>
              <NavLink to="/favorites" className={linkClass}>Favorites</NavLink>
            </>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {!isAuthenticated ? (
            <button className="btn btn-primary" onClick={() => navigate('/auth')}>Sign in</button>
          ) : (
            <>
              <span className="badge">{user?.email || 'Account'}</span>
              <button className="btn btn-secondary" onClick={onLogout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
