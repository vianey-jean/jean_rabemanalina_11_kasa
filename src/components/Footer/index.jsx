import logo from '../../assets/logo_white.svg'

/**
 * Footer component
 * @returns {React.ReactElement} JSX.Element
 */

function Footer() {  //création du méthode footer
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Kasa logo white" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
