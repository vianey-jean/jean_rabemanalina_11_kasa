import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode> {/**vérifications et des avertissements supplémentaires pour ses descendants */}
    <BrowserRouter> {/**synchronise l'interface utilisateur avec l'URL actuelle de votre navigateur */}
      <App />  {/**Insertion de la veleur du fonction app */}
    </BrowserRouter>
  </React.StrictMode>
)
