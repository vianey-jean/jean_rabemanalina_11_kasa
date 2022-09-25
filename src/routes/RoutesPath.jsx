import {Routes, Route } from 'react-router-dom'
import Accueil from '../pages/Accueil'
import Apropos from '../pages/Apropos'
import LogementsDetails from '../pages/LogementDetails'
import Erreur from '../pages/Erreur'


function RoutesPath() {
    return(
        <Routes>{/*Mettre routes en globales */}
              <Route path="/" element={<Accueil />} />{/*Faire appel L'accueil et le mettre en place */}
              <Route path="fiche-logement/:id" element={<LogementsDetails />} />{/*Faire appel fiche logement et le mettre en place */}
              {/**
               * <Route path="-fiche-logement/:id" element={<LogementDetails />} />*/} {/*Mettre en force sur la page fiche logement la page 404 */}
               
              <Route path="/apropos" element={<Apropos />} />{/*Faire appel l'apropos et le mettre en place */}
              {/*path="*" renvoi à la page erreur 404 si l'url de rien de déclaré au dessus*/}
              <Route path="*" element={<Erreur />} /> {/*Mettre en place la page erreur sur tous les cas  */}
            </Routes>
    );
}

export default RoutesPath;