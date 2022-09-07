import React from 'react'


/**
 * Shows the details of the accommodations
 * @param {Object[]}        logement
 * @param {Number}          logement[].id
 * @param {String}          logement[].cover
 * @param {String}          logement[].title
 * @returns  {React.ReactElement} JSX.Element
 */
function card({ logement }) {  //Création de la méthode card pour mettre en place les logement sur la page accueil
  return (
      <article className="listing__card">
        <div className="listing__image">
          <img src={logement.cover} alt="intérieur du logement" /> {/**Relier la photo de logement au donné reçu */}
        </div>
        <h2 className="listing__title">{logement.title}</h2> {/**Relier la titre du logement au donné reçu */}
      </article>
  )
}

export default card
