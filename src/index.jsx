import React from 'react'//import le react
import ReactDOM from 'react-dom/client'//import le dom de react sur client
import './styles/index.scss'//Import le css que on a besoin
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root')) //Tous les visuels seront envoyé à id=root sur index.html
root.render(//rendu visuel
  <React.StrictMode>{/**outil pour détecter les problèmes potentiels d’une application */}
    <App />{/**liaison avec la méthode app */}
  </React.StrictMode>
)
