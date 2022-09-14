import Banner from '../../components/Banner'
import Housing from '../../components/Housing'


function Accueil() {
  return (
    <>
      <section className="banner">
        <Banner />
      </section>

      <section className="listingHousing">
        <Housing />
      </section>
    </>
  )
}

export default Accueil
