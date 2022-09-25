import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo_kasa.svg'
import './_header.scss'

function Header() { //Création de méthode header
  return (
    <header>
      <nav className="nav">
        <Link to="/">
          <img className="nav__logo" src={logo} alt="Kasa logo" /> {/*Lien de la page acceuil avec le logo  en utilisant Link de react router*/}
        </Link>

        <div className="menu"> {/* Lien sur la page accueil avec "Acceuil" en utilisant Link de react router**/}
          <NavLink
            className={({ isActive }) =>
              isActive ? 'menu__link menu__link__active' : 'menu__link'
            }
            to="/"
          >
            Accueil
          </NavLink>
          <NavLink 
            className={({ isActive }) =>
              isActive ? 'menu__link menu__link__active' : 'menu__link'
            }
            to="/apropos"
          >{/* Lien vers la page à propos  en utilisant le NavLink de react router*/}
            A Propos
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
