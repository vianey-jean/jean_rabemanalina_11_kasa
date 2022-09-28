import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Accueil from "../pages/Accueil";
import Apropos from "../pages/Apropos";
import Erreur from "../pages/Erreur";
import LogementsDetails from "../pages/LogementDetails";

export const routes = [ //création variable routes
    {
      path: "/",//début de chagement, on lance la fonction Layout.
      element: <Layout />, // mise en page de header, main footer
      children: [
        { //si on clique sur un lien, ça sera vers accueil
            index: true, 
            element: <Accueil /> 
        },
        {//si on clique sur un lien, ça sera vers fiche-logement
          path: "fiche-logement/:id",
          element: <LogementsDetails />,
        },
        {//si on clique sur un lien, ça sera vers apropos
          path: "apropos",
          element: <Apropos />,
        },
        { //si on clique sur un lien, ça sera vers erreur
            path: "*", 
            element: <Erreur /> 
        },
      ],
    },
  ];

  function Layout() {//Création de la fonction Layout pour l'accueil de l'application
    return (
        <>
            <Header />{/*Faire appel le header dans le components et le mettre en place */}
            <main className="main">{/**Main de la page */}
                <Outlet /> {/**doit être utilisé dans les éléments de route parents pour restituer leurs éléments de route enfants */}
            </main>
            <Footer />{/**Pied de page */}
        </>
    )
  }