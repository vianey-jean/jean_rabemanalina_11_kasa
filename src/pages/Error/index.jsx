import { Link } from 'react-router-dom'

/**
 * Error 404 page
 * @returns  {React.ReactElement} JSX.Element
 */
function Error() {
  return (
    <div className="error">
      <div className="error__message">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link className="error__redirect" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}
export default Error
