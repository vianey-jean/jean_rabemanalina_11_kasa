import logo from '../../assets/logo_white.svg' //import de la photo logo kasa pour footer

/**
 * Footer component
 * @returns {React.ReactElement} JSX.Element
 */

function Footer() {//création du méthode footer
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Kasa logo white" />{/**source du prhoto est celle qui est importer */}
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
