import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Recipes } from './pages/Recipes';
import { RecipeView } from './pages/RecipeView';
import { MyRecipes } from './pages/MyRecipes';
import { Favorites } from './pages/Favorites';
import { AuthPage } from './pages/Auth';
import { ProtectedRoute } from './components/ProtectedRoute';

// PUBLIC_INTERFACE
export function AppRouter() {
  /** Defines application routes. */
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/:id" element={<RecipeView />} />
      <Route
        path="/my"
        element={
          <ProtectedRoute>
            <MyRecipes />
          </ProtectedRoute>
        }
      />
      <Route
        path="/favorites"
        element={
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        }
      />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
