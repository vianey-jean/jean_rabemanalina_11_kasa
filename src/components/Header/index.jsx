import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo_kasa.svg'

/**
 * Header component
 * @returns {React.ReactElement} JSX.Element - Header with logo and links
 */

function Header() {
  return (
    <header>
      <nav className="nav">
        <Link to="/">
          <img className="nav__logo" src={logo} alt="Kasa logo" />
        </Link>

        <div className="menu">
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
            to="/about"
          >
            A Propos
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
