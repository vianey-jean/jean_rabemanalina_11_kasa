import Banner from '../../components/Banner'
import Logement from '../../components/Logement'
import './_accueil.scss'

function Accueil() {//Création de la méthode Acceuil
  return (
    <>
      <section className="banner"> {/*Faire appel le banner */}
        <Banner />
      </section>

      <section className="listeLogement"> {/* Faire appel Logement. */}
        <Logement />
      </section>
    </>
  )
}

export default Accueil
