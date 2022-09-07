import React from 'react'  //import le react
import ReactDOM from 'react-dom/client'  //import le dom de react sur client
import './styles/index.scss'//Import le style que on a besoin en sass
import App from './App'  //Import de la methode app

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>  {/**outil pour détecter les problèmes potentiels d’une application */}
    <App /> {/**liaison avec la méthode app */}
  </React.StrictMode>
)
