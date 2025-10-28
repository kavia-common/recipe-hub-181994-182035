import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../state/authContext';
import { showToast } from '../components/Toast';

// PUBLIC_INTERFACE
export function AuthPage() {
  /** Sign in / Register UI. */
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (mode === 'login') {
        await login(email, password);
        showToast('Signed in');
      } else {
        await register(email, password);
        showToast('Account created');
      }
      navigate(from, { replace: true });
    } catch (err) {
      showToast('Authentication failed');
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return (
    <section style={{ display: 'grid', gap: 16, maxWidth: 480, margin: '0 auto' }}>
      <div className="card" style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h2 style={{ margin: 0 }}>{mode === 'login' ? 'Sign in' : 'Create account'}</h2>
          <button
            className="btn btn-secondary"
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
          >
            {mode === 'login' ? 'Need an account?' : 'Have an account?'}
          </button>
        </div>
        <form onSubmit={submit} style={{ display: 'grid', gap: 12, marginTop: 12 }}>
          <label>
            <div>Email</div>
            <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            <div>Password</div>
            <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button className="btn btn-primary" type="submit">
            {mode === 'login' ? 'Sign in' : 'Create account'}
          </button>
        </form>
      </div>
      <p style={{ color: 'var(--muted)', textAlign: 'center' }}>
        API: {process.env.REACT_APP_API_URL || 'http://localhost:3001'}
      </p>
    </section>
  );
}
