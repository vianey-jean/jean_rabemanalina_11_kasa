import { getData } from '../../service/service'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailLogement from '../../components/DetailLogement'
import Loader from '../../components/Loader'



function HousingDetails() {
  const { id } = useParams()
  const [LogementData, setLogementData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData().then((data) => {
      setLogementData(data)
      setLoading(false)
    })
  }, [])

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        LogementData.filter((logement) => logement.id.includes(id)).map(
          (logement) => <DetailLogement key={logement.id} logement={logement} />
        )
      )}
    </section>
  )
}

export default HousingDetails
