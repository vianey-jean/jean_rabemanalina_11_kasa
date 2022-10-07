import { getData } from "../../service/service";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DetailLogement from "../../components/DetailLogement";
import Loader from "../../components/Loader";

function LogementsDetails() {
  //Création méthode LogementsDetails
  //Création des Variables
  const { id } = useParams();
  const [LogementData, setLogementData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    //Utilisation des données vient de Data
    getData().then((data) => {
      setLogementData(data);
      setLoading(false);
      /**Ici on veux comparer id qui est selection  à la data. 
        *On dit que si le logement a affiche est nul ou 0, alors on navige avec 
        *avec usenavigate, on navigue à 404, mais si ce n'est pas a propos, accueil, logement ou fichelogement, alors c'est directement 
        *aller vers la page 404
        * */
      const logementAAfficher = data.filter((logement) => logement.id === id);
      if (logementAAfficher == null || logementAAfficher.length === 0) {
        navigate("/PagesErreur");
      }
    });
  }, [id, navigate]);

  return (
    //Mettre le loading avant le chargement des renseignement du logements
    <section>
      {loading ? (
        <Loader />
      ) : (/**
              *ici on met touis les logement si logement id est strictement égale a id selectionné.
             */
        LogementData.filter((logement) => logement.id === id).map(
          (logement) => <DetailLogement key={logement.id} logement={logement} />
        )
      )}
      {/*  Mettre en place les description du logement avec le filtrage de id du logement selectionné*/}
    </section>
  );
}

export default LogementsDetails;
