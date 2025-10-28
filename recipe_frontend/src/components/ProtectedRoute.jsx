import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../state/authContext';

// PUBLIC_INTERFACE
export function ProtectedRoute({ children }) {
  /** Redirects to /auth if not authenticated. */
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }
  return children;
}
