import { apiPost } from './client';

// PUBLIC_INTERFACE
export async function login(email, password) {
  /** Login and return { token, user }. */
  return apiPost('/auth/login', { email, password });
}

// PUBLIC_INTERFACE
export async function register(email, password) {
  /** Register and return { token, user }. */
  return apiPost('/auth/register', { email, password });
}
