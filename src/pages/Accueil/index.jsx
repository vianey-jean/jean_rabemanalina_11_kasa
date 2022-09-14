import Banner from '../../components/Banner'
import Logement from '../../components/Logement'


function Accueil() {
  return (
    <>
      <section className="banner">
        <Banner />
      </section>

      <section className="listingHousing">
        <Logement />
      </section>
    </>
  )
}

export default Accueil
