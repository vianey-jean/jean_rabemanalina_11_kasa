import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo_kasa.svg'//Import logo kasa

/**
 * Header component
 * @returns {React.ReactElement} JSX.Element - Header with logo and links
 */

function Header() {//création méthode header
  return (
    <header>{/**Création squelette de header */}
      <nav className="nav">{/**Création NAV */}
        <Link to="/">
          <img className="nav__logo" src={logo} alt="Kasa logo" /> {/**Lien reste sur accueil */}
        </Link>

        <div className="menu">{/**mettre class Menu */}
          <NavLink /**Lien reste sur accueil */
            className={({ isActive }) =>
              isActive ? 'menu__link menu__link__active' : 'menu__link'
            }
            to="/"
          >
            Accueil
          </NavLink>
          <NavLink /**Lien reste sur A porpos */
            className={({ isActive }) =>
              isActive ? 'menu__link menu__link__active' : 'menu__link'
            }
            to="/apropos"
          >
            A Propos
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
