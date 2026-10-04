import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'

// HashRouter works on any static host (URLs look like /#/work).
// If your host supports SPA fallback (Netlify, Vercel, Cloudflare Pages),
// swap HashRouter for BrowserRouter to get clean URLs like /work.
createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
