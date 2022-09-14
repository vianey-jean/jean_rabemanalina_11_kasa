import { Link } from 'react-router-dom'


function Erreur() {
  return (
    <div className="erreur">
      <div className="erreur__message">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link className="erreur__redirect" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}
export default Erreur
