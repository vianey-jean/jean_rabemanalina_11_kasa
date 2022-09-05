/**
 * import du react et react dom
 * import du scss dans index3scss
 * import app dans app.jsx
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import App from './App'

/**
 * j'envoye dans le root le "app"
 */
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>{/**React.strictMode: est un outil pour détecter les problèmes potentiels d’une application */}
    <App />
  </React.StrictMode>
)
