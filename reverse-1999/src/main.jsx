// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'

const showErrorOverlay = err => {
  const ErrorOverlay = customElements.get('vite-error-overlay');
  if (!ErrorOverlay) return;
  console.error('Runtime Error:', err);
  const overlay = new ErrorOverlay(err);
  document.body.appendChild(overlay);
};

window.addEventListener('error', showErrorOverlay);
window.addEventListener('unhandledrejection', ({ reason }) => showErrorOverlay(reason));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
