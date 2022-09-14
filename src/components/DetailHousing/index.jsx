import Slider from '../../components/Slider'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'

/**
 * Shows the details of the accommodations
 * @param {Object[]}        logement
 * @param {Object[]}        logement[].pictures photos of the accommodation
 * @param {String}          logement[].title
 * @param {String}          logement[].location
 * @param {String}          logement[].tag
 * @param {String}          logement[].rating
 * @param {String}          logement[].host.name
 * @param {String}          logement[].host.picture
 * @param {String}          logement[].description
 * @param {String}          logement[].equipements
 * @returns  {React.ReactElement} JSX.Element
 */

function DetailHousing({ logement }) {
  return (
    <article className="article">
      <Slider allPictures={logement.pictures} />

      <div className="article__desktop">
        <h1 className="article__title">{logement.title}</h1>
        <p className="article__location">{logement.location}</p>
        <div className="article__tags">
          {logement.tags.map((tag) => (
            <Tag name={tag} key={tag} />
          ))}
        </div>

        <div className="article__profile">
          <Rating numberOfStars={logement.rating} />
          <div className="article__host">
            <h3>{logement.host.name.replace(' ', '\n')}</h3>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
        </div>
      </div>

      <div className="article__details">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Equipements" content={logement.equipments} />
      </div>
    </article>
  )
}

export default DetailHousing
