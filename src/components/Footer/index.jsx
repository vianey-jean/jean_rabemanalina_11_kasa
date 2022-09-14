import logo from '../../assets/logo_white.svg'


function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Kasa logo white" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
