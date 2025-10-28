import React, { useEffect, useState } from 'react';

// PUBLIC_INTERFACE
export function showToast(message, timeout = 2500) {
  /** Dispatch a custom event to display a toast. */
  const evt = new CustomEvent('toast-show', { detail: { message, timeout } });
  window.dispatchEvent(evt);
}

// PUBLIC_INTERFACE
export function ToastHost() {
  /** Toast host listens to events and renders a simple toast. */
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    const onShow = (e) => {
      setMsg(e.detail.message);
      const to = e.detail.timeout ?? 2500;
      setTimeout(() => setMsg(null), to);
    };
    window.addEventListener('toast-show', onShow);
    return () => window.removeEventListener('toast-show', onShow);
  }, []);

  if (!msg) return null;
  return <div className="toast">{msg}</div>;
}
