import React from 'react';
import './App.css';
import { AppRouter } from './router';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { AuthProvider } from './state/authContext';
import { ToastHost } from './components/Toast';

// PUBLIC_INTERFACE
function App() {
  /** Root application composed with AuthProvider and the router. */
  return (
    <AuthProvider>
      <div className="app-root">
        <NavBar />
        <main className="container" role="main">
          <AppRouter />
        </main>
        <Footer />
        <ToastHost />
      </div>
    </AuthProvider>
  );
}

export default App;
