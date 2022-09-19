import { getData } from '../../service/service'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailLogement from '../../components/DetailLogement'
import Loader from '../../components/Loader'



function LogementsDetails() { //Création méthode LogementsDetails
  //Création des Variables
  const { id } = useParams()
  const [LogementData, setLogementData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => { //Utilisation des données vient de Data
    getData().then((data) => {
      setLogementData(data)
      setLoading(false)
    })
  }, [])

  return (//Mettre le loading avant le chargement des renseignement du logements
    <section>
      {loading ? (
        <Loader />
      ) :(
        LogementData.filter((logement) => logement.id.includes(id)).map( 
          (logement) => <DetailLogement key={logement.id} logement={logement} /> 
        ) 
      )}{/*  Mettre en place les description du logement avec le filtrage de id du logement selectionné*/}
    </section>
  )
}

export default LogementsDetails
