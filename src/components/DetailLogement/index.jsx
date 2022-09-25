import Slider from '../Slider'
import Tag from '../Tag'
import Rating from '../Rating'
import Collapse from '../Collapse'
import './_detailLogement.scss'

function DetailLogement({ logement }) {
 //Cration de fonction detailLogement
  return (
    <article className="article">
      <Slider allPictures={logement.pictures} /> {/* Mettre en place le slider */}
      <div className="article__desktop">
        <div className="left">
          <h1 className="article__title">{logement.title}</h1> {/* Tittre de logement */}
          <p className="article__location">{logement.location}</p> {/* Location du logement */}
          <div className="article__tags">
            {logement.tags.map((tag) => (
              <Tag name={tag} key={tag} /> 
            ))} {/* Mettre en place le tags du logement*/}
          </div>
          
        </div>
        
        <div className="article__profile">
          <Rating numberOfStars={logement.rating} /> {/* Mettre en place les etoiles de logement */}
          <div className="article__host">
            <h3>{logement.host.name.replace(' ', '\n')}</h3>
            <img src={logement.host.picture} alt={logement.host.name} /> {/* Mettr en place le photo de profil */}
          </div>
        </div>
      </div>

      <div className="article__details">
        <Collapse title="Description" content={logement.description} /> {/* Mettre en place les description de logements avec utilisation de la fonction collapse */}
        <Collapse title="Equipements" content={logement.equipments} /> {/* Mettre en place les renseigment des equipements dans logements en utilisant la fonction  collapse */}
      </div>
    </article>
  )
}

export default DetailLogement
