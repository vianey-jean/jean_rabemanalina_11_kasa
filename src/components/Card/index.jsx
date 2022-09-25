import React from 'react'
import { Link } from 'react-router-dom'
import './_card.scss'

function card({ logement }) { //création de fonction card  pour logement
  return (
    <Link className="liste__link" to={`fiche-logement/${logement.id}`}> {/* lien de logement avec son id */}
      <article className="liste__card">
        <div className="liste__image">
          <img src={logement.cover} alt="intérieur du logement" /> {/*Photo de couverture de logement précis avec son id */}
        </div>
        <h2 className="liste__title">{logement.title}</h2> {/*Titre de loogement précis avec son id*/}
      </article>
    </Link>
  )
}

export default card
