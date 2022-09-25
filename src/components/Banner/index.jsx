import banner from '../../assets/banner.png'
import './_banner.scss'

function Banner() { //Création de la fonction banner
  return (//Mettre en place le photo 
    <>
      <div className="banner__image">
        <img src={banner} alt="Samuel h. boardman state scenic corridor, usa" />
      </div>
      <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
    </>
  )
}

export default Banner
