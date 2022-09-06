import banner from '../../assets/banner.png' //import image pour mettre dans le banner

/**
 * Banner component
 * @returns {React.ReactElement} JSX.Element - banner image and title
 */
function Banner() { //création méthode banner
  return (
    <>
      <div className="banner__image">
        <img src={banner} alt="Samuel h. boardman state scenic corridor, usa" />{/**mettre l'image dans le banner */}
      </div>
      <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
    </>
  )
}

export default Banner
