import Banner from '../../components/Banner'
import Chambre from '../../components/Chambre'


/**
 * Homme page
 * @returns {React.ReactElement} JSX.Element - Accueil page with banner and Chambre
 */
function Accueil() {
  return (
    <>
      <section className="banner">
        <Banner />  {/**ici la place du banner à la page acceuil */}
      </section>
      <section className="listeChambre"> 
        <Chambre /> {/**ici la place du chambre à la page acceuil */}
      </section>
      
    </>
  )
}

export default Accueil
