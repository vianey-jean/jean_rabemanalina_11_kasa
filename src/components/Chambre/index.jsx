import { getData } from '../../service/service'
import React, { useEffect, useState } from 'react'
import Card from '../Card'
import Loader from '../Loader'

/**
 * Presentation of all accommodation
 * @returns {React.ReactElement} JSX.Element - List of accommodation
 */
function Chambre() {
  /**
   * P.M.
   * useState - Hook d'état - :est un Hook qui permet d’ajouter l’état local React à des fonctions composants.
   * Appeler useState déclare une variable d'état (ici LogementsData - Normalement, les variables « disparaissent » quand la fonction s’achève mais les variables d’état sont préservées par React)
   * Argument passé à useState : ici [], soit un tableau vide.
   * useState renvoie une paire de valeurs : l'état actuel et une fonction pour le modifier.
   *
   * Nous déclarons une variable d‘état appelée LogementsData, et l’initialisons avec un tableau vide.
   * React se rappellera sa valeur entre deux affichages et fournira la plus récente à notre fonction.
   * Si nous voulons modifier la valeur de LogementsData, nous pouvons appeler setLogementsData.
   **/

  const [LogementsData, setLogementsData] = useState([])
  const [loading, setLoading] = useState(true)

  /**
   * useEffect - Hook d'éffet -:
   */

  useEffect(() => {
    getData().then((data) => {
      setLogementsData(data)
      setLoading(false)
    })
  }, [])

  return (
    <>
      {loading ? (
        <Loader /> //Mettre en place une loader
      ) : (
        <>
          {LogementsData.map((logement) => ( //Prendre dans le donné tous le logement
            <Card key={logement.id} logement={logement} /> //Mettre par son id
          ))}
        </>
      )}
    </>
  )
}

export default Chambre
