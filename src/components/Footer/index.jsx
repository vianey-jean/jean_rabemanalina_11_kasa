import logo from '../../assets/logo_white.svg'
import './_footer.scss'

function Footer() { //Création méthode footer
  return ( //retourn mise en forme de footer
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Kasa logo white" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
