import Banner from '../../components/Banner'


/**
 * Homme page
 * @returns {React.ReactElement} JSX.Element - home page with banner and housing
 */
function Home() {//Fonction Homme pour créer la page accueil
  return (
    <>
      <section className="banner">{/**Créer une section pour banner */}
        <Banner />
      </section>
    </>
  )
}

export default Home
