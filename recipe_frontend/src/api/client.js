/**
 * Minimal API client using fetch with JSON helpers and Authorization support.
 */
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

/**
 * Returns default headers, adding Authorization when token exists.
 */
function defaultHeaders() {
  const token = localStorage.getItem('auth_token');
  const headers = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

// PUBLIC_INTERFACE
export async function apiGet(path) {
  /** Perform GET request to backend. */
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'GET',
    headers: defaultHeaders(),
    credentials: 'include',
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `GET ${path} failed with ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

// PUBLIC_INTERFACE
export async function apiPost(path, body) {
  /** Perform POST request to backend. */
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: defaultHeaders(),
    body: JSON.stringify(body || {}),
    credentials: 'include',
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `POST ${path} failed with ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

// PUBLIC_INTERFACE
export async function apiPut(path, body) {
  /** Perform PUT request to backend. */
  const res = await fetch(`${BASE_URL}{path}`.replace('{path}', path), {
    method: 'PUT',
    headers: defaultHeaders(),
    body: JSON.stringify(body || {}),
    credentials: 'include',
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `PUT ${path} failed with ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

// PUBLIC_INTERFACE
export async function apiDelete(path) {
  /** Perform DELETE request to backend. */
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'DELETE',
    headers: defaultHeaders(),
    credentials: 'include',
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `DELETE ${path} failed with ${res.status}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

// PUBLIC_INTERFACE
export function getBaseUrl() {
  /** Expose resolved base URL for debugging. */
  return BASE_URL;
}
