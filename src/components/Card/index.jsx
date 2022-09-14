import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Shows the details of the accommodations
 * @param {Object[]}        logement
 * @param {Number}          logement[].id
 * @param {String}          logement[].cover
 * @param {String}          logement[].title
 * @returns  {React.ReactElement} JSX.Element
 */
function card({ logement }) {
  return (
    <Link className="listing__link" to={`fiche-logement/${logement.id}`}>
      <article className="listing__card">
        <div className="listing__image">
          <img src={logement.cover} alt="intérieur du logement" />
        </div>
        <h2 className="listing__title">{logement.title}</h2>
      </article>
    </Link>
  )
}

export default card
