import React from 'react'
import { Link } from 'react-router-dom'


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
