import { useRoutes } from 'react-router-dom'
import { routes } from './routes/routes'


function App() {//Création de la fonction app
  let main = useRoutes(routes) //Variable main qui import routes dans routes/routes.jsx
  return (
    <>
      {main} {/**ici l'insertion des valeurs dans le main */}
    </>
  )
}
export default App
